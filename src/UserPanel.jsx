import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import AdminPanel from './AdminPanel'

function UserPanel() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUser()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  async function loadUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    setUser(user)

    if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('full_name, email, role')
        .eq('id', user.id)
        .single()

      setProfile(data)
    } else {
      setProfile(null)
    }

    setLoading(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  if (loading) {
    return <p>Laen kasutaja andmeid...</p>
  }

  if (!user) {
    return <p>Sa ei ole sisse logitud.</p>
  }

  return (
    <div className="user-panel">
      <h2>Tere!</h2>

      <p>
        <strong>E-post:</strong> {user.email}
      </p>

      {profile && (
        <>
          <p>
            <strong>Nimi:</strong> {profile.full_name}
          </p>

          <p>
            <strong>Roll:</strong> {profile.role}
          </p>
        </>
      )}

      <button onClick={handleLogout}>
        Logi välja
      </button>

      {profile?.role === 'admin' && (
        <>
          <button onClick={() => window.location.hash = 'admin'}>
            Administraatori paneel
          </button>

          <div id="admin">
            <AdminPanel />
          </div>
        </>
      )}
    </div>
  )
}

export default UserPanel
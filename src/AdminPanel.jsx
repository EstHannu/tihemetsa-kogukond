import { useState } from 'react'
import EventsAdmin from './EventsAdmin'

function AdminPanel() {
  const [activeSection, setActiveSection] = useState('')

  return (
    <section className="admin-panel">
      <h2>Administraatori paneel</h2>

      <p>Siit saad hakata Tihemetsa kogukonna sisu haldama.</p>

      <div className="admin-menu">
        <button onClick={() => setActiveSection('events')}>
          Sündmused
        </button>

        <button onClick={() => setActiveSection('news')}>
          Uudised
        </button>

        <button onClick={() => setActiveSection('forum')}>
          Foorum
        </button>

        <button onClick={() => setActiveSection('users')}>
          Kasutajad
        </button>
      </div>

      {activeSection === 'events' && (
        <EventsAdmin />
      )}

      {activeSection === 'news' && (
        <section>
          <h2>Uudiste haldus</h2>
          <p>Uudiste haldus tuleb siia.</p>
        </section>
      )}

      {activeSection === 'forum' && (
        <section>
          <h2>Foorumi haldus</h2>
          <p>Foorumi haldus tuleb siia.</p>
        </section>
      )}

      {activeSection === 'users' && (
        <section>
          <h2>Kasutajate haldus</h2>
          <p>Kasutajate haldus tuleb siia.</p>
        </section>
      )}
    </section>
  )
}

export default AdminPanel
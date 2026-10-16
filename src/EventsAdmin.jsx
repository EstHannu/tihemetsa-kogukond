import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function EventsAdmin() {
  const [events, setEvents] = useState([])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadEvents()
  }, [])

  async function loadEvents() {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('starts_at', { ascending: true })

    if (error) {
      console.error('Sündmuste laadimise viga:', error)
      return
    }

    setEvents(data || [])
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase
      .from('events')
      .insert({
        title_et: title,
        description_et: description,
        starts_at: date,
        location,
      })

    if (error) {
      setMessage(`Viga: ${error.message}`)
    } else {
      setMessage('Sündmus lisatud!')

      setTitle('')
      setDescription('')
      setDate('')
      setLocation('')

      loadEvents()
    }

    setLoading(false)
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      'Kas oled kindel, et soovid selle sündmuse kustutada?'
    )

    if (!confirmed) {
      return
    }

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)

    if (error) {
      setMessage(`Viga: ${error.message}`)
      return
    }

    setMessage('Sündmus kustutatud!')
    loadEvents()
  }

  return (
    <section className="events-admin">
      <h2>Lisa uus sündmus</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sündmuse nimi"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <textarea
          placeholder="Kirjeldus"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <input
          type="datetime-local"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Asukoht"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Salvestan...' : 'Lisa sündmus'}
        </button>
      </form>

      {message && <p>{message}</p>}

      <hr />

      <h2>Olemasolevad sündmused</h2>

      {events.length === 0 ? (
        <p>Sündmusi ei ole.</p>
      ) : (
        <div className="admin-events-list">
          {events.map((event) => {
            const eventDate = new Date(event.starts_at)

            return (
              <article className="admin-event" key={event.id}>
                <div>
                  <h3>{event.title_et}</h3>

                  <p>{event.description_et}</p>

                  <p>
                    <strong>Kuupäev:</strong>{' '}
                    {eventDate.toLocaleString('et-EE')}
                  </p>

                  {event.location && (
                    <p>
                      <strong>Asukoht:</strong> {event.location}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(event.id)}
                >
                  Kustuta
                </button>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default EventsAdmin
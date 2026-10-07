import './App.css'

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a className="logo" href="/">
            <span className="logo-mark">T</span>
            <span>
              <strong>Tihemetsa</strong>
              <small>Kogukond</small>
            </span>
          </a>

          <nav className="navigation">
            <a href="#avaleht">Avaleht</a>
            <a href="#sundmused">Sündmused</a>
            <a href="#uudised">Uudised</a>
            <a href="#foorum">Foorum</a>
            <a href="#meist">Meist</a>
          </nav>

          <button className="login-button">
            Logi sisse
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="avaleht">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">TIHEMETSA KOGUKOND</p>

              <h1>
                Meie kodu.
                <br />
                Meie inimesed.
                <br />
                Meie lugu.
              </h1>

              <p className="hero-text">
                Tihemetsa kogukonna ühine koht, kus jagame
                infot, korraldame sündmusi ja viime koos
                ellu häid ideid.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#sundmused">
                  Vaata sündmusi
                </a>

                <a className="button button-secondary" href="#meist">
                  Meist lähemalt
                </a>
              </div>
            </div>

            <div className="hero-card">
              <span>JÄRGMINE SÜNDMUS</span>
              <strong>Tihemetsa kogukonnaõhtu</strong>
              <p>📅 Kuupäev lisame Supabase'ist</p>
              <p>📍 Tihemetsa</p>
            </div>
          </div>
        </section>

        <section className="section" id="sundmused">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">MIS TOIMUB?</p>
                <h2>Tulevased sündmused</h2>
              </div>

              <a href="#sundmused" className="more-link">
                Kõik sündmused →
              </a>
            </div>

            <div className="events">
              <article className="event">
                <div className="date">
                  <strong>24</strong>
                  <span>JUUNI</span>
                </div>

                <div>
                  <span className="tag">KOGUKONNAÜRITUS</span>
                  <h3>Tihemetsa jaanipäev</h3>
                  <p>
                    Ühine jaanipäeva tähistamine, muusika,
                    lõke ja hea seltskond.
                  </p>
                  <small>📍 Tihemetsa</small>
                </div>
              </article>

              <article className="event">
                <div className="date">
                  <strong>15</strong>
                  <span>JUULI</span>
                </div>

                <div>
                  <span className="tag">KOGUKOND</span>
                  <h3>Suveõhtu saunas</h3>
                  <p>
                    Mõnus õhtu kogukonna sauna ja hea
                    seltskonnaga.
                  </p>
                  <small>📍 Tihemetsa</small>
                </div>
              </article>

              <article className="event">
                <div className="date">
                  <strong>03</strong>
                  <span>AUG</span>
                </div>

                <div>
                  <span className="tag">TALGUD</span>
                  <h3>Tihemetsa talgupäev</h3>
                  <p>
                    Teeme koos meie kodukohta paremaks.
                  </p>
                  <small>📍 Tihemetsa</small>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section news-section" id="uudised">
          <div className="container">
            <p className="eyebrow">VÄRSKE INFO</p>
            <h2>Viimased uudised</h2>

            <div className="news-grid">
              <article className="news-card">
                <span className="tag">TEADE</span>
                <h3>Tihemetsa kogukonna tegemised</h3>
                <p>
                  Siia hakkavad ilmuma kogukonna uudised,
                  teated ja olulised teadaanded.
                </p>
                <a href="#uudised">Loe edasi →</a>
              </article>

              <article className="news-card">
                <span className="tag">UUDIS</span>
                <h3>Uus kogukonna veebileht</h3>
                <p>
                  Loome ühise koha, kus Tihemetsa info on
                  kõigile lihtsalt leitav.
                </p>
                <a href="#uudised">Loe edasi →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="forum" id="foorum">
          <div className="container forum-inner">
            <div>
              <p className="eyebrow">KOGUKONNA HÄÄL</p>
              <h2>Räägime kaasa.</h2>
              <p>
                Foorumis saavad kogukonna liikmed jagada
                ideid, teha ettepanekuid ja arutada
                Tihemetsa elu puudutavaid teemasid.
              </p>
            </div>

            <a className="button button-light" href="#foorum">
              Ava foorum
            </a>
          </div>
        </section>

        <section className="section about" id="meist">
          <div className="container about-inner">
            <p className="eyebrow">MEIE KOGUKOND</p>

            <h2>
              Tihemetsa on midagi enamat
              kui lihtsalt koht kaardil.
            </h2>

            <p>
              Meie eesmärk on tuua kohalikud inimesed kokku,
              toetada ühiseid algatusi ning hoida Tihemetsa
              elu aktiivse ja ühtehoidvana.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Tihemetsa Kogukond</strong>
            <p>Koos on kodukoht parem.</p>
          </div>

          <p>© 2026 Tihemetsa Kogukond MTÜ</p>
        </div>
      </footer>
    </div>
  )
}

export default App
import React from 'react'
import { aboutText, memberships, judging, publications, media } from './data'
import About from './components/About'
import Memberships from './components/Memberships'
import Judging from './components/Judging'
import Publications from './components/Publications'
import Media from './components/Media'

export default function App() {
  return (
    <div>
      <header className="site-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#memberships">Memberships</a>
          <a href="#judging">Judging</a>
          <a href="#publications">Publications</a>
          <a href="#media">Media</a>
        </nav>
      </header>

      <main>
        <section id="about" className="panel">
          <About text={aboutText} />
        </section>

        <section id="memberships" className="panel">
          <h2>Memberships</h2>
          <Memberships items={memberships} />
        </section>

        <section id="judging" className="panel">
          <h2>Judging</h2>
          <Judging items={judging} />
        </section>

        <section id="publications" className="panel">
          <h2>Publications</h2>
          <Publications items={publications} />
        </section>

        <section id="media" className="panel">
          <h2>Media Articles</h2>
          <Media items={media} />
        </section>
      </main>

      <footer className="site-footer">© <span id="year">{new Date().getFullYear()}</span></footer>
    </div>
  )
}

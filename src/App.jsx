import { useState } from 'react'
import NaglowekPortalu from './components/NaglowekPortalu.jsx'
import KartaPilkarza from './components/KartaPilkarza.jsx'
import PrzyciskPrzedstawSie from './components/PrzyciskPrzedstawSie.jsx'
import './App.css'

function Aplikacja() {
  const pilkarze = [
    {
      nazwisko: 'Bruno Fernandes',
      pozycja: 'Pomocnik i kapitan',
      numer: '08',
      opis: 'Kapitan drużyny. Dobrze podaje i często strzela.',
    },
    {
      nazwisko: 'Kobbie Mainoo',
      pozycja: 'Pomocnik',
      numer: '37',
      opis: 'Młody piłkarz United. Gra w środku pola.',
    },
    {
      nazwisko: 'Lisandro Martínez',
      pozycja: 'Obrońca',
      numer: '06',
      opis: 'Obrońca, który pomaga drużynie zatrzymać ataki.',
    },
    {
      nazwisko: 'André Onana',
      pozycja: 'Bramkarz',
      numer: '24',
      opis: 'Bramkarz Manchesteru United.',
    },
  ]

  const ciekawostki = [
    'Manchester United gra na stadionie Old Trafford.',
    'Klub powstał w 1878 roku.',
    'Przydomek drużyny to Czerwone Diabły.',
  ]

  const [szukanyTekst, ustawSzukanyTekst] = useState('')
  const [imie, ustawImie] = useState(localStorage.getItem('portalUserName') || '')
  const [ciekawostka] = useState(function () {
    return ciekawostki[Math.floor(Math.random() * ciekawostki.length)]
  })

  const znalezieniPilkarze = pilkarze.filter(function (pilkarz) {
    return pilkarz.nazwisko.toLowerCase().includes(szukanyTekst.toLowerCase())
  })

  function przedstawUzytkownika() {
    const noweImie = window.prompt('Jak masz na imię?')

    if (noweImie !== null && noweImie.trim() !== '') {
      localStorage.setItem('portalUserName', noweImie.trim())
      ustawImie(noweImie.trim())
    }
  }

  return (
    <div className="strona">
      <NaglowekPortalu />

      <main>
        <section className="baner" id="start">
          <h1>Manchester United</h1>
          <p>Prosty portal o Czerwonych Diabłach.</p>
          <a href="#druzyna">Zobacz drużynę</a>
        </section>

        <section className="powitanie">
          <p>{imie ? 'Witaj ponownie, ' + imie + '!' : 'Witaj, kibicu!'}</p>
          <PrzyciskPrzedstawSie poKliknieciu={przedstawUzytkownika} />
        </section>

        <section className="sekcja-druzyny" id="druzyna">
          <h2>Drużyna</h2>
          <label className="wyszukiwarka">
            Szukaj piłkarza:
            <input
              type="text"
              value={szukanyTekst}
              onChange={function (zdarzenie) {
                ustawSzukanyTekst(zdarzenie.target.value)
              }}
            />
          </label>

          <div className="lista-pilkarzy">
            {znalezieniPilkarze.map(function (pilkarz) {
              return <KartaPilkarza key={pilkarz.numer} pilkarz={pilkarz} />
            })}
          </div>

          {znalezieniPilkarze.length === 0 && <p>Nie znaleziono piłkarza.</p>}
        </section>

        <section className="sekcja-ciekawostki">
          <h2>Ciekawostka</h2>
          <p>{ciekawostka}</p>
        </section>
      </main>

      <footer className="stopka">Strona fanowska Manchesteru United</footer>
    </div>
  )
}

export default Aplikacja

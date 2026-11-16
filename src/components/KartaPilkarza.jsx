function KartaPilkarza({ pilkarz }) {
  return (
    <article className="karta-pilkarza">
      <span className="numer-pilkarza">{pilkarz.numer}</span>
      <h3>{pilkarz.nazwisko}</h3>
      <p className="pozycja-pilkarza">{pilkarz.pozycja}</p>
      <p className="opis-pilkarza">{pilkarz.opis}</p>
    </article>
  )
}

export default KartaPilkarza

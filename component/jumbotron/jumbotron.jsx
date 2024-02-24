import style from './jumbotron.module.css'

export default function Jumbotron() {
  return (
    <section className={style.jumbotron}>
      <h1 className={style.jumbotron__title}>Selamat datang</h1>
      <p className={style.jumbotron__detail}>Kenalin, aku Fikri Setiawan. Ini adalah situs pribadiku.</p>
    </section>
  )
}
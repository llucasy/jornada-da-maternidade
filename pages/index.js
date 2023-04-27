import Head from 'next/head'
import CarouselImages from './CarouselImages'
import Menu from './Menu'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jornada da Maternidade</title>
      </Head>
      <Menu />
      <CarouselImages />
      <main className="container">
      </main>
    </>
  )
}

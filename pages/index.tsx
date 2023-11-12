import Layout from '@/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RAD Consultoria Aeronáutica</title>
        <meta name="description" content="A RAD Consultoria Aeronáutica oferece serviços especializados em registro de aeródromos e helipontos. Conte com nossa experiência para garantir conformidade regulatória e excelência operacional. Consulte-nos para soluções personalizadas na área da aviação." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="RAD Consultoria Aeronáutica" />
        <meta property="og:description" content="A RAD Consultoria Aeronáutica oferece serviços especializados em registro de aeródromos e helipontos. Conte com nossa experiência para garantir conformidade regulatória e excelência operacional. Consulte-nos para soluções personalizadas na área da aviação." />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="RAD Consultoria Aeronáutica" />

        <meta property="twitter:title" content="RAD Consultoria Aeronáutica" />
        <meta property="twitter:description" content="A RAD Consultoria Aeronáutica oferece serviços especializados em registro de aeródromos e helipontos. Conte com nossa experiência para garantir conformidade regulatória e excelência operacional. Consulte-nos para soluções personalizadas na área da aviação." />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>
      <main>
        <Layout></Layout>
      </main>
    </>
  )
}

import Info from '@/components/Info'
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
        <Layout>
          <Info background='#FFFFFF' color='#13131A' title='Obtenha Registros De Aeródromos De Forma Descomplicada' paragraph='Nós o orientaremos desde a preparação da documentação até a coordenação com as autoridades competentes. Com a RAD ao seu lado, a obtenção de registros de aeródromos se torna uma tarefa eficiente e livre de complicações, permitindo que você esteja pronto para operações aeronáuticas seguras e regulares.' imageUrl='/images/pista.png' alt="Pista de pouso - registro de aeródromo" />
          <Info background='#023E8A' color='#F1F1F1' title='Qualidade e Eficiência no Registro de Helipontos' paragraph='O registro de helipontos é uma etapa crucial para a conformidade com regulamentações aeronáuticas. Com a RAD Consultoria Aeronáutica como sua parceira, o registro de helipontos se torna uma tarefa descomplicada, permitindo que você opere com segurança e em conformidade.' imageUrl='/images/heliponto.png' alt='Heliponto - resgistro de heliponto' invert={true} />
          <Info background='#FFFFFF' color='#13131A' title='Registro e Transferência de Aeronaves de Forma Simples' paragraph='Nossa equipe especializada cuida de toda a papelada e do processo regulatório. Seja para expandir sua frota, atualizar sua aeronave ou gerenciar transações de propriedade, nós simplificamos o caminho para você.' imageUrl='/images/ultraleve.png' alt='Ultraleve - transferência de avião'/>
        </Layout>
      </main>
    </>
  )
}

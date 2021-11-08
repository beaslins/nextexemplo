import Layout from '../components/Layout'

import { getAllPostsForHome } from '../lib/api'

import styles from '../styles/Home.module.css'

import ServiceLeft from '../components/ServiceLeft'
import ServiceRight from '../components/ServiceRight'

import Post from '../components/PostList'
import Link from 'next/link'

export default function Home({allPosts: {edges}}) {

  return (
    <Layout title="Home | Wunjo">
      <div className={styles.imageHome}>
        <img src="/images/cletohome.png" alt=""/>
      </div>
      <section className={styles.about}>
        <h1 className={styles.aboutTitle}>Sobre</h1>
        <p>Graças aos avanços tecnológicos, o conhecimento tornou-se público e acessível para todos, com isso permitindo que um número maior de pessoas recebessem informações de que somos a soma de nossas energias e das energias do meio.</p>
        <p>Em 50 anos de experiência, estudos e reflexões, nesta linha de pensamento, conclui que é necessário fazermos a limpeza em todos os níveis de frequência energética.</p>
        <p>Atendendo às necessidades pessoais daqueles que se propõe a melhorar em vários aspectos da vida, tais como: problemas emocionais, profissionais, financeiros entre outros, aprimorando assim sua capacidade de reflexão, o caminho é a harmonização consigo e com suas aspirações.</p>

        <Link href="/servicos">
          <a className={styles.btn}>Saiba mais</a>
        </Link>
      </section>

      <section className={styles.services}>
        <div className={styles.list}>
          <ServiceLeft 
            type="Online | Presencial"
            service="Corporativo"
            description="O envolvimento de pessoas em um ambiente corporativo se dá pelos diversos níveis de conexão. Como cada pessoa carrega consigo uma energia diferente isso pode causar muitas desarmonias podendo atrapalhar o bom desenvolvimento da empresa. O nosso diferencial está em alinhar as energias da empresa para que as pessoas envolvidas consigam assim juntas atingir os seus objetivos, respeitando a essência de cada um."
            image="/images/corporativo.png"
          />
          <ServiceRight 
            type="Online | Presencial"
            service="Pessoal"
            description="O nosso diferencial está em harmonizar as pessoas para que convivam em um ambiente familiar agradável; respeitando a individualidade de todos os envolvidos, fazendo uma limpeza energética na residência para que cada ser humano traga ao ambiente o seu melhor."
            image="/images/pessoal.png"
          />
          <ServiceLeft 
            type="Online | Presencial"
            service="Acompanhamento Integrativo"
            description="Somos seres em constante mudança e uma parte significativa, que nos afetam, são oriundas do meio, sendo necessário fazer ajustes contínuos nos pensamentos, que por sua vez geram mudanças, permitindo alcançar nossos objetivos.

            O equilíbrio energético do nosso ser como um todo nos conduz a saúde física e emocional, trazendo harmonia e paz interior para a conquista de nossos objetivos."
            image="/images/integrativo.png"
          />
        </div>
      </section>
      <section className={styles.blog}>
        <h2>Blog</h2>
        <div className={styles.list}>
          {edges.map(({ node }) => (
            <Post key={node.id}
              image={node.featuredImage?.node.sourceUrl}
              title={node.title}
              excerpt={node.excerpt}
              slug={node.slug}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: {
      allPosts
    }
  };
}
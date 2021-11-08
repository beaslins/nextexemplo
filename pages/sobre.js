import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

function About() {
  return (
    <Layout title="Sobre | Wunjo">
        <section className="container">
          <div className={styles.about}>
            <img  className={styles.image} src="/images/cleto.jpeg" alt=""/>
            <div className={styles.text}>
              <h1 className={styles.title}>Quem sou</h1>
              <p>Sou engenheiro formado pala UMC em 1972. Mediador formado pelo IMAB em 2010.</p>
              <p>Desde adolescência, tive curiosidade sobre assuntos que envolviam rituais, suas motivações e seus resultados. Caminhando neste sentido, procurei estudar várias crenças e religiões para compreender por qual razão as pessoas fazem suas opções religiosas e o que as leva a substituir suas crenças. Motivado por estas inquietações e buscando respostas, nos anos 70, fundei em São Paulo o espaço ING em um uma área de 1000 m². Um dos pioneiros em reunir várias atividades voltadas para a busca de uma melhor compreensão das interferências que o ser humano sofre das vibrações, crenças e espiritualidade.</p>
              <p>Nele desenvolvíamos atividades como tarô, runas, cristais, pirâmide, acupuntura, astrologia, radiestesia, radiônica, além de teatro, centro de estudos, cursos e livraria.</p>
            </div>
          </div>
          <div className={styles.philosophy}>
            <div className={styles.text}>
            <h2 className={styles.title}>Meu trabalho</h2>
              <p>No meu trabalho como engenheiro, em manutenção de equipamentos de grande porte e funcionamento contínuo, devido ao fato de não haver computadores na época para monitoramento, este era feito por pessoas em turnos. Acompanhando os relatórios, percebi que, o equipamento apresentava o mesmo tipo de falha, quando era turno de uma mesma pessoa. Solicitei aos colegas engenheiros, da mesma área de atuação, que observassem os relatórios para verificar se acontecia a mesma ocorrência.</p>
              <p>Levei estas pesquisas para meu centro de estudos, para debater o assunto.</p>
              <p>Esta experiência me levou a estudar frequências mais sutis desde espectrometria de massa até as vibrações de pensamento do ser humano.</p>
              <p>A partir deste momento me dediquei a pesquisar e trabalhar com as influências do pensamento humano nas transformações que ocorrem nos locais, objetos, no meio e empresas.</p>
              <p>Concluí que como o pó impregna pessoas, locais, objetos, o meio e empresas, mas pode ser limpo por meios convencionais, as frequências energéticas impregnadas, também podem ser limpas e transformadas por meios específicos.</p>
            </div>
            <img  className={styles.image} src="/images/meutrabalho.png" alt=""/>
          </div>
          <div className={styles.aboutWunjo}>
            <h3 className={styles.title}>Conceito da marca</h3>
            <div className={styles.boxesAbout}>
              <div>
                  <h2 className={styles.title}>RUNAS</h2>
                  <p className={styles.description}>Somos seres em constante mudança e uma parte significativa, que nos afetam, são oriundas do meio, sendo necessário fazer ajustes contínuos nos pensamentos, que por sua vez geram mudanças, permitindo alcançar nossos objetivos.</p> <p className={styles.description}>O equilíbrio energético do nosso ser como um todo nos conduz a saúde física e emocional, trazendo harmonia e paz interior para a conquista de nossos objetivos.</p>
              </div>
              <div>
                  <h2 className={styles.title}>WUNJO</h2>
                  <p className={styles.description}>Esta Runa simboliza o viver de forma plena, com harmonia em todos os momentos da vida. Também traz a mensagem de que devemos sempre conservar a alegria e os bons sentimentos. Palavra – Chave   Soluções satisfatórias e afortunadas.</p>
                </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default About
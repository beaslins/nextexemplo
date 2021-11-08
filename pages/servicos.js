import Layout from '../components/Layout'

import ServiceLeft from '../components/ServiceLeft'
import ServiceRight from '../components/ServiceRight'

import styles from '../styles/Services.module.css'

export default function Services() {
    return (
        <Layout title="Serviços | Wunjo">
            <section className="container">
                <div className={styles.servicePresentation}>
                    <h2>Método</h2>
                    <div className={styles.method}>
                        <div>
                            <p>Meu método de trabalho é dividido em cinco etapas</p>
                            <ul>
                                <li>Visita ao Cliente</li>
                                <li>Análise das energias envolvidas, objetivos e expectativa do cliente.</li>
                                <li>Orientação e direcionamento</li>
                                <li>Utilização de equipamentos radiônicos e ou visitas periódicas ao local, para verificação do conjunto que envolve pessoas e ambiente.</li>
                                <li>Encontros individuais com pessoas envolvidas no processo.</li>
                            </ul>
                        </div>
                        <div>
                            <p>Os objetivos dos clientes  serão considerados , verificando se existe ou não,  necessidade  de trabalhar todas as etapas.</p>
                            <p>Entre os benefícios estão:</p>
                            <ul>
                                <li>Limpeza e harmonização;</li>
                                <li>Ativação das energias em direção dos objetivos propostos;</li>
                                <li>Potencialização do processo cocriador</li>
                                <li>Outros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className={styles.services}>
                    <h1>Serviços</h1>
                    <div className={styles.servicesBox}>
                        <div id="corporativo">
                            <p className={styles.type}>Online | Presencial</p>
                            <h2 className={styles.title}>Corporativo</h2>
                            <p className={styles.description}>Toda empresa envolve pessoas, sejam colaboradores, fornecedores, prestadores de serviços e clientes.</p> <p className={styles.description}>Esse ambiente de trabalho pode ficar desarmônico, causando stress, falta de comprometimento, tensão, ansiedade e outras questões. Para que a energia seja equilibrada mantida entre as partes, é necessário inicialmente fazer-se uma análise, para determinarmos, qual a energia que qualifica e impulsiona a empresa.</p> <p className={styles.description}>Partindo-se do principio que uma empresa não é igual a outra, sendo ela ou não do mesmo ramo e atendendo aos mesmos clientes, priorizamos  as seguintes analises:</p>
                            <ul className={styles.list}>
                                <li>Como os colaboradores veêm a empresa?</li>
                                <li>Como os clientes percebem a empresa?</li>
                                <li>Como é feito o atendimento ao cliente e quem o faz?</li>
                            </ul>
                            <p className={styles.description}>Qual a importância que os fornecedores e prestadores de serviços tem para a empresa? Lidar com esta somatória energética , mostra os caminhos para a empresa, o processo  é feito através de avaliações  com todos envolvidos , partindo da necessidade da empresa</p>
                        </div>
                        <div id="pessoal">
                            <p className={styles.type}>Online | Presencial</p>
                            <h2 className={styles.title}>Pessoal</h2>
                            <p className={styles.description}>Para que seja criado um equilíbrio harmônico vibracional, no ambiente, entre as pessoas envolvidas e as expectativas dos mesmos, é necessário que seja avaliada a frequência energética existente, fazendo-se uma limpeza, podendo assim gerar novas frequências.</p>
                        </div>
                        <div id="integrativo">
                            <p className={styles.type}>Online | Presencial</p>
                            <h2 className={styles.title}>Acompanhamento Integrativo</h2>
                            <p className={styles.description}>Somos seres em constante mudança e uma parte significativa, que nos afetam, são oriundas do meio, sendo necessário fazer ajustes contínuos nos pensamentos, que por sua vez geram mudanças, permitindo alcançar nossos objetivos.</p> <p className={styles.description}>O equilíbrio energético do nosso ser como um todo nos conduz a saúde física e emocional, trazendo harmonia e paz interior para a conquista de nossos objetivos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
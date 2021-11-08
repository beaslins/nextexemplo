import Layout from '../components/Layout'
import Link from 'next/link'

import { useState } from 'react'

import styles from '../styles/Contact.module.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    const [nome, setNome]               = useState('')
    const [email, setEmail]             = useState('')
    const [telefone, setTelefone]       = useState('')
    const [mensagem, setMensagem]       = useState('')
    const [submitted, setSubmitted]     = useState(false)

    const [mensagemSucesso, setSucesso] = useState(false)
    const [mensagemFalha, setFalha]     = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()

        // Trocar o nome do botão Enviar para Enviando
        console.log('Sending')
        
        let data = {
          nome,
          email,
          telefone,
          mensagem
        }

        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {

          // console.log('Response received')
          if (res.status === 200) {
            // Mostrar caixa de email enviado
            // console.log('Response succeeded!')

            // Limpar campos
            setSubmitted(true)
            setSucesso(true)
            setFalha(false)

            setNome('')
            setEmail('')
            setTelefone('')
            setMensagem('')
          } else {
            setFalha(true)
            setSucesso(false)
          }
        })
      }

    return (
        <Layout title="Contato | Wunjo">
            <section className={styles.contact}>
                <div className={styles.image}>
                    <img src="/images/cleto.jpeg" alt=""/>
                </div>
                <div className={styles.infos}>
                    <h1 className={styles.title}>Fale conosco</h1>
                    <Link href="mailto:contato@wunjo.com.br">
                        <a>contato@wunjo.com.br</a>
                    </Link>
                    <div className={styles.social}>
                        <Link href="https://www.facebook.com/wunjo.com.br">
                            <a target="_blank"><FaFacebookF className="icon"/></a>
                        </Link>
                        <Link href="https://www.instagram.com/lojawunjo/">
                            <a target="_blank"><FaInstagram className="icon"/></a>
                        </Link>
                    </div>

                    <div>
                        <Link href="https://api.whatsapp.com/send?phone=5511932970166">
                            <a className={styles.btnWhats}>
                                <FaWhatsapp className="icon"/>
                                <span>Vamos conversar?</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={mensagemSucesso ? "successMessage" : "hideMessage"}>
                        <p>Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.</p>
                    </div>
                    <div className={mensagemFalha ? "failMessage" : "hideMessage"}>
                        <p>Sua mensagem não foi enviada devido a uma instabilidade do servidor, tente novamente mais tarde.</p>
                    </div>
                    <form>
                        <div>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input id="" required type="text" name="nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.inputTopSpace}>
                                <label htmlFor="email">Email</label>
                                <input id="" required type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.inputTopSpace}>
                                <label htmlFor="telefone">Telefone</label>
                                <input id="" required type="text" name="telefone" value={telefone} onChange={(e)=>{setTelefone(e.target.value)}}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.inputTopSpace}>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea name="mensagem" id="" required cols="30" rows="5" value={mensagem} onChange={(e)=>{setMensagem(e.target.value)}}></textarea>
                            </div>
                        </div>
                        <input className={styles.btn} type="submit" onClick={(e)=>{handleSubmit(e)}} value="Enviar"/>
                    </form>
                </div>
            </section>
        </Layout>
    )
}
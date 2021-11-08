import { getAllPostsForFooter } from '../lib/api'

import Head from 'next/head'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Layout({title, children}) {
    const router = useRouter()
    const route  = router.route

    // Menu
    const [showMe, setShowMe] = useState(false)
    function toggle(){
      setShowMe(!showMe)
    }

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Works Midia"/>

                {/** Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Epilogue&family=Lora&family=Shadows+Into+Light&display=swap" rel="stylesheet" />

                {/** Google */}
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>

                {/** Social */}
                <meta property="og:title" content="Wunjo"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content="/images/wunjo.png"/>


                {/** Global site tag (gtag.js) - Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-194651681-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-PRK8W3V2EW');
                      `,
                    }}
                />
            </Head>
            <header>
                <div className={showMe ? "menu-section on" : "menu-section"}>
                    <div className="top container">
                        <div className="social flex">
                            <Link href="https://www.facebook.com/wunjo.com.br">
                                <a target="_blank"><FaFacebookF className="icon"/></a>
                            </Link>
                            <Link href="https://www.instagram.com/lojawunjo/">
                                <a target="_blank"><FaInstagram className="icon"/></a>
                            </Link>
                        </div>
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/wunjo.png" alt=""/>
                            </a>
                        </Link>
                        <div className="contact flex">
                            <Link href="">
                                <a><FaWhatsapp className="icon"/></a>
                            </Link>
                            <Link href="mailto:contato@wunjo.com.br">
                                <a><FaEnvelope className="icon"/></a>
                            </Link>
                        </div>
                        <div className="menu-toggle" onClick={toggle}>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </div>
                    <nav className="top-menu">
                        <Link href="/">
                            <a className={route == "/" ? 'active' : ''}>Home</a>
                        </Link>
                        <Link href="/sobre">
                            <a className={route == "/sobre" ? 'active' : ''}>Sobre</a>
                        </Link>
                        <Link href="/servicos">
                            <a className={route == "/servicos" ? 'active' : ''}>Serviços</a>
                        </Link>
                        <Link href="/blog">
                            <a className={route == "/blog" ? 'active' : ''}>Blog</a>
                        </Link>
                        <Link href="/contato">
                            <a className={route == "/contato" ? 'active' : ''}>Contato</a>
                        </Link>
                    </nav>
                </div>
            </header>
            {children}
            <footer>
                <div className="footer-informations">
                    <div className="container flex">
                        <div className="footer-logo">
                            <img src="/images/wunjo.jpg" alt=""/>
                        </div>
                        <div className="footer-menu">
                            <h3>Menu</h3>
                            <Link href="/">
                                <a className="underlineEffect">Home</a>
                            </Link>
                            <Link href="/sobre">
                                <a className="underlineEffect">Sobre</a>
                            </Link>
                            <Link href="/servicos">
                                <a className="underlineEffect">Serviços</a>
                            </Link>
                            <Link href="/blog">
                                <a className="underlineEffect">Blog</a>
                            </Link>
                            <Link href="/contato">
                                <a className="underlineEffect">Contato</a>
                            </Link>
                        </div>
                        <div className="footer-services">
                            <h3>Serviços</h3>
                            <Link href="/servicos/#corporativo">
                                <a className="underlineEffect">Corporativo</a>
                            </Link>
                            <Link href="/servicos/#pessoal">
                                <a className="underlineEffect">Pessoal</a>
                            </Link>
                            <Link href="/servicos/#integrativo">
                                <a className="underlineEffect">Acompanhamento Integrativo</a>
                            </Link>
                        </div>
                        {/*<div className="footer-blog">
                            <h3>Blog</h3>
                            {edges.map(({ node }) => (
                                <Link as={`/blog/${node.slug}`} href="/blog/[{node.slug}]">
                                    <a className="underWlineEffect">{node.title}</a>
                                </Link>
                            ))}
                            <Link href="">
                                <a className="underlineEffect">Post 1</a>
                            </Link>
                            <Link href="">
                                <a className="underlineEffect">Conceito de frequência</a>
                            </Link>
                            <Link href="">
                                <a className="underlineEffect">Post 3</a>
                            </Link>
                            <Link href="">
                                <a className="underlineEffect">Post 4</a>
                            </Link>
                        </div>*/}
                        <div className="footer-contact">
                            {/*<a href="">11 9 3297-0166</a>
                            <a href="mailto:contato@wunjo.com.br">contato@wunjo.com.br</a>*/}
                            {/*<div className="bt-circle">
                                <Link href="/contato">
                                    <a className="underlineEffect">Contato</a>
                                </Link>
                            </div>*/}
                            <div>
                                <Link href="https://api.whatsapp.com/send?phone=5511932970166">
                                    <a className="btnWhats">
                                        <FaWhatsapp className="icon"/>
                                        <span>Vamos conversar?</span>
                                    </a>
                                </Link>
                            </div>
                            <div className="footer-social">
                                <Link href="https://www.facebook.com/wunjo.com.br">
                                    <a target="_blank"><FaFacebookF className="icon"/></a>
                                </Link>
                                <Link href="https://www.instagram.com/lojawunjo/">
                                    <a target="_blank"><FaInstagram className="icon"/></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark-green">
                    <div className="container copy">
                        Desenvolvido por 
                        <Link href="https://www.worksmidia.com.br">
                            <a className="underlineEffect">Works Midia</a>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPostsForFooter();
    return {
      props: {
        allPosts
      }
    };
  }



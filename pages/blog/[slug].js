import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import {getAllPostsWithSlug, getPost} from '../../lib/api'
import styles from '../../styles/Post.module.css'
import absoluteUrl from 'next-absolute-url'
import { useState, useEffect } from 'react'

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
    RedditIcon,
    PinterestIcon,
  } from "react-share";

export default function Post({postData}) {

    let host = 'http://localhost:3000'
    useEffect(() => {
        host = window.location.host;
    })

    const router = useRouter()

    if(!router.isFallback && !postData?.slug) {
        return <p>Não foi possível encontrar o artigo</p>
    }

    const formatDate = date => {
        const newDate = new Date(date)
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    }

    const image = postData?.featuredImage?.node.sourceUrl

    return (
        <Layout title={postData?.title}>
            <div style={{ backgroundImage: `url(${image})`}} className={styles.postTitle}>
                <div className={styles.postTitleLayer}></div>
                <div className={styles.postTitleContent}>
                    <h1>{postData?.title}</h1>
                    {/*<p>{formatDate(postData?.date)}</p>*/}
                </div>
            </div>
            <div className={styles.post}>
                <div className="container">
                    <article>
                        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData?.content }} />
                    </article>
                </div>
                <div className={styles.shareButtons}>
                    <FacebookShareButton url={`${host}/blog/${postData?.slug}`}>
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                    <LinkedinShareButton url={`${host}/blog/${postData?.slug}`}>
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <TelegramShareButton url={`${host}/blog/${postData?.slug}`}>
                        <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                    <EmailShareButton url={`${host}/blog/${postData?.slug}`}>
                        <EmailIcon size={40} round={true} />
                    </EmailShareButton>
                    <TwitterShareButton url={`${host}/blog/${postData?.slug}`}>
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton url={`${host}/blog/${postData?.slug}`}>
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const data = await getPost(params.slug)
    return {
        props: {
            postData: data.post
        }
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
      fallback: false,
    }
  }

/** Lembrar de voltar fallback para true quando publicar em prod */
import styles from '../styles/PostList.module.css'
import Link from 'next/link'

export default function Post({image, title, excerpt, slug}) {
    return (
        <div className={styles.post}>
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <img className={styles.pointer} src={image} alt={title}/>
            </Link>
            <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}/>
            {/*<div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />*/}
            

            <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <a className={styles.link}>Leia esse post</a>
            </Link>
        </div>
    )
}
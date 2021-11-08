import Layout from '../../components/Layout'
import Post from '../../components/PostList'

import { getAllPosts } from '../../lib/api'

import styles from '../../styles/Blog.module.css'

function Blog({allPosts: {edges}}) {
  return (
    <Layout title="Blog | Wunjo">
        <section className="container">
          <div className={styles.blog}>
            <h1>Blog</h1>
            <div className={styles.posts}>
              {edges.map(({ node }) => (
                <Post key={node.id}
                  image={node.featuredImage?.node.sourceUrl}
                  title={node.title}
                  excerpt={node.excerpt}
                  slug={node.slug}
                />
              ))}
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}
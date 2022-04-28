import { GetStaticProps } from 'next';
import Head from "next/head";
import Image from 'next/image';

import { getPrismicClient } from '../services/prismic';
import { createClient } from '../../prismicio'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ posts }) {
  return (
    <>

     <Head>
      <title>IT Support Life</title>
      </Head>
    
    <div className={styles.homeContainer}>
      <div className={styles.postContainer}>

          {posts.map(post => {
            return(
                <>
                    <h2>{post.data.title}</h2>
                    <p>{post.data.subtitle}</p>  

                      <div className={styles.dateContainer}>
                        <Image src="/images/calendar.png" width="20" height="20" />
                        <span>{post.first_publication_date}</span>
                      </div> 

                      <div className={styles.authorContainer}>
                        <Image src="/images/user.png" width="20" height="20" />
                        <span>{post.data.author}</span>
                    </div>        
                </>)
          })}
      
      </div> 
    </div>    
     
    </>   
  )
}


export const getStaticProps = async () => {
  const client = createClient()

  const response  = await client.getAllByType('posts')

  const posts = response.map(post => {
    
    return {      
        uid: post.uid,
        first_publication_date: new Date(post.first_publication_date).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
      }),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
        }
      }
    }  
  ) 

  // const prismic = getPrismicClient();
  // const postsResponse = await prismic.query(TODO);

  return {
    props: { posts },
  }
};

import { GetStaticProps } from 'next';
import Head from "next/head";

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

export default function Home({ post }) {
  return (
    <>

     <Head>
      <title>{post.data.title}</title>
      </Head>
    
    {/* <h1>{post.data.title}</h1>    */}
     
    </>   
  )
}


export const getStaticProps = async () => {
  const client = createClient()

  const response  = await client.getAllByType('posts')

  const post = {
    uid: response[0].uid,
    first_publication_date: response[0].first_publication_date,
    data: {
      title: response[0].data.title,
      subtitle: response[0].data.subtitle,
      author: response[0].data.author,
    }
  }

  // const prismic = getPrismicClient();
  // const postsResponse = await prismic.query(TODO);

  return {
    props: { post },
  }
};

import { GetStaticProps } from 'next';

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

// export default function Home({}: HomeProps) {
//   return (
//     {}
//   )
// }


export const getStaticProps = async () => {
  const client = createClient()

  const response = await client.getAllByType('posts')

  console.log(response)
  // const prismic = getPrismicClient();
  // const postsResponse = await prismic.query(TODO);

  return {
    props: { response },
  }
};

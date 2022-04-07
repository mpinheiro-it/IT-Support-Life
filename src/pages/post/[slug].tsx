import { GetStaticPaths, GetStaticProps } from 'next';
import { createClient } from '../../../prismicio';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

// export default function Post({post} : PostProps) {
//   // TODO
// }

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const client = createClient()

//   const slug = context

//   const response = await client.getAllByType('posts')

//   const post = {
//     slug
//   }

//   return {
//     props: {post}
//   }
// };

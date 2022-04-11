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

export const getStaticPaths = async () => {
  const client = createClient();

  const posts = await client.getAllByType('posts');

  return {
    paths: [
      { params: { posts } }
    ],
    fallback: true // false or 'blocking'
  };
};


export const getStaticProps = async context => {
  const client = createClient();
  
  const slug = context

  const response = await client.getAllByType('posts')

  const post = {
    uid: response[0].uid,
    first_publication_date: response[0].first_publication_date,
    data: {
      title: response[0].data.title,
      subtitle: response[0].data.subtitle,
      author: response[0].data.author
    }
  }
  
  return {
    props: {post}
  }
};

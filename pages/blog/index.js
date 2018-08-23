import Layout from '../../components/Layout';
import Link from 'next/link';

const PostLink = (props) => (
    <li>
        <Link as={`/blog/${props.id}`} href={`/blog/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>Мой блог</h1>
        <ul>
            <PostLink id="first-post" title="Первая статья" />
            <PostLink id="second-post" title="Вторая статья" />
            <PostLink id="third-post" title="Третья статья" />
        </ul>
    </Layout>
);

import { withRouter } from 'next/router';
import Layout from '../../components/Layout.js';

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>Текст статьи</p>
    </div>
));

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

export default Page;

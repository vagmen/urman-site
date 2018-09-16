import Layout from '../../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const menuItem = 'journal';

const Index = (props) => (
    <Layout title="Журнал" menuItem={menuItem}>
        <h1>Forest</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link
                        as={`/journal/p/${show.id}`}
                        href={`/journal/post?id=${show.id}`}
                    >
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
            h1,
            a {
                font-family: 'Arial';
            }

            ul {
                padding: 0;
            }

            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);
    console.log('data', data);

    return {
        shows: data,
    };
};

export default Index;

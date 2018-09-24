import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';

const menuItem = 'journal';

const Index = ({ subMenuItems }) => (
    <Layout title="Журнал" menuItem={menuItem}>
        <WithSubMenu subMenuItems={subMenuItems} menuItem={menuItem}>
            <h1>Журнал – URMAN</h1>
            {/* <ul>
                {props.shows.map(({ show }) => (
                    <li key={show.id}>
                        <Link
                            as={`/journal/${show.id}`}
                            href={`/journal/post?id=${show.id}`}
                        >
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul> */}
        </WithSubMenu>
        <style jsx>{`
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    const data = await res.json();
    const subMenuItems = {};

    data.forEach((item) => (subMenuItems[item.id] = item.name));

    return {
        subMenuItems: subMenuItems,
    };
};

export default Index;

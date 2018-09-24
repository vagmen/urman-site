import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import menuData from '../../constants/menuData';

const menuItem = 'services';

const Index = (props) => (
    <Layout title="Услуги" menuItem={menuItem}>
        <WithSubMenu subMenuItems={menuData[menuItem]} menuItem={menuItem}>
            <h1>Наши услуги</h1>
        </WithSubMenu>
    </Layout>
);

Index.getInitialProps = async function() {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    // const data = await res.json();

    return {
        data: menuData[menuItem],
    };
};

export default Index;

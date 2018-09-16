import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import menuData from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'geography';

const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]} menuItem={menuItem}>
        <WithSubMenu
            subMenuItems={menuData[menuItem]}
            subMenuItem={subMenuItem}
            menuItem={menuItem}
        >
            <h1>География</h1>
        </WithSubMenu>
    </Layout>
);

export default Index;

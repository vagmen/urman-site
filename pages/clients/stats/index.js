import Layout from '../../../components/Layout';
import WithSubMenu from '../../../components/WithSubMenu';
import menuData from '../../../constants/menuData';

const menuItem = 'clients';
const subMenuItem = 'stats';

const Index = () => (
    <Layout title={menuData[menuItem][subMenuItem]}>
        <WithSubMenu
            subMenuItems={menuData[menuItem]}
            subMenuItem={subMenuItem}
            menuItem={menuItem}
        >
            <h1>Статистика</h1>
        </WithSubMenu>
        <style jsx>{`
            .content {
            }
        `}</style>
    </Layout>
);

export default Index;

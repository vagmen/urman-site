import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import menuData from '../../constants/menuData';

const menuItem = 'clients';

const Index = () => (
    <Layout title="Клиенты" menuItem={menuItem}>
        <div className="about__wrapper">
            <div className="page-content">
                <WithSubMenu
                    subMenuItems={menuData[menuItem]}
                    menuItem={menuItem}
                >
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                    <h1>Клиенты</h1>
                </WithSubMenu>
            </div>
        </div>
    </Layout>
);

export default Index;

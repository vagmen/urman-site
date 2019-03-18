import Layout from "../../../components/Layout";
import Statistics from "../../../components/Statistics";
import WithSubMenu from "../../../components/WithSubMenu";
import { menuData } from "../../../constants/menuData";

const menuItem = "clients";
const subMenuItem = "stats";

const Index = () => (
    <Layout subMenuItem={subMenuItem} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu subMenuItem={subMenuItem} menuItem={menuItem}>
                    <h1>Статистика</h1>
                    <Statistics />
                </WithSubMenu>
            </div>
        </div>
    </Layout>
);

export default Index;

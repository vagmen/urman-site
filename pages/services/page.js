import { withRouter } from 'next/router';
import Layout from '../../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import { menuData } from '../../constants/menuData';
import WithSubMenu from '../../components/WithSubMenu';

const Page = ({ menuItem, subMenuItem }) => {
    const title = menuData[menuItem][subMenuItem];

    return (
        <Layout title={title} menuItem={menuItem}>
            <div className="page-background">
                <div className="page-content">
                    <WithSubMenu subMenuItems={menuData[menuItem]} subMenuItem={subMenuItem} menuItem={menuItem}>
                        <h1>{title}</h1>
                        <p>{subMenuItem}</p>
                    </WithSubMenu>
                </div>
            </div>
        </Layout>
    );
};

Page.getInitialProps = async function(context) {
    const { id } = context.query;

    // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    // const show = await res.json();

    return { menuItem: 'services', subMenuItem: id };
};

export default Page;

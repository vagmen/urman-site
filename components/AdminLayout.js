import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { LocaleProvider, Layout, Menu, Breadcrumb, Icon } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";
import AdminMenu from "./AdminMenu";
import { mainMenu } from "../constants/menuData";

const { Header, Content, Footer, Sider } = Layout;

const menuItemData = menuItem => mainMenu.find(item => item.src === menuItem);

// const AdminLayout = ({ postData, menuItem, children }) => (
class AdminLayout extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => this.setState({ collapsed });

    render() {
        const { postData, menuItem, children } = this.props;
        return (
            <Fragment>
                <Head>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
                    <link rel="icon" type="image/x-icon" href="/static/images/logo.ico" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>URMAN - Админка</title>
                </Head>
                {/* <Header /> */}
                <LocaleProvider locale={ruRU}>
                    <IconContext.Provider value={{ className: "react-icons" }}>
                        <Layout style={{ minHeight: "100vh" }}>
                            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                                <div className="logo" />
                                <div className="logo">
                                    <Link href="/">
                                        <h3 />URMAN
                                    </Link>
                                </div>
                                <Menu theme="dark" mode="inline">
                                    <Menu.Item key="1">
                                        <Link href="/admin/posts">
                                            <a href="">
                                                <Icon type="copy" />
                                                <span>Журнал</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link href="/admin/laborCosts">
                                            <a href="">
                                                <Icon type="dollar" />
                                                <span>Трудозатраты</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Layout>
                                {/* <Header style={{ background: "#fff", padding: 0 }} /> */}
                                <Content style={{ margin: "15px" }}>
                                    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>{children}</div>
                                </Content>
                            </Layout>
                        </Layout>
                    </IconContext.Provider>
                </LocaleProvider>
            </Fragment>
        );
    }
}

export default AdminLayout;

import { Fragment, Component } from "react";
import Head from "next/head";
import Link from "next/link";
import { ConfigProvider, Layout, Menu, Icon } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";

const { Content, Sider } = Layout;

// const AdminLayout = ({ postData, menuItem, children }) => (
class AdminLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => this.setState({ collapsed });

    render() {
        const { children } = this.props;
        const { collapsed } = this.state;
        return (
            <Fragment>
                <Head>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
                    <link rel="icon" type="image/x-icon" href="/images/logo.ico" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>URMAN - Админка</title>
                </Head>
                {/* <Header /> */}
                <ConfigProvider locale={ruRU}>
                    <IconContext.Provider value={{ className: "react-icons" }}>
                        <Layout style={{ height: "100vh" }}>
                            <Sider
                                collapsible
                                collapsed={collapsed}
                                onCollapse={this.onCollapse}
                                style={{
                                    overflow: "auto",
                                    height: "100vh",
                                }}
                            >
                                <div className="logo">
                                    <h3>{`URMAN${collapsed ? "" : " - Админка"}`}</h3>
                                </div>
                                <Menu theme="dark" mode="inline">
                                    {/* <Menu.Item key="1">
                                        <Link href="/admin/posts">
                                            <a href="">
                                                <Icon type="copy" />
                                                <span>Журнал</span>
                                            </a>
                                        </Link>
                                    </Menu.Item> */}
                                    <Menu.Item key="2">
                                        <Link href="/admin/laborCosts">
                                            <a href="">
                                                <Icon type="dollar" />
                                                <span>Трудозатраты</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <Link href="/admin/avers">
                                            <a href="">
                                                <Icon type="file-sync" />
                                                <span>Аверс</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Layout>
                                {/* <Header style={{ background: "#fff", padding: 0 }} /> */}
                                <Content>
                                    {children}
                                    {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div> */}
                                </Content>
                            </Layout>
                        </Layout>
                    </IconContext.Provider>
                </ConfigProvider>
                <style jsx global>{`
                    body {
                        font-size: 16px;
                        font-family: Rubik, Helvetica, sans-serif;
                    }
                    .admin-top-bar {
                        padding: 8px;
                        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                        position: sticky;
                        top: 0;
                        z-index: 100;
                        background: #fff;
                        display: flex;
                        align-items: center;
                    }

                    .admin-content {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .admin-card {
                        flex: 1 1 100%;
                        margin: 8px;
                        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                        border-radius: 4px;
                        background: #fff;
                    }
                    .admin-card__with-padding {
                        padding: 16px;
                    }
                    .admin-card-header {
                        padding: 16px;
                    }
                `}</style>
                <style jsx>{`
                    .logo h3 {
                        color: #eee;
                        padding: 10px;
                        white-space: nowrap;
                    }
                `}</style>
            </Fragment>
        );
    }
}

export default AdminLayout;

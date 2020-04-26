import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { LocaleProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";
// import Header from "./Header";
// import Menu from "./Menu";
// import Connect from "./Connect";
import { mainMenu } from "../constants/menuData";
import { mainColorMid } from "../constants/colors";

const Header = dynamic(import("./Header"));
const Menu = dynamic(import("./Menu"));
const FooterWithMap = dynamic(import("./FooterWithMap"));
const Connect = dynamic(import("./Connect"));

const menuItemData = (menuItem) => mainMenu.find((item) => item.src === menuItem);

const Layout = ({ postData, menuItem, headerOpacity, children, metaImg }) => {
    const title = postData ? postData.title : menuItemData(menuItem).title || "URMAN - Лесные решения";
    const description = postData ? postData.description : menuItemData(menuItem).description || "";
    const image = <img src={metaImg || "/images/logo.png"} />;
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="google-site-verification" content="DTZ5X6H4xmsBhZUVAeNA0iqkBxXuf6pwWPzqXC3LhOY" />
                <meta name="yandex-verification" content="6d5ccb923e12ca16" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={image} />
                <meta name="robots" content="index,follow" />
                <meta name="theme-color" content={mainColorMid} />
            </Head>
            <Header headerOpacity={headerOpacity} />
            <LocaleProvider locale={ruRU}>
                <IconContext.Provider value={{ className: "react-icons" }}>
                    <Fragment>
                        <Menu menuItem={menuItem} headerOpacity={headerOpacity} />
                        {children}
                        {menuItem !== "contacts" && <FooterWithMap />}
                        <Connect />
                    </Fragment>
                </IconContext.Provider>
            </LocaleProvider>
        </Fragment>
    );
};

export default Layout;

import { Fragment } from "react";
import Head from "next/head";
import { LocaleProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";
import { YMInitializer } from "react-yandex-metrika";
import Header from "./Header";
import Menu from "./Menu";
import StartProject from "./StartProject";
import { mainMenu } from "../constants/menuData";

const menuItemData = menuItem => mainMenu.find(item => item.src === menuItem);

const Layout = ({ postData, menuItem, children }) => (
    <Fragment>
        <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
            <link rel="icon" type="image/x-icon" href="/static/images/logo.ico" />
            <link rel="manifest" href="/static/manifest.json" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="DTZ5X6H4xmsBhZUVAeNA0iqkBxXuf6pwWPzqXC3LhOY" />
            <meta name="yandex-verification" content="6d5ccb923e12ca16" />
            <meta name="title" content={postData ? postData.title : menuItemData(menuItem).title || "URMAN"} />
            <meta
                name="description"
                content={postData ? postData.description : menuItemData(menuItem).description || ""}
            />
            {/* <meta name="google-site-verification" content="13s4tTPGhfJIZYmOa_q1xPyiypySCl1Z8wJIzwjTV5w" /> */}
        </Head>
        <Header />
        <YMInitializer accounts={[51360247]} />
        <LocaleProvider locale={ruRU}>
            <IconContext.Provider value={{ className: "react-icons" }}>
                <Fragment>
                    <Menu menuItem={menuItem} />
                    {children}
                    <StartProject />
                </Fragment>
            </IconContext.Provider>
        </LocaleProvider>
    </Fragment>
);

export default Layout;

import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { LocaleProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";
import { YMInitializer } from "react-yandex-metrika";
// import Header from "./Header";
// import Menu from "./Menu";
// import Footer from "./Footer";
// import Connect from "./Connect";
// import StartProject from "./StartProject";
import { mainMenu } from "../constants/menuData";
import { mainColorMid } from "../constants/colors";

const Header = dynamic(import("./Header"));
const Menu = dynamic(import("./Menu"));
const Footer = dynamic(import("./Footer"));
const FooterWithMap = dynamic(import("./FooterWithMap"));
const Connect = dynamic(import("./Connect"));
const StartProject = dynamic(import("./StartProject"));

const menuItemData = (menuItem) => mainMenu.find((item) => item.src === menuItem);

const Layout = ({ postData, menuItem, headerOpacity, children }) => (
    <Fragment>
        <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
            <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
            <link rel="manifest" href="/static/manifest.json" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="google-site-verification" content="DTZ5X6H4xmsBhZUVAeNA0iqkBxXuf6pwWPzqXC3LhOY" />
            <meta name="yandex-verification" content="6d5ccb923e12ca16" />
            <title>{postData ? postData.title : menuItemData(menuItem).title || "URMAN"} </title>
            <meta
                name="description"
                content={postData ? postData.description : menuItemData(menuItem).description || ""}
            />
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content={mainColorMid} />
            {/* <script
                type="text/javascript"
                charset="utf-8"
                async
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A798c47d6ec9476b31bd77261de226b79cba73cc2c67641b1dbdb05e4c13329dc&amp;lang=ru_RU&amp;scroll=false;id=mymap"
            /> */}
            {/* <meta name="google-site-verification" content="13s4tTPGhfJIZYmOa_q1xPyiypySCl1Z8wJIzwjTV5w" /> */}
        </Head>
        <Header headerOpacity={headerOpacity} />
        <YMInitializer accounts={[51360247]} />
        <LocaleProvider locale={ruRU}>
            <IconContext.Provider value={{ className: "react-icons" }}>
                <Fragment>
                    <Menu menuItem={menuItem} headerOpacity={headerOpacity} />
                    {children}
                    {menuItem !== "contacts" && (
                        <Fragment>
                            <StartProject />
                            <FooterWithMap />
                        </Fragment>
                    )}
                    <Connect />
                </Fragment>
            </IconContext.Provider>
        </LocaleProvider>
    </Fragment>
);

export default Layout;

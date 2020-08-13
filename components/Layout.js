import Head from "next/head";
import dynamic from "next/dynamic";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";
import MenuMobile from "components/MenuMobile/MenuMobile";
import { mainMenu } from "../constants/menuData";
import Footer from "./Footer/Footer";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import RequestForm from "./RequestForm/RequestForm";
import ContactPanels from "./ContactPanels/ContactPanels";
import RequestModal from "./RequestModal/RequestModal";
import { useState } from "react";

const Header = dynamic(import("./Header/Header"));

const menuItemData = (menuItem) => mainMenu.find((item) => item.src === menuItem);

const Layout = ({ postData, menuItem, headerOpacity, children, metaImg, isMainPage }) => {
    const title = postData ? postData.title : menuItem ? menuItemData(menuItem)?.title : "URMAN - Лесные решения";
    const description = postData ? postData.description : menuItem ? menuItemData(menuItem)?.description : "";
    const image = <img src={metaImg || "/images/logo.png"} />;

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#488558" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
                />
                <meta name="google-site-verification" content="DTZ5X6H4xmsBhZUVAeNA0iqkBxXuf6pwWPzqXC3LhOY" />
                {/* <meta name="yandex-verification" content="6d5ccb923e12ca16" /> */}
                <meta name="yandex-verification" content="090c1190f20c2e2a" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={image} />
                <meta name="robots" content="index,follow" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
            </Head>
            <Header headerOpacity={headerOpacity} isMainPage={isMainPage} />
            <ContactPanels onOpenModal={() => setVisible(true)} />
            <RequestModal visible={visible} onClose={() => setVisible(false)} />
            <ConfigProvider locale={ruRU}>
                <IconContext.Provider value={{ className: "react-icons" }}>
                    <>
                        <MenuMobile menuItem={menuItem} />
                        {children}
                        <MultiStepForm />
                        <Footer />
                    </>
                </IconContext.Provider>
            </ConfigProvider>
        </>
    );
};

export default Layout;

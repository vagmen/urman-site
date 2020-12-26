import Head from "next/head";
import { ConfigProvider } from "antd";
import ruRU from "antd/lib/locale-provider/ru_RU";
import { IconContext } from "react-icons";
import MenuMobile from "components/MenuMobile/MenuMobile";
import { mainMenu } from "../constants/menuData";
import Footer from "./Footer/Footer";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import ContactPanels from "./ContactPanels/ContactPanels";
import RequestModal from "./RequestModal/RequestModal";
import Header from "components/Header/Header";
import ContextWrapper from "./ContextWrapper";

const menuItemData = (menuItem) => mainMenu.find((item) => item.src === menuItem);

const Layout = ({ postData, menuItem, headerOpacity, children, metaImg, isMainPage }) => {
    const title = postData ? postData.title : menuItem ? menuItemData(menuItem)?.title : "URMAN - Лесные решения";
    const description = postData ? postData.description : menuItem ? menuItemData(menuItem)?.description : "";
    const image = <img src={metaImg || "/images/logo.png"} loading="lazy" />;

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
                {/* <meta name="yandex-verification" content="090c1190f20c2e2a" /> */}
                <meta name="yandex-verification" content="e814767f0c229f30" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={image} />
                <meta name="robots" content="index,follow" />
                {/* <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.4/antd.compact.min.css"
                    integrity="sha512-guk54J6R429LOl1EGP/NDRTBeLq/QnPcT3ffTBKB7VGQsgcANggBxHIWnct/vUGB7hZ/yZvl15TriL8wb7vFOw=="
                    crossOrigin="anonymous"
                /> */}
                {/* <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" /> */}
            </Head>
            <ContextWrapper>
                <Header headerOpacity={headerOpacity} isMainPage={isMainPage} />
                <ContactPanels />
                <RequestModal />
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
            </ContextWrapper>
        </>
    );
};

export default Layout;

import Head from "next/head";
import { IconContext } from "react-icons";
import MenuMobile from "components/MenuMobile/MenuMobile";
import { mainMenu } from "../constants/menuData";
import Footer from "./Footer/Footer";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import ContactPanels from "./ContactPanels/ContactPanels";
import RequestModal from "./RequestModal/RequestModal";
import Header from "components/Header/Header";
import ContextWrapper from "./ContextWrapper";
import { ReactNode } from "react";

const menuItemData = (menuItem) => mainMenu.find((item) => item.src === menuItem);

interface IPostData {
    title: string;
    description: string;
}

interface ILayoutProps {
    menuItem: string;
    children: ReactNode;
    postData?: IPostData;
    metaImg?: string;
}

const Layout = ({ postData, menuItem, children, metaImg }: ILayoutProps) => {
    const title = postData ? postData.title : menuItem ? menuItemData(menuItem)?.title : "URMAN - Лесные решения";
    const description = postData ? postData.description : menuItem ? menuItemData(menuItem)?.description : "";
    const image = metaImg || "/images/logo.png";

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
            </Head>
            <ContextWrapper>
                <Header />
                <ContactPanels />
                <RequestModal />
                {/* <ConfigProvider locale={ruRU}> */}
                <IconContext.Provider value={{ className: "react-icons" }}>
                    <>
                        <MenuMobile menuItem={menuItem} />
                        {children}
                        <MultiStepForm />
                        <Footer />
                    </>
                </IconContext.Provider>
                {/* </ConfigProvider> */}
            </ContextWrapper>
        </>
    );
};

export default Layout;

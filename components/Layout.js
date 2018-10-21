import { Fragment } from 'react';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import { IconContext } from 'react-icons';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import StartProject from './StartProject';

const Layout = ({ title, menuItem, children }) => (
    <Fragment>
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css"
            />
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
        </Head>
        <Header />
        <LocaleProvider locale={ruRU}>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <Fragment>
                    <Menu menuItem={menuItem} />
                    {children}
                    <StartProject />
                </Fragment>
            </IconContext.Provider>
        </LocaleProvider>
        {/* <Footer /> */}
    </Fragment>
);

export default Layout;

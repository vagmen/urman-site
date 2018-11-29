import { Fragment } from 'react';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import { IconContext } from 'react-icons';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import StartProject from './StartProject';
import { YMInitializer } from 'react-yandex-metrika';

const Layout = ({ title, menuItem, children }) => (
    <Fragment>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.min.css" />
            <meta name="google-site-verification" content="DTZ5X6H4xmsBhZUVAeNA0iqkBxXuf6pwWPzqXC3LhOY" />
            <meta name="google-site-verification" content="13s4tTPGhfJIZYmOa_q1xPyiypySCl1Z8wJIzwjTV5w" />
        </Head>
        <Header />
        <YMInitializer accounts={[51360247]} />
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

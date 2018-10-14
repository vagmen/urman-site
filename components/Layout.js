import { Fragment } from 'react';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
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
        </Head>
        <Header />
        <LocaleProvider locale={ruRU}>
            <Fragment>
                <Menu menuItem={menuItem} />
                {children}
                <StartProject />
            </Fragment>
        </LocaleProvider>
        {/* <Footer /> */}
        <style jsx>{`
            .page-content {
                 {
                    /* padding: 20px; */
                }
                 {
                    /* max-width: 1400px;
                margin: 0 auto; */
                }
                 {
                    /* background: #eee; */
                }
            }
        `}</style>
    </Fragment>
);

export default Layout;

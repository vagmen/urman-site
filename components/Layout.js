import { Fragment } from 'react';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import { IconContext } from 'react-icons';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import StartProject from './StartProject';

const Layout = ({ title, menuItem, background, children }) => (
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
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <Fragment>
                    <Menu menuItem={menuItem} />
                    <div className="page-background">
                        <div className="page-content">{children}</div>
                    </div>
                    <StartProject />
                </Fragment>
            </IconContext.Provider>
        </LocaleProvider>
        {/* <Footer /> */}
        <style jsx>{`
            .page-background {
                background: ${background || `#eee`};
            }
        `}</style>
    </Fragment>
);

export default Layout;

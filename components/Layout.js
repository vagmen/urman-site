import Head from 'next/head';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ title, menuItem, children }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css"
            />
        </Head>
        <Header />
        <Menu menuItem={menuItem} />
        <LocaleProvider locale={ruRU}>
            <div>{children}</div>
        </LocaleProvider>
        <Footer />
    </div>
);

export default Layout;

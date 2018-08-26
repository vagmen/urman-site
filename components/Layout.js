import Header from './Header';
import Head from 'next/head';
import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';

const Layout = ({ title, children }) => (
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
        <style jsx global>{`
            body {
            }
        `}</style>
        <Header />
        <LocaleProvider locale={ruRU}>
            <div>{children}</div>
        </LocaleProvider>
    </div>
);

export default Layout;

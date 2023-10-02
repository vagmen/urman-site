import Document, { Html, Head, Main, NextScript } from "next/document";
import { YMInitializer } from "react-yandex-metrika";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <script async src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                    {/* <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    /> */}
                    {/* <link href="https://unpkg.com/sanitize.css" rel="stylesheet" /> */}
                    {/* <link href="https://unpkg.com/sanitize.css/typography.css" rel="stylesheet" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    {/* <YMInitializer
                        accounts={[51360247]}
                        // accounts={[parseInt(process.env.YM_COUNTER_ID as string)]}
                        options={{ webvisor: true, defer: true }}
                        version="2"
                    /> */}
                    {/* <YMInitializer
                        accounts={[51360247]}
                        options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }}
                    /> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

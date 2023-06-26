import "../styles/style.css";
import "../styles/design_tokens.css";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";
import WithYandexMetrika from "components/WithYandexMetrika/WithYandexMetrika";

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {/* <YMInitializer
                accounts={[51360247]}
                options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true }}
            /> */}
            <WithYandexMetrika>
                <Component {...pageProps} />;
            </WithYandexMetrika>
        </>
    );
};

export default App;

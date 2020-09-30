import Layout from "components/Layout";
import styles from "./styles404.module.css";
import Link from "next/link";

const Custom404 = () => (
    <Layout menuItem={""}>
        <div className={styles.notFound}>
            <div className={styles.notFoundInner}>
                <h1 className={styles.notFound404}>404</h1>
                <p className={styles.description}>К сожалению, такой страницы еще нет, но есть много других</p>
                <Link href={"/"}>
                    <a className={styles.homeButton} title="На главную">
                        На главную
                    </a>
                </Link>
            </div>
            <div className={styles.bg404}> </div>
        </div>
    </Layout>
);

export default Custom404;

import Layout from "components/Layout";
import styles from "./styles.module.css";

const Custom404 = () => (
    <Layout menuItem={""}>
        <div className={styles.notFound}>
            <div className={styles.notFoundInner}>
                <h1 className={styles.notFound404}>404</h1>
                <p className={styles.description}>К сожалению, такой страницы еще нет, но есть много других</p>
                <button className={styles.homeButton} title="На главную">
                    На главную
                </button>
            </div>
            <div className={styles.bg}> </div>
        </div>
    </Layout>
);

export default Custom404;

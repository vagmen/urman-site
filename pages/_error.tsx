import Layout from "components/Layout";
import PageHeader from "components/PageHeader/PageHeader.tsx";
import styles from "./stylesError.module.css";

function Error({ statusCode }) {
    return (
        <Layout>
            <PageHeader title="Ошибочка" />
            <p className={styles.description}>
                {statusCode ? (
                    <>
                        <span>На сервере произошла ошибка с кодом</span>
                        <span className={styles.code}>{` ${statusCode}`}</span>
                        <span>. Сообщите нам, пожалуйста, об этом.</span>
                    </>
                ) : (
                    "Произошла ошибка. Сообщите нам, пожалуйста, об этом)"
                )}
            </p>
        </Layout>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;

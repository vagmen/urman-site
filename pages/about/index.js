import Layout from "components/Layout";
import { API_URL } from "constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader";
import styles from "./styles.module.css";
import SectionParser from "components/SectionParser/SectionParser";

const Index = ({ header, subHeader, sections }) => (
    <Layout menuItem="about">
        <PageHeader title={header} className={styles.header} subTitle={subHeader} />
        {sections.map((section) => (
            <SectionParser data={section} key={section.id} />
        ))}
    </Layout>
);

Index.getInitialProps = async function () {
    let header = "";
    let subHeader = "";
    let sections = [];
    try {
        const res = await fetch(API_URL + "/about");
        const data = await res.json();
        header = data.header;
        subHeader = data.subHeader;
        sections = data.sections;
    } catch (error) {
        console.log(error);
    }
    return {
        header,
        subHeader,
        sections,
    };
};

export default Index;

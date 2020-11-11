import Layout from "components/Layout";
import { API_URL } from "constants/settings.js";
import PageHeader from "components/PageHeader/PageHeader";
import styles from "./styles.module.css";
import EmployeeCard from "components/EmployeeCard/EmployeeCard.js";
import Section from "components/Section/Section.js";
import Carousel from "components/Carousel/Carousel.js";
import ContextWrapper from "components/ContextWrapper.js";

const Index = ({ header, subHeader, departments, blocks }) => (
    <Layout menuItem="about">
        <PageHeader title={header} className={styles.header} />
        <h2 className={styles.subHeader}>{subHeader}</h2>
        {blocks.map((block) => (
            <Section {...block} />
        ))}
        {departments.map((item) => (
            <Carousel
                key={item.name}
                title={item.name}
                grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                list={item.employees}
                renderItem={(props) => <EmployeeCard {...props} />}
            />
        ))}
    </Layout>
);

Index.getInitialProps = async function () {
    let header = "";
    let subHeader = "";
    let blocks = [];
    let departments = [];
    try {
        const res = await fetch(API_URL + "/about");
        const data = await res.json();
        header = data.header;
        subHeader = data.subHeader;
        blocks = data.blocks.map((block) => ({ ...block, image: API_URL + block.image.url }));
        departments = data.departments.map((department) => {
            const employees = department.employees.map((employee) => ({
                ...employee,
                avatar: API_URL + employee.avatar.url,
            }));
            return { ...department, employees };
        });
    } catch (error) {
        console.log(error);
    }
    return {
        header,
        subHeader,
        blocks,
        departments,
    };
};

export default Index;

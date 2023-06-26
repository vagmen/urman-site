import Layout from "components/Layout";
import { API_URL } from "constants/settings";
import SectionParser from "components/SectionParser/SectionParser";

const Index = ({ sections }) => (
    <Layout menuItem="">
        {sections.map((section) => (
            <SectionParser data={section} key={section.id} />
        ))}
    </Layout>
);

Index.getInitialProps = async function () {
    try {
        const res = await fetch(API_URL + "/privacy");
        const data = await res.json();
        return { sections: data.sections };
    } catch (error) {
        console.log(error);
    }
};

export default Index;

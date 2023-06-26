import Section from "components/Section/Section";
import { API_URL } from "constants/settings";
import Carousel from "components/Carousel/Carousel";
import EmployeeCard from "components/EmployeeCard/EmployeeCard";
import Slogan from "components/Slogan/Slogan";
import PageHeader from "components/PageHeader/PageHeader";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";

const SectionParser = ({ data, key }) => {
    switch (data.__component) {
        case "page.page-header": {
            return <PageHeader key={key} title={data.header} subTitle={data.subHeader} />;
        }
        case "page.standard": {
            const props = { ...data, image: API_URL + data.image.url };
            return <Section {...props} key={key} />;
        }
        case "list.department": {
            return (
                <Carousel
                    key={key}
                    title={data.name}
                    grid={{ mobile: "245px", tablet: "245px", m: 3, l: 3, xl: 4 }}
                    list={data.employees.map((employee) => ({ ...employee, avatar: API_URL + employee.avatar.url }))}
                    renderItem={(props) => (
                        <EmployeeCard name={props.name} position={props.position} avatar={props.avatar} />
                    )}
                />
            );
        }
        case "page.slogan": {
            return <Slogan key={key} title={data.title} />;
        }
        case "page.content": {
            return <CustomMarkdown source={data.value} withPadding />;
        }
        default:
            return <></>;
    }
};

export default SectionParser;

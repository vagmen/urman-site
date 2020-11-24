import React from "react";
import styles from "./SectionParser.module.css";
import classNames from "classnames";
import Link from "next/link";
import Section from "components/Section/Section";
import { API_URL } from "constants/settings";
import Carousel from "components/Carousel/Carousel";
import EmployeeCard from "components/EmployeeCard/EmployeeCard";
import Slogan from "components/Slogan/Slogan";

const SectionParser = ({ data, key }) => {
    switch (data.__component) {
        case "block.standard": {
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
                    renderItem={(props) => <EmployeeCard {...props} />}
                />
            );
        }
        case "block.slogan": {
            return <Slogan key={key} title={data.title} />;
        }
        default:
            return <></>;
    }
};

export default SectionParser;

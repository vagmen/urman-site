import React, { Fragment } from "react";
import styles from "./SectionHeader.module.css";
import classNames from "classnames";

const SectionHeader = ({ title, link, className, count }) => {
    return (
        <div className={classNames(className, styles.container)}>
            <h2>{title}</h2>
            {/* {link &&  } */}
        </div>
    );
};

// We.getInitialProps = async function () {
//     const res = await fetch(API_URL + "/statistikas");
//     const data = await res.json();
//     console.log("data", data);

//     const statistics = data.map((item) => ({
//         id: item.id,
//         count: item.count,
//         text: item.text,
//     }));

//     return {
//         statistics,
//     };
// };

export default SectionHeader;

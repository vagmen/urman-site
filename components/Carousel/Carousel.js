import styles from "./Carousel.module.css";
import classNames from "classnames";

const Carousel = ({ list = [] }) => {
    return (
        <div className={styles.container}>
            <div className={styles.scrollable}>
                {list?.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <img src={item.img} alt={item.title} className={styles.img} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
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

export default Carousel;

import styles from "./Categories.module.css";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Categories = ({ categories }) => {
    return (
        <div className={styles.container}>
            <SectionHeader
                title="Полезная информация"
                // title="Подборки статей"
            />
            <div className={styles.grid}>
                {categories.map((item) => (
                    <div key={item.slug} className={styles.item}>
                        <div className={styles.imgWrapper}></div>
                        <span className={styles.name}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

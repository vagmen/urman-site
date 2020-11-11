import styles from "./Section.module.css";
import classNames from "classnames";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";
import Button from "components/Button/Button";
import { useContext } from "react";
import HeaderContext from "contexts/HeaderContext";

const Section = ({ title, image, content, className, key, isImageLeft, buttonTitle }) => {
    const { setVisible } = useContext(HeaderContext);
    return (
        <div className={classNames(styles.container, { [styles.revers]: isImageLeft }, className)} key={key}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <CustomMarkdown source={content} />
                {buttonTitle && <Button title={buttonTitle} onClick={() => setVisible(true)} fullWidth />}
            </div>
            <div className={styles.imageWrapper}>
                <img src={image} className={styles.image} loading="lazy" alt={title} title={title} />
            </div>
        </div>
    );
};

export default Section;

import styles from "./Section.module.css";
import classNames from "classnames";
import CustomMarkdown from "components/CustomMarkdown/CustomMarkdown";
import Button from "components/Button/Button";
import { useContext } from "react";
import HeaderContext from "contexts/HeaderContext";
import Image from "next/image";

interface ISection {
    title: string;
    image: string;
    content: string;
    className?: string;
    buttonTitle?: string;
    isImageLeft?: boolean;
    isPageHeader?: boolean;
}

const Section = ({
    title,
    image,
    content,
    className,
    isImageLeft = false,
    buttonTitle,
    isPageHeader = false,
}: ISection) => {
    const { setVisible } = useContext(HeaderContext);
    return (
        <div className={classNames(styles.container, { [styles.revers]: isImageLeft }, className)}>
            <div className={styles.content}>
                {isPageHeader ? <h1 className={styles.title}>{title}</h1> : <h2 className={styles.title}>{title}</h2>}
                <CustomMarkdown source={content} />
                {buttonTitle && (
                    <Button onClick={() => setVisible(true)} color="primary">
                        {buttonTitle}
                    </Button>
                )}
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    blurDataURL={image}
                    className={styles.image}
                    width={350}
                    height={200}
                    layout="responsive"
                    placeholder="blur"
                    alt={title}
                    title={title}
                />
            </div>
        </div>
    );
};

export default Section;

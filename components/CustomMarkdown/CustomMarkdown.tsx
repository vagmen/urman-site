import styles from "./CustomMarkdown.module.css";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import VideoWrapper from "components/VideoWrapper/VideoWrapper";
import CustomLink from "components/CustomLink/CustomLink";
import Image from "next/image";

interface ICustomMarkdown {
    source: string;
    className?: string;
    withPadding?: boolean;
}

const CustomMarkdown = ({ source, className, withPadding }: ICustomMarkdown) => (
    <div className={classNames(styles.container, className, { [styles.padding]: withPadding })}>
        <ReactMarkdown
            components={{
                a: ({ node, ...props }) => {
                    return props.href.indexOf("youtube") !== -1 ? (
                        <VideoWrapper url={props.href} />
                    ) : (
                        <CustomLink href={props.href}>{props.children[0] || ""}</CustomLink>
                    );
                },
                img: ({ node, ...props }) => {
                    return (
                        <Image
                            src={props.src}
                            alt={props.alt}
                            width={350}
                            height={500}
                            className={styles.img}
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={props.src}
                        />
                    );
                },
            }}
        >
            {source}
        </ReactMarkdown>
    </div>
);

export default CustomMarkdown;

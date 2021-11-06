import styles from "./CustomLink.module.css";
import Link from "next/link";

interface ICustomLink {
    href: string;
    className?: string;
    children: any;
}

const CustomLink = ({ href, children }: ICustomLink) =>
    href[0] === "/" ? (
        <Link href={href} passHref>
            <a className={styles.a}>{children}</a>
        </Link>
    ) : (
        <a className={styles.a} target="_blank" rel="noopener noreferrer" href={href}>
            {children}
        </a>
    );
export default CustomLink;

import styles from "./MenuMobile.module.css";
import { mainMenu } from "../../constants/menuData";
import Link from "next/link";
import classNames from "classnames";
import { useWindowSize } from "utils/hooks.js";

const MenuMobile = ({ menuItem, className }) => {
    const { width } = useWindowSize();

    return (
        <nav className={classNames(styles.nav, className)}>
            <ul className={styles.menu}>
                {mainMenu
                    .filter((item) => width < 1050 || (width >= 1050 && item.src !== ""))
                    .map((item) => {
                        const Icon = item.icon;
                        console.log("menuItem", menuItem, item.src);

                        return (
                            item.isMainMenu && (
                                <Link key={item.src} href={"/" + item.src} passHref>
                                    <a className={styles.link}>
                                        <li
                                            className={classNames(styles.item, {
                                                [styles.active]: menuItem === item.src,
                                            })}
                                        >
                                            <Icon
                                                className={classNames(styles.icon, {
                                                    [styles.activeIcon]: menuItem === item.src,
                                                })}
                                            />
                                            <span
                                                className={classNames(styles.title, {
                                                    [styles.activeTitle]: menuItem === item.src,
                                                })}
                                            >
                                                {item.name}
                                            </span>
                                        </li>
                                    </a>
                                </Link>
                            )
                        );
                    })}
            </ul>
        </nav>
    );
};

export default MenuMobile;

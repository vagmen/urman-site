import styles from "./Contacts.module.css";
import classNames from "classnames";
import { FaTelegramPlane, FaWhatsapp, FaYoutube, FaVk, FaInstagram } from "react-icons/fa";
import * as gtag from "lib/gtag";

const Contacts = ({ className }) => {
    return (
        <>
            <div className={classNames(styles.wrapper, className)}>
                <div className={styles.content}>
                    <a
                        href="tel:+79631363486"
                        className={classNames(styles.btn, styles.phone, styles.showInDesktop)}
                        title="Позвонить"
                        onClick={() => {
                            ym(51360247, "reachGoal", "phoneBody");
                            gtag.event({
                                category: "phone",
                                action: "body",
                            });
                        }}
                    >
                        +7(963)136-34-86
                    </a>
                    <div className={styles.btns}>
                        <a
                            title="Whatsapp"
                            href="https://wa.me/79631363486"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btn}
                        >
                            <FaWhatsapp className={styles.icon} color="#43d854" />
                        </a>
                        <a title="Telegram" href="tg://resolve?domain=urmansu" className={styles.btn}>
                            <FaTelegramPlane className={styles.icon} color="#0088cc" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCsXvoen-yfZy3fiAPJpBqig"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Открыть канал на YouTube"
                            className={classNames(styles.btn, styles.showInDesktop)}
                        >
                            <FaYoutube className={styles.icon} color="#ff0000" />
                        </a>
                        <a
                            href="https://vk.com/urman_su"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="ВКонтакте"
                            className={classNames(styles.btn, styles.showInDesktop)}
                        >
                            <FaVk className={styles.icon} color="#4c75a3" />
                        </a>
                        <a
                            href="https://www.instagram.com/urman.su"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram"
                            className={classNames(styles.btn, styles.showInDesktop)}
                        >
                            <FaInstagram className={styles.icon} color="#833AB4" />
                        </a>
                    </div>
                    <a
                        href="tel:+79631363486"
                        className={classNames(styles.btn, styles.phone, styles.showInPhone)}
                        title="Позвонить"
                        onClick={() => ym(51360247, "reachGoal", "tel1")}
                    >
                        Позвонить
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contacts;

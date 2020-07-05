import styles from "./Footer.module.css";
import classNames from "classnames";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";
import { FaYoutube, FaWhatsapp, FaTelegramPlane, FaVk, FaInstagram } from "react-icons/fa";

const Footer = ({ className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            <div className={styles.btns}>
                <a
                    href="https://yandex.ru/maps/172/ufa/?ll=55.953013%2C54.736974&mode=routes&pt=72.878889E%2C54.484167N%2Cpmwtm1&rtext=~54.736873%2C55.952259&rtt=auto&z=18"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Найти нас на карте"
                    className={styles.item}
                >
                    <MdLocationOn className={styles.icon} color="#ff0000" />
                    <span className={styles.label}>450047, Уфа, ул. Ленина 63</span>
                </a>
                <a
                    href="tel:+79631363486"
                    className={styles.item}
                    title="Позвонить"
                    onClick={() => ym(51360247, "reachGoal", "tel1")}
                >
                    <MdLocalPhone className={styles.icon} color="#488558" />
                    <span className={styles.label}>+7 (963) 136-34-86</span>
                </a>
                <a href="mailto:proekt@urman.su" className={styles.item} title="Написать на почту proekt@urman.su">
                    <MdEmail className={styles.icon} color="#ffcc00" />
                    <span className={styles.label}>proekt@urman.su</span>
                </a>
            </div>
            <div className={styles.icons}>
                <a
                    href="https://www.youtube.com/channel/UCsXvoen-yfZy3fiAPJpBqig"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Открыть канал на YouTube"
                >
                    <FaYoutube className={styles.icon} color="#ff0000" />
                </a>
                <a title="Whatsapp" href="https://wa.me/79631363486" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className={styles.icon} color="#43d854" />
                </a>
                <a title="Telegram" href="tg://resolve?domain=urmansu">
                    <FaTelegramPlane className={styles.icon} color="#0088cc" />
                </a>
                <a href="https://vk.com/urman_su" target="_blank" rel="noopener noreferrer" title="ВКонтакте">
                    <FaVk className={styles.icon} color="#4c75a3" />
                </a>
                <a
                    href="https://www.instagram.com/urman.su"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                >
                    <FaInstagram className={styles.icon} color="#833AB4" />
                </a>
            </div>
        </div>
    );
};

export default Footer;

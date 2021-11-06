import styles from "./PrivacyCheckbox.module.css";
import { MdCheckBox } from "react-icons/md";
import CustomLink from "components/CustomLink/CustomLink";

const PrivacyCheckbox = () => {
    return (
        <div className={styles.checkboxWrapper}>
            <MdCheckBox className={styles.checkbox} size="36px" />
            <span className={styles.text}>
                Настоящим подтверждаю, что я ознакомлен и согласен с условиями{" "}
                <CustomLink href="/privacy">Политики в отношении обработки персональных данных</CustomLink>
            </span>
        </div>
    );
};

export default PrivacyCheckbox;

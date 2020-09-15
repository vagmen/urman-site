import styles from "./EmployeeCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";

const EmployeeCard = ({ className, avatar, name, position, img }) => {
    return (
        <div className={classNames(styles.card, className)}>
            <img className={styles.avatar} src={avatar} loading="lazy" />
            <Author name={name} company={position} className={styles.author} />
        </div>
    );
};

export default EmployeeCard;

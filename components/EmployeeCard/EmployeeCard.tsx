import styles from "./EmployeeCard.module.css";
import classNames from "classnames";
import Author from "components/Author/Author";

interface IEmployeeCard {
    name: string;
    position: string;
    avatar: string;
    className?: string;
}

const EmployeeCard = ({ className, avatar, name, position }: IEmployeeCard) => (
    <div className={classNames(styles.card, className)}>
        <img
            className={styles.avatar}
            src={avatar}
            loading="lazy"
            alt={name + " - " + position}
            title={name + " - " + position}
        />
        <Author name={name} company={position} className={styles.author} />
    </div>
);

export default EmployeeCard;

import styles from "./CircleButton.module.css";

const CircleButton = ({ onClick, children }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {children}
        </div>
    );
};

export default CircleButton;

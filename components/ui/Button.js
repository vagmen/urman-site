import { mainColorMid, mainColorLight } from "../../constants/colors";

const Button = ({ name, className = "", children, ...props }) => (
    <button className={`button primary-button ${className}`} {...props}>
        {children}
        <style jsx>{`
            .button {
                padding: 8px 12px;
                cursor: pointer;
                transition: all 0.4s;
                border-radius: 4px;
                box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px;
            }
            .primary-button {
                color: #fff;
                background: ${mainColorMid};
            }
            .primary-button:hover {
                background: ${mainColorLight};
            }
        `}</style>
    </button>
);

export default Button;

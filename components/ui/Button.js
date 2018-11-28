import { mainColorMid, mainColorLight } from "../../constants/colors";

const Button = ({ name, className = "", ...props }) => (
    <button className={`button primary-button ${className}`} {...props}>
        {name}
        <style jsx>{`
            .button {
                padding: 5px 10px;
                cursor: pointer;
                transition: all 0.4s;
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

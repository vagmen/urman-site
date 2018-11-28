import { mainColorMid } from "../../constants/colors";

const Button = ({ name, className = "" }) => (
    <button className={`button primary-button ${className}`}>
        {name}
        <style jsx>{`
            .button {
                padding: 5px 10px;
                cursor: pointer;
            }
            .primary-button {
                color: #fff;
                background: ${mainColorMid};
            }
        `}</style>
    </button>
);

export default Button;

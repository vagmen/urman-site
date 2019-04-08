import { mainColorMid, mainColorLight } from "../../constants/colors";

const ButtonViolet = ({ name, className = "", children, ...props }) => (
    <button className={`button ${className}`} {...props}>
        {children}
        <style jsx>{`
            .button {
                padding: 12px;
                cursor: pointer;
                transition: all 0.4s;
                border-radius: 8px;
                text-transform: uppercase;
                font-size: 14px;
                color: #fff;
                background: #5b2a4f;
                margin: 16px 0 32px;
            }
            .primary-button:hover {
                background: ${mainColorLight};
            }
        `}</style>
    </button>
);

export default ButtonViolet;

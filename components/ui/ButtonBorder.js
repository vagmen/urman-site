import { mainColorMid, mainColorLight } from "../../constants/colors";

const ButtonBorder = ({ name, className = "", children, ...props }) => (
    <button className={`button ${className}`} {...props}>
        {children}
        <style jsx>{`
            .button {
                padding: 8px 16px;
                cursor: pointer;
                transition: all 0.4s;
                border-radius: 8px;
                text-transform: uppercase;
                font-size: 12px;
                color: #fff;
                background: rgba(0, 0, 0, 0);
                margin: 16px 0 32px;
                border: 2px solid #fff;
            }
            .button:hover {
                background: ${mainColorMid};
                border: 2px solid ${mainColorMid};
            }
        `}</style>
    </button>
);

export default ButtonBorder;

import { mainColorMid, mainColorLight } from "../../constants/colors";

const ButtonGhost = ({ name, className = "", children, ...props }) => (
    <button className={`button ${className}`} {...props}>
        {children}
        <style jsx>{`
            .button {
                padding: 8px 12px;
                cursor: pointer;
                transition: all 0.4s;
                border-radius: 4px;
                text-transform: uppercase;
                font-size: 14px;
                color: #fff;
                background: rgba(0, 0, 0, 0);
                border: 1px solid #fff;
            }
            .primary-button:hover {
                background: ${mainColorLight};
            }
        `}</style>
    </button>
);

export default ButtonGhost;

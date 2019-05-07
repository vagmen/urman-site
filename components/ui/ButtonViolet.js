import { mainColorMid, mainColorLight, colorViolet, colorVioletDark } from "../../constants/colors";

const ButtonViolet = ({ name, className = "", size, children, ...props }) => (
    <button className={`button ${size ? `size-${size}` : ""} ${className}`} {...props}>
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
                background: ${colorViolet};
                margin: 16px 0 32px;
            }
            .button:hover {
                background: ${colorVioletDark};
            }
            .size-l {
                padding: 16px;
            }
        `}</style>
    </button>
);

export default ButtonViolet;

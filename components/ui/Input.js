import { mainColorMid, mainColorLight } from "../../constants/colors";

const Input = ({ name, onChange, ...props }) => (
    <span>
        <input type="text" onChange={(e) => onChange({ name: name, value: e.target.value })} {...props} />
        <style jsx>{`
            input {
                border: none;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 16px;
                color: rgba(0, 0, 0, 0.8);
            }
        `}</style>
    </span>
);

export default Input;

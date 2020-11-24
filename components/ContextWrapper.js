import HeaderContext from "contexts/HeaderContext";
import { useState } from "react";

function ContextWrapper({ children, contacts }) {
    const [visible, setVisible] = useState(false);
    return <HeaderContext.Provider value={{ visible, setVisible, contacts }}>{children}</HeaderContext.Provider>;
}

export default ContextWrapper;

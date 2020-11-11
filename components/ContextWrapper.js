import HeaderContext from "contexts/HeaderContext";
import { useState } from "react";

function ContextWrapper({ children }) {
    const [visible, setVisible] = useState(false);
    return <HeaderContext.Provider value={{ visible, setVisible }}>{children}</HeaderContext.Provider>;
}

export default ContextWrapper;

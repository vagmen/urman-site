import HeaderContext from "contexts/HeaderContext";
import { ReactNode, useState } from "react";

interface IContextWrapper {
    children: ReactNode;
    contacts?: any;
}

function ContextWrapper({ children, contacts }: IContextWrapper) {
    const [visible, setVisible] = useState(false);
    return <HeaderContext.Provider value={{ visible, setVisible, contacts }}>{children}</HeaderContext.Provider>;
}

export default ContextWrapper;

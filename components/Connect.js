import React, { Component } from "react";
import { FaVk, FaSkype, FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { grey, colorViolet } from "../constants/colors";
import ButtonViolet from "./ui/ButtonViolet";
import { sendLead } from "../utils/api";

class Connect extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        collapsed: true,
        phone: "",
    };

    connectHandler = () => {
        sendLead({ formType: "side" });
        this.setState({ phone: "" });
        localStorage.removeItem("phone");
        Chatra("show");
        this.closeConnect();
    };

    closeConnect = () => {
        localStorage.setItem("connect-collapsed", true);
        setTimeout(() => Chatra("show"), 1000);
    };

    componentDidMount() {
        this.setState({
            phone: localStorage.getItem("phone") || "",
        });
        this.connectCollapsedInterval = setInterval(() => {
            const collapsed = localStorage.getItem("connect-collapsed") === "false" ? false : true;
            this.setState({ collapsed });
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.connectCollapsedInterval);
    }

    render() {
        const { collapsed, phone } = this.state;
        return (
            <div>
                <div className={`connect-cover ${collapsed ? "collapsed" : ""}`}>
                    <MdClose
                        size={30}
                        className="close-button"
                        onClick={this.closeConnect}
                        style={{ position: "absolute", right: "16px", top: "90px", zIndex: "100000" }}
                    />
                    <h4 className="hide-in-keyboard">Получите бесплатную консультацию</h4>
                    <br />
                    <p className="hide-in-keyboard">+7 (347) 298-34-86</p>
                    <p className="hide-in-keyboard">
                        <a href="mailto:proekt@urman.su">proekt@urman.su</a>
                    </p>
                    <p className="icons hide-in-keyboard">
                        <a href="https://www.instagram.com/urman.su" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://vk.com/urman_su" target="_blank" rel="noopener noreferrer">
                            <FaVk />
                        </a>
                        <a href="skype:vagmen?chat">
                            <FaSkype />
                        </a>
                    </p>
                    <br />
                    <input
                        className="input full-width"
                        type="tel"
                        placeholder="Tелефон"
                        value={phone}
                        onChange={(e) => {
                            localStorage.setItem("phone", e.target.value);
                            this.setState({ phone: e.target.value });
                        }}
                    />
                    <br />
                    <ButtonViolet className="full-width" onClick={this.connectHandler}>
                        Получить
                    </ButtonViolet>
                </div>
                <style jsx>{`
                    .connect-cover {
                        position: fixed;
                        right: 0;
                        top: 0;
                        transition: all 0.4s;
                        background: ${grey};
                        width: 100%;
                        height: 100%;
                        padding: 90px 16px;
                        opacity: 1;
                        color: #fff;
                        box-shadow: 0px 0px 35px 4px rgba(0, 0, 0, 0.3);
                    }
                    .connect-cover.collapsed {
                        right: -100%;
                        opacity: 0;
                    }
                    .close-button {
                        z-index: 100;
                    }
                    .input {
                        border-radius: 8px;
                        border: none;
                        padding: 12px;
                        flex: 1;
                        color: ${grey};
                    }
                    .icons a {
                        font-size: 32px;
                        margin-right: 16px;
                    }
                    a:hover {
                        color: ${colorViolet};
                    }
                    @media (min-width: 960px) {
                        .connect-cover {
                            right: 0;
                            top: 0;
                            width: 400px;
                            padding: 112px 32px;
                        }
                        .connect-cover.collapsed {
                            right: -400px;
                            opacity: 0;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Connect;

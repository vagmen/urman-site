import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { FaVk, FaSkype, FaInstagram } from "react-icons/fa";
import { mainColorMid, mainColorDark, mainColorLight, grey } from "../constants/colors";
import Button from "../components/ui/Button";

class errorPage extends Component {
    state = {
        contact: ""
    };

    sendFeedbackInfo = async () => {
        const res = await fetch(
            `http://vagmen.ru/urman/send.php?phone=${this.state.contact}&pathname=${
                window.location.pathname
            }&formName='Форма со страницы 404'`,
            {
                method: "get"
            }
        );
        // notification.success({
        //     message: `Рады знакомству, ${values.name}!`,
        //     description: 'В ближайшее время свяжемся с Вами.',
        // });
    };

    testRequest = async () => {
        const data = JSON.stringify({ name: "werwerwerwerwer", a: "a" });
        const res = await fetch(`http://vagmen.ru/urman/addTender.php?`, {
            method: "POST",
            mode: "cors",
            body: data
        });
    };

    render() {
        const { contact } = this.props;
        return (
            <div className="error-page">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>URMAN - Лесные решения | Такой страницы не существует</title>
                    <meta name="robots" content="noindex" />
                    <meta name="theme-color" content={mainColorMid} />
                </Head>
                <div className="bgr" />
                <div className="inner">
                    <p className="p404">404</p>
                    <h1>Такой страницы нет</h1>
                    <Link href="/" passHref>
                        <button className="centered">На главную</button>
                    </Link>
                    <h4>Возможно, вы искали одну из этих страниц:</h4>
                    <p>
                        <Link href="/services/proekt-osvoeniya-lesov" passHref>
                            <a className="post-a" href="">
                                Проект освоения лесов
                            </a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/journal/out-of-date" passHref>
                            <a className="post-a" href="">
                                У вашего Проекта освоения лесов
                                <br />
                                вышел срок годности
                            </a>
                        </Link>
                    </p>
                </div>
                <div className="callback">
                    <div className="column text">Напишите или позвоните нам:</div>
                    <div className="column phone">
                        <p>+7 (347) 298-34-86</p>
                    </div>
                    <div className="column mail">
                        <p>
                            <a href="mailto:proekt@urman.su">proekt@urman.su</a>
                        </p>
                    </div>
                    <div className="column icons">
                        <p>
                            <a href="skype:vagmen?chat">
                                <FaSkype />
                            </a>
                            <a href="https://vk.com/urman_su" target="_blank">
                                <FaVk />
                            </a>
                            <a href="https://www.instagram.com/urman.su" target="_blank">
                                <FaInstagram />
                            </a>
                        </p>
                    </div>
                    <input
                        className="input"
                        type="text"
                        placeholder="Ваш телефон"
                        value={contact}
                        onChange={e => this.setState({ contact: e.target.value })}
                    />
                    <input className="button" type="button" value="Связаться" onClick={() => this.sendFeedbackInfo()} />
                </div>
                <style jsx global>{`
                    @import url("https://fonts.googleapis.com/css?family=Rubik:300,400");
                    body {
                        margin: 0;
                        font-family: Rubik, Helvetica, sans-serif;
                    }
                    button {
                        border: none;
                    }
                `}</style>
                <style jsx>{`
                    .error-page {
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .inner {
                        transform: translateY(-32px);
                    }
                    .bgr {
                        font-weight: 100;
                        flex: 1 1 100%;
                        text-align: center;
                        min-width: 100%;
                        min-height: 100vh;
                        background: url("/static/images/logo.png") 100% 100% no-repeat;
                        background-size: contain;
                        background-position: center center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        filter: blur(1px) opacity(15%);
                    }
                    .p404 {
                        font-size: 180px;
                        color: ${mainColorDark};
                        margin: 0;
                        line-height: 150px;
                    }
                    h1 {
                        font-size: 30px;
                        color: #333;
                        font-weight: 100;
                        flex: 1 1 100%;
                        text-align: center;
                    }
                    button {
                        padding: 12px;
                        cursor: pointer;
                        transition: all 0.8s;
                        border-radius: 8px;
                        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                            0px 3px 1px -2px;
                        text-transform: uppercase;
                        color: #fff;
                        background: ${mainColorMid};
                        margin: 16px auto;
                        width: 100%;
                        max-width: 360px;
                        font-size: 16px;
                        margin-bottom: 32px;
                    }
                    button:hover {
                        background: ${mainColorDark};
                        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                            0px 3px 14px 2px rgba(0, 0, 0, 0.12);
                        transform: translateY(-4px);
                    }
                    .post-a {
                        color: inherit;
                        text-decoration: none;
                        border-bottom: 3.5px solid ${mainColorLight};
                    }
                    .post-a:hover {
                        color: inherit;
                        background: ${mainColorLight};
                    }
                    .callback {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: calc(100% - 32px);
                        background: ${grey};
                        display: flex;
                        padding: 16px;
                        align-items: center;
                    }
                    .callback span,
                    .callback .column {
                        padding-right: 16px;
                        color: #fff;
                    }
                    .callback .text,
                    .callback .phone,
                    .callback .mail,
                    .callback .icons {
                        display: none;
                    }
                    .callback p a {
                        color: #fff;
                    }
                    .callback p a:hover {
                        color: ${mainColorLight};
                    }
                    .callback .icons p a {
                        font-size: 20px;
                        padding-right: 8px;
                    }
                    .input {
                        border-radius: 8px;
                        border: none;
                        padding: 12px;
                        flex: 1;
                    }
                    .button {
                        border: none;
                        padding: 12px;
                        cursor: pointer;
                        transition: all 0.8s;
                        border-radius: 8px;
                        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                            0px 3px 1px -2px;
                        text-transform: uppercase;
                        color: #fff;
                        background: ${mainColorMid};
                        margin: 0 auto;
                        width: 100%;
                        max-width: 360px;
                        font-size: 16px;
                        flex: 1;
                        margin-left: 16px;
                        text-align: center;
                    }
                    .button:hover {
                        background: ${mainColorDark};
                        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                            0px 3px 14px 2px rgba(0, 0, 0, 0.12);
                        transform: translateY(-4px);
                    }
                    @media (min-width: 640px) {
                        .callback .phone {
                            display: block;
                        }
                    }
                    @media (min-width: 960px) {
                        .callback .mail {
                            display: block;
                        }
                        button {
                            margin: 32px auto;
                        }
                    }
                    @media (min-width: 1200px) {
                        .callback .text,
                        .callback .icons {
                            display: block;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default errorPage;

import Link from "next/link";
import Layout from "../../components/Layout.js";
import { mainColorLight, mainColorMid, greyDark, mainColorDark, grey } from "../../constants/colors";
import { Collapse } from "antd";
const Panel = Collapse.Panel;

const postData = {
    title: "URMAN - Лесные решения",
    description:
        "Берем на себя юридические, проектные, бюрократические вопросы при оформлении и использовании лесного участка.",
};

const handlerDownload = () => {
    const tempLink = document.createElement("a");
    tempLink.href = "static/docs/Центральный ФО/Калужская область/Лесной план Калужской области на 2019-2028 годы.zip";
    tempLink.download = "Лесной план Калужской области 2019-2028";
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();
};

export default () => (
    <Layout postData={postData}>
        <div className="template-background">
            <div className="page-content">
                <h3>Документы</h3>
                <p>
                    Здесь мы собрали документы лесного и территориального планирования: лесные планы, лесохозяйственные
                    регламенты лесничеств, схемы территориального планирования, акты лесопатологических обследований.
                    Эти материалы должны размещаться на сайтах органов исполнительной власти субъектов Российской
                    Федерации, но в реальности доступны не всегда, или их сложно найти.
                </p>
                <Collapse bordered={false} accordion>
                    <Panel header="Центральный федеральный округ" key="1">
                        <Collapse bordered={false}>
                            <Panel header="Калужская область" key="1">
                                <p>Лесной план</p>
                                <p>Регламенты</p>
                            </Panel>
                            <Panel header="Республика Башкортостан" key="2">
                                <p>Лесной план</p>
                                <p>Регламенты</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="Приволжский федеральный округ" key="2">
                        <Collapse bordered={false}>
                            <Panel header="Калужская область" key="1">
                                <p>Лесной план</p>
                                <p>Регламенты</p>
                            </Panel>
                            <Panel header="Республика Башкортостан" key="2">
                                <p>Лесной план</p>
                                <p>Регламенты</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>
                <button onClick={handlerDownload}>Скачать</button>
                <a href="https://drive.google.com/open?id=1p8L_g_ta1vx1DSp95VX_jnNsSYq3IZCi">Лесной план</a>
            </div>
        </div>
        <style jsx>{`
            .main-container {
                display: grid;
                grid-auto-rows: 70px auto minmax(500px, auto) auto;
                grid-gap: 20px;
                grid-template-areas:
                    "."
                    "s"
                    "f"
                    "t";
            }
            .background-image {
                background-image: url("/images/logo.png");
                position: absolute;
                min-height: 100vh;
                top: 70px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                filter: blur(1px) opacity(15%);
                background-repeat: no-repeat;
                background-position: center top;
                background-size: contain;
                transition: 1s;
                transform: translateZ(-10px);
                z-index: -1;
            }
        `}</style>
    </Layout>
);

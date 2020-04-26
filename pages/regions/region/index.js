import { createElement } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { MdFileDownload } from "react-icons/md";
import Layout from "../../../components/Layout.js";
import { regions } from "../../../constants/regions";
import { mainColorLight, mainColor100, mainColor50 } from "../../../constants/colors.js";

const handlerDownload = (event) => {
    event.preventDefault();
    const tempLink = document.createElement("a");
    tempLink.href = "/docs/Plan_kalugi_OBL.docx";
    tempLink.download = "Лесной план Калужской области 2019-2028";
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();
};

const Index = ({ region }) => {
    const postData = { title: "sdfsdfg", description: "werwer" };
    return (
        <Layout postData={postData}>
            <br />
            <br />
            <br />
            <br />
            <div className="post">
                <h1>Документы лесного планирования {region.Name}</h1>
                <h2>Лесной план</h2>
                {/* <a className="post-a" onClick={(e) => handlerDownload(e)}>
                    Скачать лесной план
                </a> */}
                <div className="list-item" onClick={handlerDownload}>
                    <p>
                        Лecной план {region.Name}
                        <MdFileDownload
                            size={30}
                            className="close-button"
                            onClick={handlerDownload}
                            // style={{ position: "absolute", right: "16px", top: "90px", zIndex: "100000" }}
                        />
                    </p>
                </div>
                <h2>Лесохозяйственные регламенты</h2>
                <a className="post-a" href="">
                    Скачать лесохозяйственный регламент
                </a>
                <h2>Наш опыт работы в регионе</h2>
            </div>
            <style jsx>{`
                .list-item {
                    padding: 20px;
                    background: ${mainColor50};
                    border-bottom: 1px solid ${mainColorLight};
                    cursor: pointer;
                }
            `}</style>
        </Layout>
    );
};
Index.getInitialProps = async ({ query }) => {
    console.log("query", query);
    const { region } = query;

    // const region = regions.find(item => item.id === query.region);
    // console.log("region", region);

    const res = await fetch(
        `https://urmanhelpforest20190704115206.azurewebsites.net/regions/${region}?translitName=${region}`
    );
    const data = await res.json();
    // console.log("data", data);

    // const res = await fetch("https://ws3.morpher.ru/russian/declension?s=Соединенное%20королевство", {
    //     method: "get",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    //     // body: JSON.stringify({
    //     //     s: "кошка"
    //     // })
    // });
    // const data = await res.json();
    // console.log("data", data);

    return {
        region: data,
    };
};

export default Index;

import { withRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/Layout.js";
import { regions } from "../../../constants/regions";
import { createElement } from "react";

const handlerDownload = event => {
    event.preventDefault();
    const tempLink = document.createElement("a");
    tempLink.href = "/static/docs/Plan_kalugi_OBL.docx";
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
                <h1>Документы лесного планирования {region.name}</h1>
                <h2>Лесной план</h2>
                <a className="post-a" onClick={e => handlerDownload(e)}>
                    Скачать лесной план
                </a>
                <h2>Лесохозяйственные регламенты</h2>
                <a className="post-a" href="">
                    Скачать лесохозяйственный регламент
                </a>
                <h2>Наш опыт работы в регионе</h2>
            </div>
        </Layout>
    );
};
Index.getInitialProps = async ({ query }) => {
    const region = regions.find(item => item.id === query.region);
    console.log("region", region);

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
        region: region
    };
};

export default Index;

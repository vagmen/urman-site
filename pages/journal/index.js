import { Fragment } from "react";
import Link from "next/link";
import moment from "moment";
import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";
import { API_URL } from "../../constants/settings.js";
moment.locale("ru");

const Index = ({ journalItems }) => (
    <Layout menuItem="journal">
        <div className="page-background">
            <div className="page-content">
                <div className="journal">
                    <h1>Статьи – URMAN</h1>
                    <p>Про лес и не только</p>
                    <div className="grid">
                        {journalItems.map((item) => (
                            <section className="grid__item clickable-block" key={item.id}>
                                <Link as={`/journal/${item.id}`} href={`/journal/post?id=${item.id}`} passHref>
                                    <a href="">
                                        <Fragment>
                                            <div className="img-wrapper">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <article>
                                                <time>{moment(item.date).format("D MMMM YYYY")}</time>
                                                <header>
                                                    <h4>{item.title}</h4>
                                                </header>
                                                {/* <p>
                                                    Почему нужно разрабатывать ПОЛ уже сейчас и почему он у Вас не
                                                    пройдет государственную экспертизу.
                                                </p> */}
                                            </article>
                                        </Fragment>
                                    </a>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .img-wrapper {
                width: 100%;
                height: 200px;
                overflow: hidden;
                position: relative;
            }
            .journal {
                padding-bottom: 20px;
            }
            .journal img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
            article {
                padding: 10px 20px;
            }
            time {
                margin-bottom: 20px;
                font-size: 16px;
            }
            .page-background {
                background: #eee;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function () {
    const res = await fetch(API_URL + "/articles");
    const data = await res.json();
    const journalItems = data.map((item) => ({
        id: item.urlId,
        img: API_URL + item.image[0].url,
        title: item.title,
        date: item.publishedAt,
        description: item.description,
    }));

    return {
        journalItems,
    };
};

export default Index;

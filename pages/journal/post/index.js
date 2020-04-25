import fetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout.js";
import Error from "next/error";
import { API_URL } from "../../../constants/settings.js";
import ReactMarkdown from "react-markdown";

const Index = ({ postData, err }) =>
    postData ? (
        <Layout postData={postData}>
            <div className="template-background">
                <div className="page-content">
                    <div className="post">
                        <h1>{postData.title}</h1>
                        <img className="post-img" src={postData.image} alt={postData.title} />
                        <ReactMarkdown source={postData.content} />
                    </div>
                </div>
            </div>
        </Layout>
    ) : (
        <Error statusCode={err} />
    );

Index.getInitialProps = async function ({ query }) {
    const id = query.id;

    const res = await fetch(API_URL + "/articles?urlId=" + id);
    const data = await res.json();
    if (data && data[0]) {
        const currentArticle = data[0];
        const postData = {
            id: currentArticle.urlId,
            image: API_URL + currentArticle.image[0].url,
            title: currentArticle.title,
            date: currentArticle.publishedAt,
            description: currentArticle.description,
            content: currentArticle.content,
        };
        return {
            postData,
        };
    } else {
        return { err: 404 };
    }
};

export default Index;

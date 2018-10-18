import { withRouter } from "next/router";
import Layout from "../../components/Layout.js";
import fetch from "isomorphic-unfetch";

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>Текст статьи</p>
//     </div>
// ));

const Page = props => (
    <Layout>
        <div className="page-background">
            <div className="page-content">
                <h1>{props.show.name}</h1>
                <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
                <img src={props.show.image.medium} />
            </div>
        </div>
    </Layout>
);

Page.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    return { show };
};

export default Page;

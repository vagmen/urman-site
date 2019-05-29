import { Fragment } from "react";
import Link from "next/link";
import moment from "moment";
import Layout from "../../components/Layout";
import { regions } from "../../constants/regions";

const Index = ({ regions }) => {
    const postData = { title: "sdfsdfg", description: "werwer" };
    return (
        <Layout postData={postData}>
            <div className="post">
                <br />
                <br />
                <ul>
                    {regions.map((region) => (
                        <li key={region.id}>
                            <Link href={`/regions/region?region=${region.id}`} as={`/regions/${region.id}`} passHref>
                                <a href="">{region.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{``}</style>
        </Layout>
    );
};

Index.getInitialProps = async function() {
    // const res = await fetch('https://helpforest.azurewebsites.net/GetPosts');
    // const data = await res.json();
    // console.log('data', data);

    return {
        regions: regions,
    };
};

export default Index;

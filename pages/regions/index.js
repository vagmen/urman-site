import Link from "next/link";
import Layout from "../../components/Layout";
// import { regions } from "../../constants/regions";

const Index = ({ regions }) => {
    const postData = { title: "sdfsdfg", description: "werwer" };
    return (
        <Layout postData={postData}>
            <div className="post">
                <br />
                <br />
                <ul>
                    {regions.map((region) => (
                        <li key={region.TranslitName}>
                            <Link
                                href={`/regions/region?region=${region.TranslitName}`}
                                as={`/regions/${region.TranslitName}`}
                                passHref
                            >
                                <a href="">{region.Name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{``}</style>
        </Layout>
    );
};

Index.getInitialProps = async function () {
    return {
        regions: [],
    };
};

export default Index;

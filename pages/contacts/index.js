import Layout from "../../components/Layout";
import FooterWithMap from "../../components/FooterWithMap";

const Index = () => (
    <Layout menuItem="contacts">
        <div className="wrapper">
            <FooterWithMap isContacts={true} />
        </div>
        <style jsx>{`
            .wrapper {
                padding-top: 60px;
            }
            @media (min-width: 960px) {
                .wrapper {
                    padding-top: 80px;
                }
            }
        `}</style>
    </Layout>
);

export default Index;

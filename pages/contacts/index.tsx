import Layout from "components/Layout";

const Index = () => (
    <Layout menuItem="contacts" postData={{ title: "Контакты URMAN.SU", description: "Контакты URMAN.SU" }}>
        {/* <div className="wrapper"></div>
        <style jsx>{`
            .wrapper {
                padding-top: 60px;
            }
            @media (min-width: 960px) {
                .wrapper {
                    padding-top: 80px;
                }
            }
        `}</style> */}
    </Layout>
);

export default Index;

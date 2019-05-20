import Link from "next/link";
import Layout from "../../components/Layout";
import { servicesData } from "../../constants/menuData";
import { mainColorMid, mainColorDark } from "../../constants/colors";
import Services from "../../components/Services";
import FeedbackForm from "../../components/FeedbackForm";

const Index = () => (
    <Layout menuItem="services">
        <div className="page-background">
            <div className="page-content">
                <h1>Услуги</h1>
                <p>Выполним Вам за лучшую цену</p>
                <Services items={servicesData} />
            </div>
            <FeedbackForm
                title="Оставьте заявку"
                subTitle="Мы бесплатно проконсультируем Вас по любому вопросу, связанному с оформлением и использованием лесного участка"
                backgroundImage="/static/images/4.jpg"
                withComment={true}
            />
        </div>
        <style jsx>{``}</style>
    </Layout>
);

export default Index;

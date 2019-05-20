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
                <Services />
                {/* <div className="services">
                    <h1>Услуги</h1>
                    <p>Посмотрите, чем мы можем быть вам полезны</p>
                    <div className="grid">
                    {servicesData.map(item => (
                        <section className="grid__item clickable-block service" key={item.id}>
                        <Link href={`/services/${item.id}`} passHref>
                        <a>
                        <img src={item.img} alt={item.name} />
                        <article>
                        <h3>{item.name}</h3>
                        </article>
                        </a>
                        </Link>
                        </section>
                        ))}
                        </div>
                    </div> */}
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

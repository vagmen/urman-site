import Link from "next/link";
import Layout from "../../components/Layout";
import { servicesData } from "../../constants/menuData";
import { mainColorMid, mainColorDark } from "../../constants/colors";

const Index = () => (
    <Layout menuItem="uslugi">
        <div className="page-background">
            <div className="page-content">
                <div className="services">
                    <h1>Услуги</h1>
                    <p>Посмотрите, чем мы можем быть вам полезны</p>
                    <div className="grid">
                        {servicesData.map(item => (
                            <section className="grid__item clickable-block service" key={item.id}>
                                <Link href={`/uslugi/${item.id}`}>
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
                </div>
            </div>
        </div>
        <style jsx>{`
            .services img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
            article {
                padding: 20px;
            }
            h3 {
                font-weight: 300;
                margin: 0px;
                color: ${mainColorDark};
            }
            .service:hover {
                color: ${mainColorMid};
            }
        `}</style>
    </Layout>
);

export default Index;

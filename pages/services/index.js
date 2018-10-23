import { Fragment } from 'react';
import Link from 'next/link';
import moment from 'moment';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import { servicesData } from '../../constants/menuData';

const menuItem = 'services';

const Index = ({ subMenuItems }) => (
    <Layout title="Услуги" menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <div className="services">
                    <h1>Услуги</h1>
                    <h4>Посмотрите, чем мы можем быть вам полезны</h4>
                    <div className="grid">
                        {subMenuItems.map((item) => (
                            <section
                                className="grid__item clickable-block service"
                                key={item.id}
                            >
                                <Link
                                    as={`/journal/${item.id}`}
                                    href={`/journal/post?id=${item.id}`}
                                >
                                    <Fragment>
                                        <img src={item.img} />
                                        <article>
                                            <header>
                                                <h3>{item.name}</h3>
                                            </header>
                                        </article>
                                    </Fragment>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .services__wrapper {
                background: #eee;
            }
            .services {
            }
            .service {
                background: #fff;
            }
            .services img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            h1,
            h4 {
                color: #1e1435;
            }

            article {
                padding: 10px 20px;
                color: #564e67;
                font-weight: 300;
            }
            time {
                margin-bottom: 20px;
                font-size: 16px;
            }
            h3 {
                font-size: 22px;
                font-weight: 300;
                color: #564e67;
                margin: 10px 0px;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    const data = await res.json();
    return {
        subMenuItems: servicesData,
    };
};

export default Index;

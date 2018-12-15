import { Fragment } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import { journalData } from '../../constants/journalData';
import { mainColorLight } from '../../constants/colors';

const menuItem = 'journal';

const Index = ({ journalItems }) => (
    <Layout title="Журнал" menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <div className="journal">
                    <h1>Журнал – URMAN</h1>
                    <h4>Про лес и не только</h4>
                    <div className="grid">
                        {journalItems.map((item) => (
                            <section className="grid__item clickable-block" key={item.id}>
                                <Link as={`/journal/${item.id}`} href={`/journal/post?id=${item.id}`}>
                                    <a href="">
                                        <Fragment>
                                            <div className="img-wrapper">
                                                <img src={item.img} />
                                            </div>
                                            <article>
                                                <time>{moment().format('D MMMM YYYY')}</time>
                                                <header>
                                                    <h4>{item.title}</h4>
                                                </header>
                                                {/* <p>
                                                    Почему нужно разрабатывать ПОЛ уже сейчас и почему он у Вас не
                                                    пройдет государственную экспертизу.
                                                </p> */}
                                            </article>
                                        </Fragment>
                                    </a>
                                </Link>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .img-wrapper {
                width: 100%;
                height: 200px;
                overflow: hidden;
                position: relative;
            }
            .journal {
                padding-bottom: 20px;
            }
            .journal img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
            article {
                padding: 10px 20px;
            }
            time {
                margin-bottom: 20px;
                font-size: 16px;
            }
            .page-background {
                background: #eee;
            }
        `}</style>
    </Layout>
);

Index.getInitialProps = async function() {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=forest');
    // const data = await res.json();
    return {
        journalItems: journalData,
    };
};

export default Index;

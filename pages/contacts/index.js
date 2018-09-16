import Layout from '../../components/Layout';

const menuItem = 'contacts';

const Index = () => (
    <Layout title="Контакты" menuItem={menuItem}>
        <div className="contacts">
            <div className="contacts__section address">
                <h1>proekt@urman.su</h1>
                <p>+7 (347) 298-34-86</p>
                <p>450047, Уфа, ул. Ленина 63</p>
                <p>(Напротив министерства лесного хозяйства РБ)</p>
                <a>На карте</a>
            </div>
            <div className="contacts__section requisites">
                <h3>Реквизиты</h3>
                <p>ООО «Сибирикс»</p>
                <p>ОГРН 1102223010108</p>
                <p>ИНН / КПП 2222791653 / 222201001</p>
                <p>р/сч. 40702810761120002229</p>
                <p>Корр/субсчет 30101810550040000884</p>
                <p>БИК 045004884</p>
                <p>Новосибирский филиал N 2 ПАО "БИНБАНК"</p>
            </div>
        </div>
        <style jsx>{`
            h1,
            h3 {
                color: #fff;
            }
            .contacts {
                display: flex;
                flex-wrap: wrap;
            }
            .contacts__section {
                padding: 20px;
                color: #fff;
                width: 100%;
            }
            .address {
                background: #515151;
            }
            .requisites {
                background: rgba(211, 158, 99, 0.8);
            }
            @media screen and (min-width: 750px) {
                .contacts__section {
                    width: 50%;
                }
            }
        `}</style>
    </Layout>
);

export default Index;

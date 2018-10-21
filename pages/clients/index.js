import Layout from '../../components/Layout';
import WithSubMenu from '../../components/WithSubMenu';
import menuData from '../../constants/menuData';
import { Player } from 'video-react';
import { Button } from 'antd';

// import 'node_modules/video-react/dist/video-react.css';

const menuItem = 'clients';

const Index = () => (
    <Layout title="Клиенты" menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <WithSubMenu
                    subMenuItems={menuData[menuItem]}
                    menuItem={menuItem}
                >
                    <div className="">
                        <h1>Клиенты</h1>
                        <Player
                            playsInline
                            poster="http://lamcdn.net/lookatme.ru/post_image-image/zFesszST-MN14B3AAcKBBg-article.jpg"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                        <Button type="primary">Больше видео</Button>
                        <h1>Клиенты</h1>
                        <h1>Клиенты</h1>
                        <h1>Клиенты</h1>
                    </div>
                </WithSubMenu>
            </div>
        </div>
    </Layout>
);

export default Index;

import Layout from "../../../components/Layout";
import WithSubMenu from "../../../components/WithSubMenu";
import FeedbackCard from "../../../components/FeedbackCard";
import { menuData } from "../../../constants/menuData";
import { feedback } from "../../../constants/feedback";

const menuItem = "clients";
const subMenuItem = "feedback";

const Index = () => (
    <Layout subMenuItem={subMenuItem} menuItem={menuItem}>
        <div className="page-background">
            <div className="page-content">
                <div className="feedback-wraper">
                    <WithSubMenu subMenuItem={subMenuItem} menuItem={menuItem}>
                        <h1>Отзывы</h1>
                        <h4>То, что наши клиенты говорят о нас своими словами</h4>
                        <div className="grid-with-menu">
                            {feedback.map(item => (
                                <FeedbackCard feedbackData={item} key={item.id} />
                            ))}
                        </div>
                    </WithSubMenu>
                </div>
            </div>
        </div>
    </Layout>
);

export default Index;

import { Table, Button, Input } from "antd";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import AdminLayout from "../../../../components/AdminLayout";
import { createElement } from "react";
const { TextArea } = Input;

const handleClick = e => {
    const el = document.getElementById("id");
    console.log("e", el);
    const sel = window.getSelection();
    var range = document.createRange();
    // range.setStart(e.target, 3);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    console.log("e", e.target);
    console.log("sel", sel);
};

const parse = post => {
    console.log();
    return post.map((item, index) => {
        let content = item.content;
        if (Array.isArray(item.content)) {
            content = parse(item.content);
        }
        switch (item.tag) {
            // case 'string':
            //     return content;
            //     break;
            // case 'a':
            //     return (
            //         <Link key={index} href={item.props.src}>
            //             <a className="post-a" href="">
            //                 {item.content}
            //             </a>
            //         </Link>
            //     );
            //     break;
            case "h1":
                return (
                    <h1
                        className="post-input admin-post-h1"
                        placeholder="Придумайте название"
                        key={index}
                        value={item.content}
                        autosize
                        onClick={handleClick}
                        id="id"
                    >
                        {item.content}
                    </h1>
                );
            case "h3":
                return (
                    <TextArea
                        className="post-input admin-post-h3"
                        placeholder="Придумайте подзаголовок"
                        key={index}
                        value={item.content}
                        // autosize
                    />
                );
            case "p":
                return <TextArea className="post-input admin-post-p" key={index} value={item.content} autosize />;
            default:
                return createElement("p", { ...item.props, key: index }, content);
                break;
        }
    });
};

const Index = ({ postData }) => (
    <AdminLayout>
        <div className="admin-top-bar">
            <Button icon="delete" type="danger" />
            {` `}
            <Button icon="save" />
        </div>
        <div className="admin-content">
            <div className="admin-card admin-card__post">
                {parse(postData.post)}
                <input className="admin-p" placeholder="Начните прямо сейчас..." />
                <Button type="dashed" icon="plus" />
            </div>
        </div>
        <style jsx global>{`
            .admin-content {
                display: flex;
                flex-wrap: wrap;
            }
            .post-input {
                border: none;
                outline: none;
                background: none;
                flex: 1 1 100%;
            }
            .admin-post-h1 {
                font-size: 40px;
            }
            .admin-post-h3 {
                font-size: 25px;
            }
        `}</style>
    </AdminLayout>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://helpforest.azurewebsites.net/GetPost", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: "bdd5500a-7307-4a99-8601-328d47d12fdf"
        })
    });
    const data = await res.json();
    // console.log('data', JSON.parse(data.Body));
    const postData = { title: data.Header, description: data.Description, post: JSON.parse(data.Body) };

    return { postData };

    // return {
    //     postData: {
    //         title: 'У вашего Проекта освоения лесов вышел срок годности',
    //         description:
    //             'Почему нужно разрабатывать проект освоения лесов (сокращенно ПОЛ) уже сейчас и почему он у Вас не пройдет государственную экспертизу.',
    //         post: [
    //             {
    //                 tag: 'h1',
    //                 content: 'У вашего Проекта освоения лесов вышел срок годности',
    //             },
    //             {
    //                 tag: 'img',
    //                 props: {
    //                     className: 'post-img',
    //                     src: '../../../static/forest.jpg',
    //                     alt: 'У вашего Проекта освоения лесов вышел срок годности',
    //                 },
    //             },
    //             {
    //                 tag: 'h3',
    //                 content:
    //                     ' Почему нужно разрабатывать проект освоения лесов (сокращенно ПОЛ) уже сейчас и почему он у Вас не пройдет государственную экспертизу.',
    //             },
    //             {
    //                 tag: 'p',
    //                 content: 'У нас для Вас 2 новости: одна плохая, другая хорошая.',
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'Плохая в том, что срок Проекта освоения лесов на ваш лесной участок заканчивается в этом году. И с нового года Вы не имеете права вести деятельность на участке без нового лесного проекта прошедшего государственную экспертизу. Что сулит проблемы и штрафы.',
    //             },
    //             {
    //                 tag: 'p',
    //                 content: [
    //                     {
    //                         tag: 'strong',
    //                         content: 'Хорошая',
    //                     },
    //                     {
    //                         tag: 'string',
    //                         content: ' в том, что мы готовы для Вас сделать новый ',
    //                     },
    //                     {
    //                         tag: 'a',
    //                         props: {
    //                             src: '/uslugi/proekt-osvoeniya-lesov',
    //                         },
    //                         content: 'Проект освоения лесов.',
    //                     },
    //                 ],
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'В этом году обновляются многие Проекты освоения лесов. Будет завал и у разработчиков и у организаций проводящих экспертизу, которая занимает 30 дней по закону. Так же если у вас было лесоустройство и изменились номера выделов, нужно будет заключать доп. соглашение, а это трата драгоценного времени.',
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'Особенно это важно для заготовителей древесины, которые не смогут вести деятельность на своем лесном участке с 1 января 2019 года без принятой лесной декларации по новому ПОЛ. Соответственно встанет вся работа.',
    //             },
    //             {
    //                 tag: 'h3',
    //                 content: 'Почему нужно заново разрабатывать Проект освоения лесов?',
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'Согласно п.30 Приказа № 69 от 29 февраля 2012 года "Об утверждении состава проекта освоения лесов и порядка его разработки" Проекты освоения лесов составляются на срок действия договора аренды по видам пользования:',
    //             },
    //             {
    //                 tag: 'ul',
    //                 content: [
    //                     {
    //                         tag: 'li',
    //                         content: 'геологическое изучение недр, разработка месторождений полезных ископаемых;',
    //                     },
    //                     {
    //                         tag: 'li',
    //                         content:
    //                             'строительства и эксплуатации водохранилищ, иных искусственных водных объектов, а также гидротехнических сооружений, морских портов, морских терминалов, речных портов, причалов;',
    //                     },
    //                     {
    //                         tag: 'li',
    //                         content: 'строительства, реконструкции, эксплуатации линейных объектов;',
    //                     },
    //                 ],
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'По остальным видам использования лесов проект освоения лесов разрабатывается на срок не более 10 лет, но не должен превышать срок действия договора аренды и лесохозяйственного регламента лесничества (лесопарка).',
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'Так получилось, что практически все лесничества по всей стране в этом году обновляют лесохозяйственные регламенты и лесные планы.',
    //             },
    //             {
    //                 tag: 'p',
    //                 content: [
    //                     {
    //                         tag: 'string',
    //                         content:
    //                             'Но есть в этом положительный момент. Напомним, что вносить изменения в Проект освоения лесов можно только в ',
    //                     },
    //                     {
    //                         tag: 'strong',
    //                         content: '3 случаях:',
    //                     },
    //                 ],
    //             },
    //             {
    //                 tag: 'ul',
    //                 content: [
    //                     {
    //                         tag: 'li',
    //                         content: 'при изменении Лесохозяйственного регламента;',
    //                     },
    //                     {
    //                         tag: 'li',
    //                         content: 'изменении условий договора аренды;',
    //                     },
    //                     {
    //                         tag: 'li',
    //                         content: 'при проведении лесопатологического обследования;',
    //                     },
    //                 ],
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'Если Вы делали Проект освоения лесов 10 лет назад, многое в Ваших планах могло поменяться. Это отличная возможность откорректировать Проект с Вашим новым видением. Но если Вы делали Проект пару лет назад, то в любом случае придется переделывать ПОЛ. В этом случае стоит попросить скидку у разработчика.',
    //             },
    //             {
    //                 tag: 'p',
    //                 content:
    //                     'Наша компания успешно разрабатывает проекты освоения лесов любой сложности на все разрешенные Лесным кодексом виды деятельности. Работаем по всей России. Собрали опыт с разных уголков страны, что позволяет нам с каждым прошедшим экспертизу ПОЛ, улучшать качество наших Проектов, увереннее давать гарантии результата и предлагать наиболее интересные цены на рынке.',
    //             },
    //         ],
    //     },
    // };
};

export default Index;

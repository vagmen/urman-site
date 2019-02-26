import Link from 'next/link';
import { Button, Table, message } from 'antd';
import AdminLayout from '../../../components/AdminLayout';
// import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const Index = () => (
//     // <Layout menuItem="about">
//     //     <div className="template-background">
//     //         <div className="page-content">
//     //             <div className="post about">

//     //             </div>
//     //         </div>
//     //     </div>
//     // </Layout>
//     <AdminLayout>laborCosts</AdminLayout>
// );

import React from 'react';
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";

const columns = [
    {
        title: 'Объект',
        dataIndex: 'cardName',
        key: 'cardName',
    },
    {
        title: 'Статус',
        dataIndex: 'listName',
        key: 'listName',
    },
    {
        title: 'Вид работы',
        dataIndex: 'workType',
        key: 'workType',
    },
    {
        title: 'Сумма',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Исполнитель',
        dataIndex: 'member',
        key: 'member',
    },
];

class Index extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // editorState: EditorState.createEmpty()
    //         json: null,
    //         dataSource: [
    //             // {
    //             //     key: "1",
    //             //     cardName: "Mike",
    //             //     status: 32,
    //             //     member: "10 Downing Street"
    //             // },
    //             // {
    //             //     key: "2",
    //             //     cardName: "John",
    //             //     status: 42,
    //             //     member: "10 Downing Street"
    //             // }
    //         ]
    //     };
    // }

    state = {
        json: null,
        dataSource: [
            // {
            //     key: "1",
            //     cardName: "Mike",
            //     status: 32,
            //     member: "10 Downing Street"
            // },
            // {
            //     key: "2",
            //     cardName: "John",
            //     status: 42,
            //     member: "10 Downing Street"
            // }
        ],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const { files } = document.getElementById('selectFiles');
        const fr = new FileReader();

        fr.onload = (event) => {
            const result = JSON.parse(event.target.result);
            console.log('cards', result.cards);
            const { lists } = result;
            const dataSource = result.cards.map((card) => {
                const listName = lists.filter((list) => list.id === card.idList)[0].name;
                const parsedDesc = this.parseDesc(card.desc);

                const children =
                    parsedDesc &&
                    parsedDesc.length !== 0 &&
                    parsedDesc.map((child, index) => ({
                        key: card.id + index,
                        workType: child,
                    }));
                console.log('children', children);

                return { cardName: card.name, key: card.id, listName, workType: this.parseDesc(card.desc), children };
            });

            this.setState({ dataSource, lists });
        };

        if (files.item(0)) {
            fr.readAsText(files.item(0));
        } else {
            message.info('Выберите JSON файл');
        }
    };

    parseDesc = (desc) => {
        const costs = desc.toLowerCase().split('стоимость')[1] || '';
        const costsArray = costs.split('\n');
        const filteredCostsArray = costsArray.filter((item) => item !== '');
        return filteredCostsArray;
    };

    // onEditorStateChange = editorState => {
    //     this.setState({
    //         editorState
    //     });
    // };

    render() {
        const { dataSource } = this.state;
        console.log('this.state', this.state);
        console.log('dataSource', dataSource);
        return (
            <AdminLayout>
                <div className="admin-top-bar">
                    <input type="file" name="selectFiles" id="selectFiles" multiple />
                    <Button type="primary" onClick={this.handleSubmit}>
                        Сгенерить таблицу
                    </Button>
                </div>
                <div className="admin-card">
                    {dataSource.length !== 0 && <Table dataSource={dataSource} columns={columns} />}
                </div>
                <div className="admin-card">
                    {dataSource.length !== 0 && <Table dataSource={dataSource} columns={columns} />}
                </div>
                {/* <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                /> */}
                <style jsx>{`
                    .admin-top-bar {
                        padding: 8px;
                        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                    }
                    .admin-card {
                        margin: 8px;
                        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                        border-radius: 4px;
                    }
                `}</style>
            </AdminLayout>
        );
    }
}

export default Index;

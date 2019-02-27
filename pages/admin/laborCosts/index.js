import React, { Fragment } from "react";
import { Button, Table, message, DatePicker } from "antd";
import moment from "moment";
import AdminLayout from "../../../components/AdminLayout";

const RangePicker = DatePicker.RangePicker;

const LIST_ID = "5c74cbe191775b7977a88c28";

const columns = [
    {
        title: "Объект",
        dataIndex: "cardName",
        key: "cardName"
    },
    {
        title: "Статус",
        dataIndex: "listName",
        key: "listName"
    },
    {
        title: "Вид работы",
        dataIndex: "workType",
        key: "workType"
    },
    {
        title: "Сумма",
        dataIndex: "total",
        key: "total"
    },
    {
        title: "Исполнитель",
        dataIndex: "member",
        key: "member"
    }
];

const memberColumns = [
    {
        title: "Сотрудник",
        dataIndex: "member",
        key: "member"
    },
    {
        title: "Объект",
        dataIndex: "cardName",
        key: "cardName"
    },
    {
        title: "Вид работы",
        dataIndex: "workType",
        key: "workType"
    },
    {
        title: "Сумма",
        dataIndex: "total",
        key: "total"
    }
];

class Index extends React.Component {
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
        memberData: [],
        dates: [moment().startOf("month"), moment().endOf("month")],
        boardName: ""
    };
    handleSubmit = e => {
        e.preventDefault();
        const { files } = document.getElementById("selectFiles");
        const fr = new FileReader();

        fr.onload = event => {
            const result = JSON.parse(event.target.result);
            const { lists } = result;
            const dataSource = result.cards.map(card => {
                const listName = lists.filter(list => list.id === card.idList)[0].name;
                const parsedDesc = this.parseDesc(card.desc);

                const children =
                    parsedDesc &&
                    parsedDesc.length !== 0 &&
                    parsedDesc.map((child, index) => ({
                        key: card.id + index,
                        workType: child
                    }));
                return { cardName: card.name, key: card.id, listName, workType: this.parseDesc(card.desc), children };
            });

            this.setState({ dataSource, lists, boardName: result.name });
            this.memberTableBuilder(result);
        };

        if (files.item(0)) {
            fr.readAsText(files.item(0));
        } else {
            message.info("Выберите JSON файл");
        }
    };

    parseDesc = desc => {
        const costs = desc.toLowerCase().split("стоимость")[1] || "";
        const costsArray = costs.split("\n");
        const filteredCostsArray = costsArray.filter(item => item !== "");
        return filteredCostsArray;
    };

    memberTableBuilder = result => {
        const { dates } = this.state;
        let membersTemp = result.members.map(member => {
            let names = member.fullName.split(" ");
            let name = names[0];
            if (names[1] === "Г.") {
                name = `${names[0]} ${names[1]}`;
            }
            return { key: member.id, member: name, total: 0 };
        });
        const readyCards = result.cards
            .filter(card => card.idList === LIST_ID)
            .filter(card => {
                const action = result.actions.find(
                    act =>
                        act.data &&
                        act.data.card &&
                        card.id === act.data.card.id &&
                        act.type === "updateCard" &&
                        act.data.listAfter &&
                        act.data.listBefore &&
                        act.data.listAfter.id === LIST_ID &&
                        act.data.listBefore.id !== LIST_ID
                );
                return moment(action.date) > dates[0] && moment(action.date) < dates[1];
            });

        readyCards.forEach((readyCard, index) => {
            const desc = this.parseDesc(readyCard.desc);
            desc.forEach(descItem => {
                const descItemWords = descItem.split(" ");
                let number = null;
                let workType = "";
                descItemWords.forEach((descItemWord, wordIndex) => {
                    if (!isNaN(Number(descItemWord))) {
                        number = descItemWord;
                        workType = descItemWords[wordIndex - 1];
                    }
                });

                let tempMember = "";
                if (descItemWords[0] === "марат") {
                    tempMember = membersTemp.find(m => m.member === "Marat");
                } else if (descItemWords[0] === "юля") {
                    tempMember = membersTemp.find(m => m.member === "Юлия");
                } else {
                    tempMember = membersTemp.find(
                        m => `${descItemWords[0]} ${descItemWords[1]}` === m.member.toLowerCase()
                    );
                    if (!tempMember) {
                        tempMember = membersTemp.find(m => descItemWords[0] === m.member.toLowerCase());
                    }
                }
                if (tempMember && number) {
                    const temp = membersTemp.find(m => m.member === tempMember.member);
                    temp.total = temp.total + Number(number);
                    const children = {
                        key: temp.key + temp.total + temp.member,
                        total: number,
                        cardName: readyCard.name,
                        workType: workType
                    };
                    if (temp.children) {
                        temp.children.push(children);
                    } else {
                        temp.children = [children];
                    }
                }
            });
        });

        // const memberData = result.members.map(member => ({ key: member.id, member: member.fullName, total: 0 }));
        this.setState({ memberData: membersTemp });
    };

    onChange = (dates, dateStrings) => {
        this.setState({
            dates: dates
        });
    };

    render() {
        const { dataSource, memberData, dates, boardName } = this.state;
        return (
            <AdminLayout>
                <div className="admin-top-bar">
                    <RangePicker
                        ranges={{
                            Сегодня: [moment(), moment()],
                            Месяц: [moment().startOf("month"), moment().endOf("month")]
                        }}
                        showTime={{ format: "H:mm" }}
                        format="DD.MM.YYYY H:mm"
                        onChange={this.onChange}
                        value={dates}
                    />
                    <input type="file" name="selectFiles" id="selectFiles" multiple />
                    <Button type="primary" onClick={this.handleSubmit}>
                        Сгенерить таблицу
                    </Button>
                </div>
                {/* <div className="admin-card">
                    {dataSource.length !== 0 && <Table dataSource={dataSource} columns={columns} />}
                </div> */}
                <div className="admin-content">
                    {memberData.length !== 0 && (
                        <div className="admin-card">
                            <div className="admin-card-header">
                                <h2>{boardName}</h2>
                            </div>
                            <Table pagination={{ pageSize: 20 }} dataSource={memberData} columns={memberColumns} />
                        </div>
                    )}
                </div>
                <style jsx>{`
                     {
                        /* .ant-calendar-picker { */
                    }
                    .admin-top-bar > * {
                        margin-left: 8px;
                    }
                `}</style>
            </AdminLayout>
        );
    }
}

export default Index;

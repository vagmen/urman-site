import React, { Fragment } from "react";
import { Button, Table, message, notification, DatePicker } from "antd";
import moment from "moment";
import AdminLayout from "../../../components/AdminLayout";

const RangePicker = DatePicker.RangePicker;

// const LIST_ID = "5c74cbe191775b7977a88c28";
const LIST_NAMES = ["На оплату"];

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
        dates: [moment().subtract(1, "months"), moment()],
        boardName: ""
    };
    handleSubmit = e => {
        e.preventDefault();
        const { files } = document.getElementById("selectFiles");
        const fr = new FileReader();

        fr.onload = event => {
            const result = JSON.parse(event.target.result);
            const { lists } = result;
            // const dataSource = result.cards.map(card => {
            //     const listName = lists.filter(list => list.id === card.idList)[0].name;
            //     const parsedDesc = this.parseDesc(card.desc);

            //     const children =
            //         parsedDesc &&
            //         parsedDesc.length !== 0 &&
            //         parsedDesc.map((child, index) => ({
            //             key: card.id + index,
            //             workType: child
            //         }));
            //     return { cardName: card.name, key: card.id, listName, workType: this.parseDesc(card.desc), children };
            // });

            const currentList = lists.find(list => LIST_NAMES.includes(list.name));

            this.setState({ lists, boardName: result.name, listId: currentList.id });
            this.memberTableBuilder(result);
        };

        if (files.item(0)) {
            fr.readAsText(files.item(0));
        } else {
            message.info("Выберите JSON файл");
        }
    };

    parseDesc = desc => {
        // учитываем начало слова с англ буквы
        const keyWord = desc.toLowerCase().indexOf("cтоимость") + 1 ? "cтоимость" : "стоимость";
        const costs = desc.toLowerCase().split(keyWord)[1] || "";
        const costsArray = costs.split("\n");
        const filteredCostsArray = costsArray.filter(item => item !== "");
        return filteredCostsArray;
    };

    memberTableBuilder = result => {
        // формируем список сотрудников
        let membersTemp = result.members.map(member => {
            let names = member.fullName.split(" ");
            let name = names[0];
            if (names[1] === "Г.") {
                name = `${names[0]} ${names[1]}`;
            }
            return { key: member.id, member: name, total: 0 };
        });
        // отбираем карточки, которые находятся в статусе "К оплате" и попали туда в определенный период
        const readyCards = this.getReadyCards({ cards: result.cards, actions: result.actions });

        readyCards.forEach((readyCard, index) => {
            const desc = this.parseDesc(readyCard.desc);
            if (desc.length === 0) {
                notification.warning({
                    message: "Раздел не найден",
                    description: `В карточке ${readyCard.name} на найден раздел "СТОИМОСТЬ"`
                });
            }
            desc.forEach(descItem => {
                // убираем лишние пробелы, делим на слова
                const descItemWords = descItem
                    .replace(/\s+/g, " ")
                    .trim()
                    .split(" ");
                // находим в строке сумму и тип работы
                const { number, workType } = this.findNumberAndWorkType(descItemWords, readyCard);

                let tempMember = "";
                if (descItemWords[0] === "юля") {
                    tempMember = membersTemp.find(m => m.member === "Юлия");
                } else if (descItemWords[0] === "ильдар") {
                    tempMember = membersTemp.find(m => m.member === "Ильдар Г.");
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

    findNumberAndWorkType = (descItemWords, readyCard) => {
        let type = "main";
        const numberIndex = descItemWords.findIndex((descItemWord, wordIndex) => {
            let result = false;
            if (!isNaN(Number(descItemWord)) && descItemWord.length !== 0) {
                result = true;
            } else if (
                descItemWord.slice(-1) === "р" &&
                !isNaN(Number(descItemWord.slice(0, -1)) && descItemWord.slice(0, -1).length !== 0)
            ) {
                type = "р";
                result = true;
            } else if (
                descItemWord.slice(-2) === "р." &&
                !isNaN(Number(descItemWord.slice(0, -2)) && descItemWord.slice(0, -2).length !== 0)
            ) {
                type = "р.";
                result = true;
            }
            return result;
        });
        let number = null;
        let workType = "";
        if (numberIndex !== -1) {
            // если вид работы начинается со скобки, берем предыдущее слово
            workType =
                descItemWords[numberIndex - 1][0] === "("
                    ? descItemWords[numberIndex - 2]
                    : descItemWords[numberIndex - 1];
            switch (type) {
                case "main":
                    number = Number(descItemWords[numberIndex]);
                    break;
                case "p":
                    number = Number(descItemWords[numberIndex].slice(0, -1));
                    break;
                case "p.":
                    number = Number(descItemWords[numberIndex].slice(0, -2));
                    break;

                default:
                    break;
            }
            if (number == 0) {
                notification.warning({
                    message: "Сумма равна 0!",
                    description: `В карточке ${readyCard.name} сумма равна 0!`
                });
            } else if (workType == "") {
                notification.warning({
                    message: "Тип работы не определен",
                    description: `В карточке ${readyCard.name} тип работы не определен!`
                });
            }
        } else {
            notification.warning({
                message: "Не найдена сумма!",
                description: `В карточке ${readyCard.name} не найдена сумма!`
            });
        }

        return { number, workType };
    };

    getReadyCards = ({ cards, actions }) => {
        const { dates, listId } = this.state;
        return cards
            .filter(card => card.idList === listId)
            .filter(card => {
                const action = actions.find(
                    act =>
                        act.data &&
                        act.data.card &&
                        card.id === act.data.card.id &&
                        act.type === "updateCard" &&
                        act.data.listAfter &&
                        act.data.listBefore &&
                        act.data.listAfter.id === listId &&
                        act.data.listBefore.id !== listId
                );
                return moment(action.date) > dates[0] && moment(action.date) < dates[1];
            });
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
                            // Месяц: [moment().subtract(1, "months"), moment()]
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

notification.config({
    placement: "bottomRight",
    bottom: 50,
    duration: 8
});

export default Index;

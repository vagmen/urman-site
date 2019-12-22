import React, { Fragment } from "react";
import { Button, Table, message, notification, DatePicker, Spin } from "antd";
import moment from "moment";
import AdminLayout from "../../../components/AdminLayout";

const RangePicker = DatePicker.RangePicker;

// const STEPS = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96];

const columns = [
    {
        title: "Ступень толщины",
        dataIndex: "step",
        key: "step",
    },
    {
        title: "Деловые",
        dataIndex: "business",
        key: "business",
    },
    {
        title: "Полуделовые",
        dataIndex: "halfbusiness",
        key: "halfbusiness",
    },
    {
        title: "Дровяные",
        dataIndex: "firewood",
        key: "firewood",
    },
];

class Index extends React.Component {
    state = {
        fileList: [],
        total: {
            areacutting: 0,
            breeds: [],
        },
        spinning: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { files } = document.getElementById("selectFiles");
        if (files.length === 0) {
            notification.warning({
                message: "Выберите JSON файл",
            });
            return;
        }
        this.setState({
            fileList: [],
            spinning: true,
            filesCount: files.length,
            total: { areacutting: 0, breeds: [] },
        });
        const fr = new FileReader();

        fr.onload = (event) => {
            const result = JSON.parse(event.target.result);
            this.parseFile(result);
        };

        for (let index = 0; index < files.length; index++) {
            if (files.item(index)) {
                setTimeout(() => fr.readAsText(files.item(index)), 1000 * index);
            } else {
                notification.warning({
                    message: "Выберите JSON файл",
                });
            }
        }
        setTimeout(this.resetLoading, 2000 * files.length);
    };

    resetLoading = () => {
        if (this.state.spinning) {
            this.setState({ spinning: false });
            notification.warning({ message: "Не получилось распарсить файлы(" });
        }
    };

    parseFile = (data) => {
        const { areacutting, arrayBreedTaxation } = data.arrayObjectsTaxation[0];
        const breeds = arrayBreedTaxation.map((breed) => ({
            name: breed.name,
            steps: breed.arrayStep,
        }));

        const preparedData = { name: data.filename, areacutting, breeds };

        this.setState({ fileList: [...this.state.fileList, preparedData] });

        if (this.state.filesCount === this.state.fileList.length) {
            this.calcTotal();
            this.setState({ spinning: false });
            notification.success({
                message: `Обработано ${this.state.fileList.length} файла(ов)`,
            });
        }
    };

    calcTotal = () => {
        this.state.fileList.forEach((file) => {
            const { areacutting, breeds } = this.state.total;
            const totalBreeds = [...breeds];
            file.breeds.forEach((newBreed) => {
                let currentBreed = totalBreeds.find((totalBreed) => totalBreed.name === newBreed.name);
                if (currentBreed) {
                    newBreed.steps.forEach((step) => {
                        let currentStep = currentBreed.steps.find((currentStep) => currentStep.step === step.step);
                        if (currentStep) {
                            currentStep.business = Number(currentStep.business) + Number(step.business);
                            currentStep.halfbusiness = Number(currentStep.halfbusiness) + Number(step.halfbusiness);
                            currentStep.firewood = Number(currentStep.firewood) + Number(step.firewood);
                        } else {
                            currentStep = [step];
                        }
                    });
                } else {
                    totalBreeds.push(newBreed);
                }
            });

            this.setState({ total: { areacutting: areacutting + file.areacutting, breeds: totalBreeds } });
        });
    };

    render() {
        const { spinning, total } = this.state;
        const { areacutting, breeds } = total;

        const filteredData = breeds.map((breed) => {
            const filteredSteps = breed.steps.filter((step) => step.business + step.halfbusiness + step.firewood !== 0);
            return { ...breed, steps: filteredSteps };
        });

        return (
            <AdminLayout>
                <div className="admin-top-bar">
                    <input type="file" name="selectFiles" id="selectFiles" multiple />
                    <Button type="primary" onClick={this.handleSubmit} loading={spinning}>
                        Сгенерить таблицу
                    </Button>
                </div>
                <div className="admin-content">
                    {breeds.length !== 0 && <h4>Площадь лесосеки: {areacutting}</h4>}
                    {filteredData &&
                        filteredData.map((breed, index) => (
                            <div className="admin-card" key={breed.name + index}>
                                <div className="admin-card-header">
                                    <h2>{breed.name}</h2>
                                </div>
                                <Table pagination={{ pageSize: 20 }} dataSource={breed.steps} columns={columns} />
                            </div>
                        ))}
                </div>
                <style jsx>{`
                    .admin-top-bar > * {
                        margin-left: 8px;
                    }
                    h4 {
                        align-text: left;
                    }
                `}</style>
            </AdminLayout>
        );
    }
}

notification.config({
    placement: "bottomRight",
    bottom: 50,
    duration: 8,
});

export default Index;

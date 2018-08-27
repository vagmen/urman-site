const Recall = () => (
    <div className="recall">
        <div className="recall-img" />
        <div className="recall-container">
            <div className="recall-header">
                <div className="recall-header-text">
                    <h4>Lee Rubin & Keri Robinson</h4>
                    <h5>
                        Senior Manager of Global Reference Programs and Customer
                        Reference Marketing Manager, Citrix
                    </h5>
                </div>
                <img
                    className="recall-logo"
                    src="https://www.techvalidate.com/assets/corp/customers/logos/citrix-bd945466b8c623e5fab67c2855f0a8a7.png"
                />
            </div>
            <p>
                Citrix uses TechValidate to magnify the output of their
                marketing team.
            </p>
            <a>Смотрите интервью</a>
        </div>
        <style jsx>{`
            .recall {
                width: 100%;
                margin-top: 30px;
            }
            .recall-img {
                z-index: 0;
                height: 300px;
                width: 300px;
                background: url(https://www.techvalidate.com/assets/corp/index/citrix/citrix-a0402b4ba6c0a0b9bcbd8a4c2fb1a09f.png)
                    100% 100% no-repeat;
                background-size: contain;
                background-position: center center;
                margin: 0 auto;
            }
            .recall-container {
                width: 80%;
                margin: 0 auto;
                margin-top: 20px;
                border: 1px solid #d5d5d5;
                padding: 20px;
                background: rgba(255, 255, 255, 0.95);
            }
            .recall-header {
                display: flex;
            }
            .recall-header-text {
                flex: 1 1 0;
            }
            .recall-logo {
                flex: 0 0 100px;
                height: 40px;
            }
        `}</style>
    </div>
);

export default Recall;

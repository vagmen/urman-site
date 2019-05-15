import { servicesData } from "./../constants/menuData";
const Services = () => (
    <div className="services">
        <h2>У нас заказывают</h2>
        {servicesData &&
            servicesData.map((item) => (
                <div className="service">
                    {item.name}
                    <img src={item.img} alt="" />
                </div>
            ))}
        <style jsx>{`
            .services {
                background: #eee;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }
        `}</style>
    </div>
);

export default Services;

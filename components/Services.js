import { servicesData } from "./../constants/menuData";
import Card from "./../components/Card";
import {
    pageWidthTablets,
    pageWidthDesktopsSmall,
    pageWidthDesktopsMedium,
    pageWidthDesktopsLarge,
    pageWidthDesktopsExtraLarge,
} from "../constants/settings";
const Services = () => (
    <div className="services">
        {servicesData &&
            servicesData.map((item) => (
                <Card key={item.name} title={item.name} img={item.img} />
                // <div className="service" key={item.name}>
                //     {item.name}
                //     <img src={item.img} alt="" />
                // </div>
            ))}
        <style jsx>{`
            .services {
                background: #eee;
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 8px;
            }
            @media (min-width: ${pageWidthTablets}) {
                .services {
                    grid-template-columns: 1fr 1fr;
                }
            }
            @media (min-width: ${pageWidthDesktopsSmall}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
            @media (min-width: ${pageWidthDesktopsMedium}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                }
            }
            @media (min-width: ${pageWidthDesktopsLarge}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                }
            }
            @media (min-width: ${pageWidthDesktopsExtraLarge}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                }
            }
        `}</style>
    </div>
);

export default Services;

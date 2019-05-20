import { servicesData } from "./../constants/menuData";
import Card from "./../components/Card";
import {
    pageWidthTablets,
    pageWidthDesktopsSmall,
    pageWidthDesktopsMedium,
    pageWidthDesktopsLarge,
    pageWidthDesktopsExtraLarge
} from "../constants/settings";
const Services = () => (
    <div className="services">
        {servicesData &&
            servicesData.map(item => (
                <Card key={item.id} title={item.name} img={item.img} href={`/services/${item.id}`} />
            ))}
        <style jsx>{`
            .services {
                background: rgb(250, 250, 250);
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 16px;
                padding: 32px 0;
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

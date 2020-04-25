import Card from "./../components/Card";
import {
    pageWidthTablets,
    pageWidthDesktopsSmall,
    pageWidthDesktopsMedium,
    pageWidthDesktopsLarge,
    pageWidthDesktopsExtraLarge,
} from "../constants/settings";
const Services = ({ items, withPagePadding, bg }) => (
    <div className={`services ${withPagePadding ? "page-padding" : ""} ${bg ? "bg" : ""}`}>
        {items &&
            items.map((item) => <Card key={item.id} title={item.name} img={item.img} href={`/services/${item.id}`} />)}
        <style jsx>{`
            .services {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 4px;
                padding-top: 32px;
                padding-bottom: 32px;
            }
            .bg {
                background: linear-gradient(to top, rgb(220, 230, 220), rgb(250, 250, 250));
            }
            @media (min-width: ${pageWidthTablets}) {
                .services {
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 8px;
                }
            }
            @media (min-width: ${pageWidthDesktopsSmall}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 12px;
                }
            }
            @media (min-width: ${pageWidthDesktopsMedium}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-gap: 16px;
                }
            }
            @media (min-width: ${pageWidthDesktopsLarge}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    grid-gap: 20px;
                }
            }
            @media (min-width: ${pageWidthDesktopsExtraLarge}) {
                .services {
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                    grid-gap: 24px;
                }
            }
        `}</style>
    </div>
);

export default Services;

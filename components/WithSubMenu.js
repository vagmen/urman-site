import Head from 'next/head';
import Link from 'next/link';

const WithSubMenu = ({ subMenuItems, subMenuItem, menuItem, withAs, children }) => (
    <div className="with-sub-menu">
        <ul className="sub-menu">
            {Object.keys(subMenuItems).map((item, index) =>
                withAs ? (
                    <Link as={`/${menuItem}/${item}`} href={`/${menuItem}/page?id=${subMenuItem}`} key={index}>
                        <a className={subMenuItem == item ? 'active' : ''}>{subMenuItems[item]}</a>
                    </Link>
                ) : (
                    <Link href={`/${menuItem}/${item}`} key={index}>
                        <a className={subMenuItem == item ? 'active' : ''}>{subMenuItems[item]}</a>
                    </Link>
                )
            )}
        </ul>
        <div className="content">{children}</div>
        <style jsx>{`
            .with-sub-menu {
                display: flex;
                flex-wrap: wrap;
                position: static;
                overflow-y: auto;
            }
            .sub-menu {
                flex: 1 1 100%;
                background: #f06060;
                color: #fff;
                padding: 20px 0;
                text-align: center;
                display: flex;
                flex-wrap: wrap;
            }
            .sub-menu a {
                color: #fff;
                padding: 10px 20px;
                margin: 0px;
                flex: 1 1 100%;
                cursor: pointer;
                font-size: 18px;
                text-decoration: none;
                transition: all 0.4s;
            }
            .sub-menu a:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            .sub-menu .active {
                background: rgba(255, 255, 255, 0.4);
            }
            .content {
                flex: 1 1 100%;
                padding: 20px;
                overflow: hidden;
                 {
                    /* display: flex;
                flex-wrap: wrap; */
                }
            }
            @media (min-width: 960px) {
                .with-sub-menu {
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: flex-start;
                    position: static;
                }
                .sub-menu {
                    flex: 0 0 250px;
                    margin-right: 20px;
                    position: sticky;
                    top: 0px;
                }
                .sub-menu a {
                    text-align: left;
                }
                .content {
                    padding: 0;
                }
            }
        `}</style>
    </div>
);

export default WithSubMenu;

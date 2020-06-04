import { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useWindowSize } from "utils/hooks.js";
import CircleButton from "components/CircleButton/CircleButton.js";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Carousel = ({ list = [], link, title, className, renderItem, grid = {} }) => {
    const scrollableContainer = useRef(null);
    const cardWrapper = useRef(null);

    const [offset, setOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [firstCard, setFirstCard] = useState(1);
    const [lastCard, setLastCard] = useState(1);
    const [countOfVisible, setCountOfVisible] = useState(1);
    const [leftButtonHidden, setLeftButtonHidden] = useState(false);
    const [rightButtonHidden, setRightButtonHidden] = useState(false);

    const { width } = useWindowSize();
    useEffect(() => {
        const { s = 1, m = 2, l = 3, xl = 4 } = grid;
        if (width < 900) {
            setCountOfVisible(s);
        } else if (width < 1400) {
            setCountOfVisible(m);
        } else if (width < 1900) {
            setCountOfVisible(l);
        } else if (width > 1899) {
            setCountOfVisible(xl);
        }

        setLastCard(firstCard + countOfVisible - 1);
        setLeftButtonHidden(offset === 0);
        setRightButtonHidden(list.length === lastCard);
        setIsMobile(width < 900);
    });

    const handleScrollPrev = () => {
        const diff = firstCard - 1;
        let pers = 100;
        if (diff < countOfVisible) {
            setFirstCard(firstCard - diff);
            setLastCard(lastCard - diff);
            pers = (diff * 100) / countOfVisible;
        } else {
            setFirstCard(firstCard - countOfVisible);
            setLastCard(lastCard - countOfVisible);
        }
        const current = scrollableContainer.current;
        let newOffset = offset + pers;

        setOffset(newOffset);
        current.style.transform = `translate3d(${newOffset}%, 0px, 0px)`;
    };

    const handleScrollNext = () => {
        const length = list.length;
        const diff = length - lastCard;
        let pers = 100;

        if (diff < countOfVisible) {
            setFirstCard(firstCard + diff);
            setLastCard(lastCard + diff);
            pers = (diff * 100) / countOfVisible;
            setRightButtonHidden(true);
        } else {
            setFirstCard(firstCard + countOfVisible);
            setLastCard(lastCard + countOfVisible);
            setRightButtonHidden(false);
        }
        const current = scrollableContainer.current;
        let newOffset = offset - pers;
        setOffset(newOffset);
        current.style.transform = `translate3d(${newOffset}%, 0px, 0px)`;
    };

    const renderItemWithLink = () => {
        const width =
            typeof countOfVisible === "number" ? `calc((100% + var(--gap)) / ${countOfVisible})` : countOfVisible;
        return list?.map((item) => (
            <div className={styles.cardWrapper} key={item.id} ref={cardWrapper} style={{ minWidth: width, width }}>
                {item.as && item.href ? (
                    <Link as={item.as} href={item.href} passHref>
                        <a href="">{renderItem(item)}</a>
                    </Link>
                ) : (
                    renderItem(item)
                )}
            </div>
        ));
    };

    return (
        <div className={classNames(styles.container, className)}>
            <SectionHeader
                title={title}
                link={link}
                linkTitle={list.length > countOfVisible ? "Все " + list.length : ""}
                className={styles.header}
            />
            <div className={styles.scrollable}>
                {isMobile ? (
                    renderItemWithLink()
                ) : (
                    <div className={styles.desktop} ref={scrollableContainer}>
                        {renderItemWithLink()}
                    </div>
                )}
            </div>
            {list.length > countOfVisible && (
                <>
                    <div
                        className={classNames(styles.leftButtonContainer, {
                            [styles.buttonHidden]: leftButtonHidden,
                        })}
                    >
                        <CircleButton onClick={handleScrollPrev}>
                            <MdNavigateBefore size="30" />
                        </CircleButton>
                    </div>
                    <div
                        className={classNames(styles.rightButtonContainer, {
                            [styles.buttonHidden]: rightButtonHidden,
                        })}
                    >
                        <CircleButton onClick={handleScrollNext}>
                            <MdNavigateNext size="30" />
                        </CircleButton>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;

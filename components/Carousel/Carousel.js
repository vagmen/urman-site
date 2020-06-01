import { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useWindowSize } from "utils/hooks.js";
import CircleButton from "components/CircleButton/CircleButton.js";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Carousel = ({ list = [], link, title, className }) => {
    const scrollableContainer = useRef(null);

    const [offset, setOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [firstCard, setFirstCard] = useState(1);
    const [lastCard, setLastCard] = useState(1);
    const [countOfVisible, setCountOfVisible] = useState(1);
    const [leftButtonHidden, setLeftButtonHidden] = useState(false);
    const [rightButtonHidden, setRightButtonHidden] = useState(false);

    const { width } = useWindowSize();
    useEffect(() => {
        if (width > 899 && width < 1400) {
            setCountOfVisible(3);
        } else if (width > 1399) {
            setCountOfVisible(4);
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

    const build = () =>
        list?.map((item) => (
            <div className={styles.cardWrapper} key={item.id}>
                <Link as={item.as} href={item.href} passHref>
                    <a href="">
                        <div className={styles.card}>
                            <img src={item.img} alt={item.title} className={styles.img} />
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <extra className={styles.extra}>{item.extra}</extra>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        ));

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
                    build()
                ) : (
                    <div className={styles.desktop} ref={scrollableContainer}>
                        {build()}
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

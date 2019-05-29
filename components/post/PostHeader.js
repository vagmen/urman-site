import React, { Component } from "react";
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import FeedbackForm from "../FeedbackForm";
import { greyDark } from "../../constants/colors";
const Scroll = require("react-scroll");
const scroll = Scroll.animateScroll;

class PostHeader extends Component {
    scrollTo = () => {
        const wH = window.innerHeight;
        scroll.scrollTo(wH);
    };

    render() {
        const { h1, img, className = "", children, ...props } = this.props;
        return (
            <header>
                <div className="post-header__bg" />
                <div className="post-header__inner">
                    <h1>{h1}</h1>
                    <FeedbackForm
                        isHidable={true}
                        title="Хотите получить консультацию?"
                        subTitle="Оставьте заявку, и мы с Вами свяжемся"
                        hideTitleInMobile={true}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="19"
                        viewBox="0 0 39 19"
                        fill="none"
                        className="down-arrow"
                        onClick={this.scrollTo}
                    >
                        <path
                            d="M19.208 18.592C18.967 18.592 18.725 18.505 18.535 18.331L0.327004 1.73999C-0.0809963 1.36799 -0.110996 0.735988 0.261004 0.326988C0.633004 -0.0820121 1.265 -0.112012 1.674 0.260988L19.208 16.24L36.743 0.260988C37.154 -0.111012 37.785 -0.081012 38.156 0.326988C38.528 0.734988 38.499 1.36799 38.091 1.73999L19.881 18.332C19.691 18.505 19.449 18.592 19.208 18.592Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <style jsx>{`
                    @keyframes scale-img {
                        from {
                            transform: scale(1);
                        }
                        to {
                            transform: scale(1.2);
                        }
                    }
                    @keyframes down-arrow {
                        from {
                            transform: translateY(0);
                        }
                        to {
                            transform: translateY(15px);
                        }
                    }
                    .down-arrow {
                        animation: down-arrow 1.5s infinite alternate;
                        cursor: pointer;
                    }
                    header {
                        min-height: 100vh;
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        text-align: center;
                        overflow: hidden;
                    }
                    .post-header__bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background: #999;
                        background-image: url(${img});
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        filter: brightness(0.4);
                        z-index: -1;
                        animation: scale-img 30s infinite alternate;
                    }
                    h1 {
                        font-size: 40px;
                        color: #fff;
                        margin: 75px 0 50px;
                    }
                    @media (min-width: 640px) {
                        h1 {
                            font-size: 44px;
                            line-height: 44px;
                        }
                        h2 {
                            font-size: 33px;
                            line-height: 33px;
                        }
                        h3 {
                            font-size: 22px;
                            line-height: 24px;
                        }
                    }

                    @media (min-width: 960px) {
                        h1 {
                            font-size: 48px;
                            line-height: 48px;
                        }
                        h2 {
                            font-size: 36px;
                            line-height: 36px;
                        }
                        h3 {
                            font-size: 24px;
                            line-height: 28px;
                        }
                    }
                    @media (min-width: 1200px) {
                        h1 {
                            font-size: 52px;
                            line-height: 52px;
                        }
                        h2 {
                            font-size: 39px;
                            line-height: 39px;
                        }
                        h3 {
                            font-size: 26px;
                            line-height: 32px;
                        }
                    }
                    @media (min-width: 1366px) {
                        h1 {
                            font-size: 56px;
                            line-height: 56px;
                            margin: 125px 0 50px;
                        }
                        h2 {
                            font-size: 42px;
                            line-height: 42px;
                        }
                        h3 {
                            font-size: 28px;
                            line-height: 36px;
                        }
                    }
                    @media (min-width: 1600px) {
                        h1 {
                            font-size: 60px;
                            line-height: 60px;
                            margin: 150px 0 125px;
                        }
                        h2 {
                            font-size: 45px;
                            line-height: 45px;
                        }
                        h3 {
                            font-size: 30px;
                            line-height: 40px;
                        }
                    }
                    @media (min-width: 1920px) {
                        h1 {
                            font-size: 64px;
                            line-height: 64px;
                            margin: 200px 0 175px;
                        }
                        h2 {
                            font-size: 48px;
                            line-height: 48px;
                        }
                        h3 {
                            font-size: 32px;
                            line-height: 44px;
                        }
                    }
                `}</style>
            </header>
        );
    }
}

export default PostHeader;

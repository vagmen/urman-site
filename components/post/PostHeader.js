import React, { Component } from "react";
import FeedbackForm from "../FeedbackForm";

class PostHeader extends Component {
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
                            margin: 125px 0 75px;
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

import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div className="error-page">
        <div className="div-404">404</div>
        <h1>Такой страницы нет</h1>
        <Link href="/">
            <a>На главную</a>
        </Link>
        <style jsx>{`
            .error-page {
                display: flex;
                font-family: sans-serif;
                justify-content: center;
                flex-wrap: wrap;
                aling-items: center;
            }
            .div-404 {
                font-size: 150px;
                color: #ffdd2d;
                font-weight: 100;
                flex: 1 1 100%;
                text-align: center;
                margin-top: 100px;
            }
            h1 {
                font-size: 30px;
                color: #333;
                font-weight: 100;
                flex: 1 1 100%;
                text-align: center;
            }
            a {
                font-size: 16px;
                font-family: pragmatica, Helvetica, Arial, sans-serif;
                font-weight: 400;
                line-height: 1;
                text-decoration: none;
                letter-spacing: 1.1px;
                text-transform: uppercase;
                color: #74a3c7;
                flex: 1 1 100%;
                text-align: center;
            }
        `}</style>
    </div>
);
export default errorPage;

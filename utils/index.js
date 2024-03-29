import Custom404 from "pages/404";
import Error from "pages/_error";

export const isElementVisible = (target) => {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

    if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
    ) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        // console.clear();
        // console.log("Вы видите элемент :)");
        return true;
    } else {
        // Если элемент не видно, то запускаем этот код
        // console.clear();
        return false;
    }
};

export const errorHandler = (statusCode) => {
    if (statusCode === 404) {
        return <Custom404 />;
    } else if (statusCode !== 200) {
        return <Error statusCode={statusCode} />;
    }
};


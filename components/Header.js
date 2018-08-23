import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Главная</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>О нас</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>Блог</a>
        </Link>
    </div>
);

export default Header;

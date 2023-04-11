import Link from "next/link";
import Image from "next/image";
import logoSvg from "../public/images/logo.svg";
import { Scrollchor } from "react-scrollchor";

const Header = () => {
    return (
        <header>
            <div className="container mx-auto p-5 pt-5 flex flex-wrap flex-col lg:flex-row items-center">
                <Link href="/">
                    <Image
                        src={logoSvg}
                        className="transition ease-in-out duration-300 lg:mb-5 hover:-translate-y-2"
                        alt="logo"
                    />
                </Link>
                <nav className="flex flex-row py-5 items-center text-md sm:text-lg justify-center md:mx-auto">
                    <Scrollchor
                        className="transition ease-in-out duration-300 mr-5 lg:mr-10 hover:text-teal-400"
                        to="#about"
                    >
                        О массаже
                    </Scrollchor>
                    <Scrollchor
                        className="transition ease-in-out duration-300 mr-5 lg:mr-10 hover:text-teal-400"
                        to="#price"
                    >
                        Прайс
                    </Scrollchor>
                    <Scrollchor
                        k
                        className="transition ease-in-out duration-300 mr-5 lg:mr-10 hover:text-teal-400"
                        to="#master"
                    >
                        Мастер
                    </Scrollchor>
                    <Scrollchor
                        className="transition ease-in-out duration-300 hover:text-teal-400"
                        to="#feedback"
                    >
                        Отзывы
                    </Scrollchor>
                </nav>
                <Link
                    className="transition ease-in-out duration-300 text-teal-400 hover:text-white text-2xl"
                    href="tel:+79222227832"
                >
                    +7 (922) 222-78-32
                </Link>
            </div>
        </header>
    );
};

export default Header;

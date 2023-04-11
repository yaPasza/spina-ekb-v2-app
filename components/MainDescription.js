import Image from "next/image";
import heroImg from "../public/images/master.jpeg";
import { Scrollchor } from "react-scrollchor";

const MainDescription = () => {
    return (
        <section>
            <div className="container mx-auto flex px-5 sm:py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="druk-700 text-xl lg:text-4xl mb-4 text-white">
                        Центр массажной терапии и реабилитации
                        <br />
                        <span className="text-teal-400">Максима Жавронка</span>
                    </h1>
                    <p className="mb-8 text-md lg:text-lg leading-relaxed">
                        Если вы стремитесь хорошо выглядеть, первое, на что
                        стоит обратить внимание - это общее состояние организма.
                        В Центре массажной терапии и реабилитации Spina вам
                        предлагаются процедуры, которые, при условии постоянства
                        и систематичности, имеют огромный уходовый потенциал.
                    </p>
                    <div className="flex justify-center">
                        <Scrollchor
                            to="#signin"
                            className="transition ease-in-out duration-300 inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-800 rounded-full text-lg place-items-center"
                        >
                            Записаться
                        </Scrollchor>
                        <Scrollchor
                            to="#signin"
                            className="transition ease-in-out duration-300 ml-4 inline-flex text-white bg-transparent border-2 border-teal-600 py-2 px-6 focus:outline-none hover:bg-teal-800 rounded-full text-lg text-center"
                        >
                            Купить в подарок
                        </Scrollchor>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded-lg"
                        alt="hero"
                        src={heroImg}
                    />
                </div>
            </div>
        </section>
    );
};

export default MainDescription;

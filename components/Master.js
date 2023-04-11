import Image from "next/image";

const Master = () => {
    return (
        <section className="mb-10" id="master">
            <div className="container mx-auto px-5 text-center xl:text-start w-full mb-5">
                <h1 className="druk-700 sm:text-4xl text-2xl font-medium title-font text-teal-400">
                    МАССАЖИСТ
                </h1>
            </div>
            <div className="container mx-auto px-5 flex flex-col items-center lg:flex-row-reverse">
                <div className="lg:max-w-lg lg:w-1/2 w-5/6 mb-10 lg:mb-0">
                    <Image
                        className="object-cover object-center rounded-lg"
                        alt="hero"
                        src="/images/hero.jpeg"
                        height={1280}
                        width={853}
                    />
                </div>
                <div className="lg:flex-grow lg:w-2/3 lg:pr-16 flex flex-col lg:items-start lg:text-left items-center text-center">
                    <h3 className="druk-700 text-xl mb-10">
                        Здравствуйте, меня зовут
                        <span className="text-teal-400"> Максим</span>.<br />Я
                        физиотерапевт с опытом работы более 15 лет.
                    </h3>
                    <p>Образование:</p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2 text-justify">
                            2005-2012 гг. Уральский государственный
                            педагогический университет по специальности "Тренер
                            - педагог".
                        </li>
                        <li className="mb-2 text-justify">
                            2013-2017 гг. Свердловский медицинский колледж,
                            факультет "Стоматология - ортопедия".
                        </li>
                        <li className="mb-2 text-justify">
                            2018-2022 гг. Медицинский колледж УрГУПС,
                            специальность "Сестринское дело"
                        </li>
                        <li className="mb-2 text-justify">
                            2023 г. Повышение квалификации "Медицинский массаж",
                            "Мануальная терапия", "Спортивный массаж",
                            "Инструментальная мобилизация мягких тканей (Работа
                            с инструментами)", "Иглотерапия", "Точечный массаж",
                            "Работа с триггерами", "Кинезиотейпирование".
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Master;

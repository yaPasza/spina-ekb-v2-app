const Price = () => {
    const price = [
        {
            _id: "1",
            procedure: "Массажные процедуры",
            description:
                "Мануальная терапия, инвазивное лечение сухими иглами, послеизометрическая релаксация, миофасциальный релиз, спортивный, классический массаж. Инструментальная мобилизация мягких тканей.",
            time: "60 минут",
            cost: "3000₽",
        },
        {
            _id: "2",
            procedure: "Прессотерапия",
            description:
                "Аппаратный массаж с использованием сжатого воздуха. Прессотерапия помогает похудеть, избавляет от циллюлита.",
            time: "20 минут",
            cost: "500₽",
        },
        {
            _id: "3",
            procedure: "Ваккумная градиентная терапия",
            description:
                "Метод, который основан на использовании дозированного вакуумного воздействия различного уровня тканей тела человека, включая глубинные структуры мягких тканей и весьма обширную сосудистую систему.",
            time: "30 минут",
            cost: "1100₽",
        },
        {
            _id: "4",
            procedure: "Текар-терапия",
            description:
                "Метод физиотерапии, в котором используется электромагнитная энергия, преобразующаяся в тепло и стимулирующая метаболические процессы в коже, тканях опорно-двигательного аппарата и внутренних органов.",
            time: "25 минут",
            cost: "1100₽",
        },
        {
            _id: "5",
            procedure: "Кинезиотейпирование",
            description:
                "Метод альтернативной медицины, наложение на кожу эластичных цветных лент или обматывание ими.",
            time: "5 - 15 минут",
            cost: "500₽",
        },
    ];

    return (
        <section className="body-font" id="price">
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-5 md:mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 druk-700 text-teal-400">
                        ПРАЙС
                    </h1>
                </div>
                <div className="w-full mx-auto hidden md:block">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="w-20 px-4 py-3 title-font rounded-tl bg-teal-600">
                                    Процедура
                                </th>
                                <th className="px-4 py-3 title-font bg-teal-600">
                                    Описание
                                </th>
                                <th className="w-40 px-4 py-3 title-font bg-teal-600 text-center">
                                    Время
                                </th>
                                <th className="w-20 px-4 py-3 title-font bg-teal-600 rounded-tr text-center">
                                    Цена
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {price.map((item) => {
                                return (
                                    <tr>
                                        <td className="px-4 py-3 border-b-2 border-teal-600">
                                            {item.procedure}
                                        </td>
                                        <td className="px-4 py-3 border-b-2 border-teal-600">
                                            {item.description}
                                        </td>
                                        <td className="px-4 py-3 text-center border-b-2 border-teal-600">
                                            {item.time}
                                        </td>
                                        <td className="px-4 py-3 text-lg text-teal-400 text-center border-b-2 border-teal-600">
                                            {item.cost}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="grid grid-cols-1 gap-4 md:hidden">
                    {price.map((item) => {
                        return (
                            <div
                                className="flex rounded-lg h-full p-5 flex-col window mb-5"
                                key={item._id}
                            >
                                <div className="flex flex-col space-x-2 text-sm">
                                    <div className="text-center text-xl text-teal-400 mb-2">
                                        {item.procedure}
                                    </div>
                                    <div className="text-center mb-2">
                                        {item.description}
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <div className="text-lg text-teal-400 ml-5">
                                            {item.time}
                                        </div>
                                        <div className="text-lg text-teal-400 mr-5">
                                            {item.cost}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Price;

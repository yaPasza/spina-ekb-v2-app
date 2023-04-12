import { useEffect, useState } from "react";
import Validator from "./utils/validator";
import ReCAPTCHA from "react-google-recaptcha";

const RequestForm = () => {
    const [data, setData] = useState({ name: "", phone: "", message: "" });
    const [sendStatus, setSendStatus] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [errors, setErrors] = useState({});

    const SITE_KEY = ""; // Site key for ReCAPTCHA
    let tg = {
        token: "", // Your bot's token that got from @BotFather
        chat_id: "", // The user's(that you want to send a message) telegram chat id
    };

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = Validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0 && captcha;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSendStatus(() => true);
        const isValid = validate();
        if (!isValid) return;
        sendMessage(data);
        setData({ name: "", phone: "", message: "" });
        setTimeout(() => {
            setSendStatus(() => false);
        }, 3000);
    };

    const validatorConfig = {
        name: { isRequired: { message: "Имя обязательно для заполнения" } },
        phone: { isRequired: { message: "Номер обязателен для заполнения" } },
    };

    function onChange(value) {
        setCaptcha(true);
    }

    function sendMessage(text) {
        let message = `Новая заявка с сайта!%0AИмя пользователя: ${text.name}%0AТелефон: ${text.phone}%0AСообщение: ${text.message}`;
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${message}`; // The url to request
        const xht = new XMLHttpRequest();
        xht.open("GET", url);
        xht.send();
    }

    return (
        <section className="body-font relative" id="signin">
            <div className="container px-5 pb-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-teal-400 druk-700">
                        Записаться на сеанс
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
                        Запишитесь на сеанс и получите
                        <span className="text-teal-400"> скидку 10%</span>
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form
                        className="flex flex-wrap -m-2"
                        onSubmit={handleSubmit}
                    >
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm"
                                >
                                    Ваше имя *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-teal-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label
                                    htmlFor="phone"
                                    className="leading-7 text-sm"
                                >
                                    Телефон *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={data.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-teal-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm"
                                >
                                    Сообщение
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={data.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-teal-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-32"
                                ></textarea>
                            </div>
                        </div>

                        {sendStatus ? (
                            <div
                                className="mb-3 inline-flex w-full items-center rounded-lg bg-green-800 px-6 py-5 text-base"
                                role="alert"
                            >
                                <span className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                Сообщение отправлено успешно!
                            </div>
                        ) : (
                            <div className="p-2 w-full flex justify-center">
                                <ReCAPTCHA
                                    sitekey="6Lel53AlAAAAAKPgom5PzUokVM0LVF6sPcD4hhjr"
                                    onChange={onChange}
                                />
                            </div>
                        )}

                        <div className="p-2 w-full">
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="flex mx-auto text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none transition ease-in-out duration-300 hover:bg-teal-800 rounded text-lg disabled:bg-gray-800"
                            >
                                Записаться
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RequestForm;

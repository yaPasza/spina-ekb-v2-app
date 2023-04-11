import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

const About = () => {
    const [showModal, setShowModal] = useState({
        status: false,
        title: "",
        description: "",
        descriptionImage: "",
    });

    const posts = [
        {
            _id: "67rdca3eeb7f6fgeed471815",
            title: "ПРЕССОТЕРАПИЯ",
            description:
                "Пневмокомпрессионный массаж, проводимый с помощью повышенного давления. Процедура эффективна для борьбы с отеками, для улучшения кровообращения и стимуляции работы лимфатической системы.",
            image: "/images/massage.png",
            descriptionImage: "/images/pressotherapy.jpg",
        },
        {
            _id: "67rdca3eeb7f6fgeed471816",
            title: "КИНЕЗИОТЕРАПИЯ",
            description:
                "Комплекс лечебных упражнений, направленных на профилактику и восстановление нарушений метаболизма в позвонках, межпозвонковых дисках, сухожилиях, фасеточных суставах, мышцах и внутренних органах.",
            image: "/images/therapy.png",
            descriptionImage: "/images/kinesiotherapy.jpg",
        },
        {
            _id: "67rdca3eeb7f6fgeed471817",
            title: "ВАККУМНАЯ ГРАДИЕНТНАЯ ТЕРАПИЯ",
            description:
                "Это глубокая вакуумная проработка мышечно-фасциальных структур, сухожилий, связок и рефлекторно связанных с ними внутренних органов.",
            image: "/images/vacuum.png",
            descriptionImage: "/images/vacuumtherapy.jpg",
        },
    ];

    const handleModal = () => {
        setShowModal(false);
    };

    return (
        <section id="about">
            <div className="container px-5 py-10 mb-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h2 className="text-xs text-teal-400 tracking-widest font-medium title-font mb-1">
                        ЛЕЧЕБНАЯ ПРОГРАММА
                    </h2>
                    <h1 className="druk-700 sm:text-3xl text-2xl font-medium title-font">
                        Комплексные программы реабилитации
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {posts.map((post) => {
                        return (
                            <div className="p-4 lg:w-1/3" key={post._id}>
                                <div className="flex rounded-lg h-full p-8 flex-col window">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-400 text-white flex-shrink-0">
                                            <Image
                                                src={post.image}
                                                width={22}
                                                height={22}
                                            />
                                        </div>
                                        <h2 className="text-teal-400 text-xl title-font font-medium">
                                            {post.title}
                                        </h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">
                                            {post.description}
                                        </p>
                                        <button
                                            className="mt-3 text-teal-400 inline-flex items-center transition ease-in-out duration-300 hover:text-white"
                                            type="button"
                                            onClick={() =>
                                                setShowModal({
                                                    status: true,
                                                    title: post.title,
                                                    description:
                                                        post.description,
                                                    descriptionImage:
                                                        post.descriptionImage,
                                                })
                                            }
                                        >
                                            Подробнее
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Modal
                isVisible={showModal.status}
                closeModal={handleModal}
                title={showModal.title}
                description={showModal.description}
                descriptionImage={showModal.descriptionImage}
            />
        </section>
    );
};

export default About;

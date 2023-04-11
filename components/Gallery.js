import Image from "next/image";
import firstImg from "../public/images/1.jpeg";
import secondImg from "../public/images/2.jpeg";
import thirdImg from "../public/images/3.jpeg";
import fourthImg from "../public/images/4.jpeg";
import fifthImg from "../public/images/5.jpeg";
import sixthImg from "../public/images/6.jpeg";

const Gallery = () => {
    return (
        <section className="body-font">
            <div className="container px-5 pb-24 mx-auto flex flex-wrap">
                <div className="mb-6">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font text-teal-400 lg:w-1/3 lg:mb-0 mb-4 druk-700">
                        ГАЛЕРЕЯ
                    </h1>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={firstImg}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={secondImg}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block rounded-lg"
                                src={fifthImg}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block rounded-lg"
                                src={fourthImg}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={thirdImg}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block rounded-lg"
                                src={sixthImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

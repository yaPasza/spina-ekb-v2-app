import Image from "next/image";

const Modal = ({
    isVisible,
    closeModal,
    title,
    description,
    descriptionImage,
}) => {
    const handleClose = (e) => {
        if (e.target.id === "wrapper") closeModal();
    };
    return (
        isVisible && (
            <div
                id="wrapper"
                onClick={handleClose}
                className="fixed left-0 top-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center h-full w-full overflow-y-auto overflow-x-hidden outline-none text-black"
            >
                <div className="w-[600px]">
                    <div className=" bg-zinc-800 text-white rounded-lg p-5 m-4">
                        <div className="flex justify-between items-center mb-4">
                            <h5 class="text-xl font-medium leading-normal text-teal-400">
                                {title}
                            </h5>
                            <button
                                type="button"
                                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close"
                                onClick={closeModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="text-justify">{description}</div>
                        <div className="flex justify-center">
                            <Image
                                width={360}
                                height={300}
                                className="object-cover object-center rounded-lg mt-4"
                                alt={title}
                                src={descriptionImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;

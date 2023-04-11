const Footer = () => {
    return (
        <footer className="body-font bg-zinc-900">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <p className="text-sm sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} - Spina-ekb.ru
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        href="https://yapasza.ru"
                        className="ml-1 hover:text-teal-400"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @yaPasza
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;

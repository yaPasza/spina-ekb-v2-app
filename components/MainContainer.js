import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
const MainContainer = ({ children, title, description, keywords }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="HandheldFriendly" content="true" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta keywords={"yaUsers, list" + keywords} />
                <meta name="author" content="Pavel Karpov" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#2dd4bf"
                />
                <meta name="apple-mobile-web-app-title" content="SPINA" />
                <meta name="application-name" content="SPINA" />
                <meta name="msapplication-TileColor" content="#333333" />
                <meta
                    name="msapplication-TileImage"
                    content="/favicon/mstile-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainContainer;

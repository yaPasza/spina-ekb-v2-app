import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Gallery from "@/components/Gallery";
import MainContainer from "@/components/MainContainer";
import MainDescription from "@/components/MainDescription";
import Master from "@/components/Master";
import MyMap from "@/components/MyMap";
import Price from "@/components/Price";
import RequestForm from "@/components/RequestForm";

export default function Home() {
    return (
        <MainContainer
            title="SPINA - Центр массажной и восстановительной терапии Максима Жавронка"
            description="В Центре массажной терапии и реабилитации Spina вам предлагаются процедуры, которые, при условии постоянства и систематичности, имеют огромный потенциал."
            keywords="массаж, терапия, восстановление, кинезиотерапия, екатеринбург, екб, Прессотерапия, ВАККУМНАЯ ГРАДИЕНТНАЯ ТЕРАПИЯ, текар-терапия, метро динамо, центр"
        >
            <main className="text-gray-50 montserrat-400">
                <MainDescription />
                <About />
                <Master />
                <Gallery />
                <Price />
                <Feedback />
                <MyMap />
                <RequestForm />
            </main>
        </MainContainer>
    );
}

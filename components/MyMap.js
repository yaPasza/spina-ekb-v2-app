import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MyMap = () => {
    return (
        <section>
            <YMaps>
                <div>
                    <Map
                        className="w-full h-[400px] my-20"
                        defaultState={{
                            center: [56.84617110323063, 60.5959961477023],
                            zoom: 15,
                        }}
                        instanceRef={(ref) => {
                            ref &&
                                ref.behaviors.disable("scrollZoom") &&
                                ref.behaviors.disable("multiTouch") &&
                                ref.behaviors.disable("drag");
                        }}
                    >
                        <Placemark
                            geometry={[56.84617110323063, 60.5959961477023]}
                            options={{
                                iconLayout: "default#image",
                                iconImageHref: "/favicon/favicon-32x32.png",
                                iconImageSize: [32, 32],
                                iconImageOffset: [-3, -42],
                            }}
                        />
                    </Map>
                </div>
            </YMaps>
        </section>
    );
};

export default MyMap;

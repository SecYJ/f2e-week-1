import Heading from "../../util/Heading";
import collaborationBgSm from "../../images/collaboration-bg-sm.png";
import collaborationBg from "../../images/collaboration-bg.png";
import spirit1 from "../../images/collaboration-sprit-1.png";
import spirit2 from "../../images/collaboration-sprit-2.png";

const Collaboration = () => {
    return (
        <section className="py-10 px-6 md:py-20 md:px-8 xl:py-[5.5rem] xl:px-[110px]">
            <Heading Tag="h2">設計師與工程師進行攜手合作</Heading>
            <div className="relative mt-12">
                <picture>
                    <source
                        srcSet={collaborationBg}
                        media="(min-width: 1320px)"
                    />
                    <source srcSet={collaborationBgSm} />
                    <img
                        srcSet={collaborationBgSm}
                        alt="collaboration banner"
                        className="mx-auto"
                    />
                </picture>
                <Heading
                    Tag="h3"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-[0.15em] text-white [writing-mode:vertical-rl] xl:text-[2rem] xl:leading-[39px]"
                >
                    互動式網頁設計
                </Heading>
                <img
                    src={spirit1}
                    className="absolute top-1/2 left-1/4 h-[138px] w-[151px] -translate-y-1/2 -translate-x-[60%] md:h-[171px] md:w-[186px] lg:-translate-x-1/4 xl:h-auto xl:w-auto xl:-translate-x-[60%]"
                    alt=""
                />
                <img
                    src={spirit2}
                    className="absolute top-1/2 right-1/4 h-[138px] w-[151px] translate-x-[60%] -translate-y-1/2 md:h-[171px] md:w-[186px] lg:translate-x-1/4 xl:h-auto xl:w-auto xl:translate-x-[60%]"
                    alt=""
                />
            </div>
        </section>
    );
};
export default Collaboration;

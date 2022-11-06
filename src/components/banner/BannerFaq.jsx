import Heading from "../../util/heading";
import sprit1 from "../../images/sprit-1.png";
import sprit2 from "../../images/sprit-2.png";
import sprit3 from "../../images/sprit-3.png";

const data = [
    {
        text: "羨慕別人的酷酷網頁動畫？",
        img: sprit1,
    },
    {
        text: "滿足不了同事的許願？",
        img: sprit2,
    },
    {
        text: "動畫技能樹太雜無從下手？",
        img: sprit3,
    },
];

const BannerFaq = () => {
    return (
        <div className="bg-[#fdf7e8] py-10 px-6 xl:py-20">
            <Heading
                Tag="h2"
                className="text-center text-[1.5rem] leading-[29px]"
            >
                你是否也遇到以下問題?
            </Heading>
            <ul className="mt-20 space-y-8 text-center xl:space-y-10">
                {data.map((item) => {
                    const { text, img } = item;
                    return (
                        <li
                            className="relative rounded-[10px] border border-secondary py-4 leading-[19px] xl:mx-auto xl:max-w-[856px]"
                            key={text}
                        >
                            <img
                                src={img}
                                className="absolute top-0 left-0 h-20 w-20 -translate-y-full xl:h-auto xl:w-auto"
                                alt={text}
                            />
                            {text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default BannerFaq;

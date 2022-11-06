import Heading from "../../util/Heading";
import blockStudio from "../../images/block-studio.png";
import titanSoft from "../../images/titan-soft.png";
import kdan from "../../images/kdan.png";

const data = [blockStudio, titanSoft, kdan];

const Sponsor = () => {
    return (
        <section className="bg-[#fdf7e8] py-10 px-6 md:px-8 xl:py-[5.5rem] xl:px-[110px]">
            <Heading Tag="h2">贊助單位</Heading>
            <ul className="mt-8 grid gap-6 xl:grid-cols-3">
                {data.map((img) => {
                    return (
                        <li
                            key={img}
                            className="rounded-[1.25rem] border border-secondary bg-white"
                        >
                            <img
                                src={img}
                                alt="sponsor"
                                className="w-full object-cover"
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default Sponsor;

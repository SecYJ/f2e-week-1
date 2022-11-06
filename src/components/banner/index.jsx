import banner from "../../images/banner.png";
import bannerSm from "../../images/banner-sm.png";
import BannerFaq from "./BannerFaq";

const Banner = () => {
    return (
        <section>
            <div className="relative h-[512px] md:h-[696px]">
                <picture>
                    <source srcSet={banner} media="(min-width: 1320px)" />
                    <source srcSet={bannerSm} />
                    <img
                        src={bannerSm}
                        className="h-full w-full"
                        alt="banner"
                    />
                </picture>
                <h1 className="absolute left-1/2 bottom-[140px] -translate-x-1/4 text-center text-primary md:bottom-[185px] xl:text-[3rem] xl:leading-[58px]">
                    The F2E 4th 互動式網頁設計
                </h1>
            </div>
            <BannerFaq />
        </section>
    );
};
export default Banner;

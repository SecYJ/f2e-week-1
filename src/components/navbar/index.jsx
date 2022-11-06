const data = ["關卡資訊", "作品列表", "攻略資源", "求職專區"];

const Navbar = () => {
    return (
        <ul className="hidden gap-10 text-[1.25rem] leading-6 xl:flex">
            {data.map((item) => {
                return (
                    <li className="text-primary" key={item}>
                        <a href="#">{item}</a>
                    </li>
                );
            })}
        </ul>
    );
};
export default Navbar;

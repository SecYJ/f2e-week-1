import { Navbar, Button } from "..";
import headerLogo from "../../images/header-logo.png";

const Header = () => {
    return (
        <header className="sticky top-0 left-0 z-10 grid grid-cols-[1fr,auto] items-center gap-8 bg-white py-6 xl:grid-cols-[auto,1fr,auto]">
            <a href="#">
                <img src={headerLogo} alt="header-logo" />
            </a>
            <Navbar />
            <div className="flex gap-4">
                <Button variant="primary">註冊報名</Button>
                <Button variant="primary" className="hidden xl:block">
                    登入
                </Button>
                <button type="button" className="w-[30px] space-y-1 xl:hidden">
                    <div className="h-[3px] bg-secondary"></div>
                    <div className="h-[3px] bg-secondary"></div>
                    <div className="h-[3px] bg-secondary"></div>
                </button>
            </div>
        </header>
    );
};
export default Header;

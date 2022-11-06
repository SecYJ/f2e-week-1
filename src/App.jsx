import { Header, Footer, Banner, Collaboration, Sponsor } from "./components";

function App() {
    return (
        <>
            <div className="container">
                <Header />
                <div className="border border-secondary">
                    <main>
                        <Banner />
                        <Collaboration />
                        <Sponsor />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default App;

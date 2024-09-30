import { BrowserRouter } from "react-router-dom";

import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    Footer,
} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="w-full relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
                {/* <div className="w-full sm:w-full md:w-full lg:w-full">
                    <Footer />
                </div> */}
            </div>
        </BrowserRouter>
    );
};

export default App;

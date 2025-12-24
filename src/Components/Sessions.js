import Navbar from "./Navbar";
import Footer from "./Footer";

const Sessions = () => {
    return (
        <div className="w-full">
            <Navbar />

            {/* Push content below fixed navbar */}
            <main className="pt-16 md:pt-20 h-[620px]">
                <h1 className="text-2xl font-semibold text-center">In Progress</h1>
            </main>

            <Footer />
        </div>
    );
};

export default Sessions;

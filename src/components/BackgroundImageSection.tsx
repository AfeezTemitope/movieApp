// import Background from '../assets/image101.jpg'
import BgBby from '../assets/movieAnywhere.jpg'
const BackgroundImageSection = () => {
    return (
        <div className="relative flex items-center justify-center bg-[#07161D]">
            <div
                className="relative flex items-center justify-center h-[400px] w-full bg-cover bg-right bg-no-repeat text-white"
                style={{backgroundImage: `url(${BgBby})`}}>
                <div className="relative z-10  p-8 rounded-md max-w-md text-center">
                    <h1 className="text-2xl font-bold mb-4">Welcome to Bad Hub City</h1>
                    <p>We offer a range of services to help you become diddy.</p>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImageSection;
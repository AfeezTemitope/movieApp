import BgBby from '../assets/movieAnywhere.jpg';

const BackgroundImageSection = () => {
    return (
        <div className="relative flex items-center justify-center bg-[#07161D]">
            <div
                className="relative flex items-center justify-center w-full"
                style={{
                    height: '300px',
                    backgroundImage: `url(${BgBby})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
        </div>
    );
};

export default BackgroundImageSection;

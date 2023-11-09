
const Button = ({ label , iconURL }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-5 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
            {label}
            <img 
                src={iconURL}
                alt="Red Arrow Right"
                className="ml-2 rounded-full bg-white w-5 h-5"
            />
        </button>
    );
};

export default Button;

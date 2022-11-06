const Button = ({ children, onClick, variant = "primary", className }) => {
    if (variant === "primary") {
        return (
            <button
                onClick={onClick}
                className={`${className} rounded-full border-8 border-transparent bg-warning py-4 px-10 text-[14px] leading-[17px] hover:border-warning-light md:text-[1.25rem] md:leading-6`}
            >
                {children}
            </button>
        );
    }

    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

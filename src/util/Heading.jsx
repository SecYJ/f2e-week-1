const Heading = ({ children, Tag, className = "" }) => {
    return (
        <Tag
            className={`${className} text-center text-[1.5rem] leading-[29px]`}
        >
            {children}
        </Tag>
    );
};
export default Heading;

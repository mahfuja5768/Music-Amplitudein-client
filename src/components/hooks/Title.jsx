

const Title = ({children}) => {
    return (
        <div className="relative ps-3 border-s-8 border-red my-12">
            <h2 className="text-3xl md:text-6xl font-bold">{children}</h2>
            <p className="-z-10 top-3.5 absolute bottom-0 lg:text-9xl text-6xl opacity-5">{children}</p>
        </div>
    );
};

export default Title;
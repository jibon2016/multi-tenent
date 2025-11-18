const Header = ({category, title}: {category:string, title:string}) => {
    return (
        <div className="mb-10">
            <p className="text-gray-400 dark:text-light-gray ">{category}</p>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-light-gray">{title}</p>
        </div>
    );
};
export default Header;

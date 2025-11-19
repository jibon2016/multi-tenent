import { Link, usePage } from '@inertiajs/react';
import { SiShopware } from 'react-icons/si';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';

import { links } from '@/data/dummy';
import { useStateContext } from '@/contexts/ContextProvider';
const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize && screenSize <= 900) {
            setActiveMenu(false);
        }
    }

    const { url } = usePage();
    const isActive = (href: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        return url === href;
    };
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 dark:text-gray-200';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:hover:bg-gray-500 dark:hover:text-black hover:bg-gray-100 dark:text-gray-200 m-2';
    return (
        <div className="ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto">
            {activeMenu && (
                <>
                    <div className="flex items-center justify-between">
                        <Link
                            onClick={handleCloseSidebar}
                            href="/"
                            className="mt-4 ml-3 flex items-center gap-3 text-xl font-extrabold tracking-tight !text-slate-900 dark:text-white"
                        >
                            <SiShopware /> <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content="Close" position="BottomCenter">
                            <button
                                type="button"
                                onClick={() => setActiveMenu((preActiveMenu) => !preActiveMenu)}
                                className="hover:bg-light-gray mt-4 block rounded-full p-3 text-xl md:hidden"
                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="m-3 mt-4 text-gray-400 dark:text-light-gray uppercase">{item.title}</p>
                                {item.links.map((link) => (
                                    <Link
                                        href={`/${link.name}`}
                                        key={link.name}
                                        style={{ backgroundColor: isActive(`/${link.name}`) ? currentColor : '' }}
                                        onClick={handleCloseSidebar}
                                        className={`${isActive(`/${link.name}`) ? activeLink : normalLink} dark:text-light-gray`}
                                    >
                                        {link.icon}
                                        <span className={`${ isActive(`/${link.name}`) ? 'text-white ': ''} capitalize dark:text-light-gray`}>{link.name}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
export default Sidebar;

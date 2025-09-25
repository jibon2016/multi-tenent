import { Link, usePage } from '@inertiajs/react';
import { SiShopware } from 'react-icons/si';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';

import { links } from '@/data/dummy';
import { useStateContext } from '@/contexts/ContextProvider';
const Sidebar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
    const { url } = usePage();
    const isActive =  (href: {href: string}) =>  url === href;
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-blue-600';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md !text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 m-2';
    return (
        <div className="ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto">
            {activeMenu && (
                <>
                    <div className="flex items-center justify-between">
                        <Link
                            onClick={() => setActiveMenu(false)}
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
                                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                                {item.links.map((link) => (
                                    <Link
                                        href={`/${link.name}`}
                                        key={link.name}
                                        onClick={() => {}}
                                        className={isActive(link.name) ? activeLink : normalLink}
                                    >
                                        {link.icon}
                                        <span className="capitalize">{link.name}</span>
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

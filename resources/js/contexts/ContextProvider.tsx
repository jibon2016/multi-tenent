import React, {createContext, useContext,useState } from 'react';
import { applyTheme } from '@/hooks/use-appearance';

export interface StateContextType {
    currentColor: string;
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
    currentMode: 'Light' | 'Dark' | string;
    setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    screenSize: number ;
    setScreenSize: React.Dispatch<React.SetStateAction<number >>;
    themeSettings: boolean;
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: initialStateType;
    setIsClicked: React.Dispatch<React.SetStateAction<initialStateType>>;
    handleClick: (clicked: string) => void;
    setColor: (color: string) => void;
    setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface initialStateType {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
}

const StateContext = createContext<StateContextType | undefined >(undefined);

const initialState =  {
    chat: false ,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isClicked, setIsClicked] = useState(initialState);
    const [activeMenu, setActiveMenu] =  useState(true);
    const [screenSize, setScreenSize] = useState(0);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        applyTheme(e.target.value.toLowerCase() as 'light' | 'dark' | 'system');
        setCurrentMode(e.target.value);
        // localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    };

    const setColor = (color: string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }
    const handleClick = (clicked: string) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize, setScreenSize,
            currentColor, setCurrentColor,
            currentMode, setCurrentMode,
            themeSettings, setThemeSettings,
            setColor,
            setMode
        }}>
            {children}
        </StateContext.Provider>
    )
};
// export const useStateContext = () => useContext(StateContext);
export const useStateContext = (): StateContextType => {
    const context = useContext(StateContext);
    if (!context) throw new Error('useStateContext must be used within StateContextProvider');
    return context;
};

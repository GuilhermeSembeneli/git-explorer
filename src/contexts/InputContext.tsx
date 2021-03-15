import React, { ReactNode } from "react";

interface InputProviderProps{
    children: ReactNode
}

interface InputContextData{
    inputText: string;
    setInputText: React.Dispatch<string>;
}

export const InputContext = React.createContext({} as InputContextData) 

export function InputProvider({children} : InputProviderProps) {
    const [inputText, setInputText] = React.useState('')
    return(
    <InputContext.Provider value={{
        inputText,
        setInputText  
        }}>
        {children}
      </InputContext.Provider>
    )
}
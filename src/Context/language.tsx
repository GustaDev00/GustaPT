import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import Content from "@/global/content";

interface LanguageContextType {
  setType: Dispatch<SetStateAction<"en" | "pt">>;
  content: any;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [type, setType] = useState<"en" | "pt">("en");
  const [content, setContent] = useState(Content["en"]);

  useEffect(() => {
    setContent(Content[type]);
  }, [type]);

  return (
    <LanguageContext.Provider
      value={{
        setType,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("erro no provider state");
  }
  return context;
};

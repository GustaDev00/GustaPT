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
  countLetter: number;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [type, setType] = useState<"en" | "pt">("en");
  const [content, setContent] = useState(Content["en"]);
  const [countLetter, setCountLetter] = useState(Content["en"]?.loading?.text?.length ?? 0);

  useEffect(() => {
    setContent(Content[type]);
    if (Content[type]?.loading?.text) {
      setCountLetter(Content[type]?.loading?.text.length ?? 0);
    }
  }, [type]);

  return (
    <LanguageContext.Provider
      value={{
        setType,
        content,
        countLetter,
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

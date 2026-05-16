import { type ReactNode, createContext, useContext, useState } from "react";

interface ColorfulModeContextType {
  isColorful: boolean;
  toggleColorful: () => void;
}

const ColorfulModeContext = createContext<ColorfulModeContextType>({
  isColorful: false,
  toggleColorful: () => {},
});

export function ColorfulModeProvider({ children }: { children: ReactNode }) {
  const [isColorful, setIsColorful] = useState(false);

  const toggleColorful = () => setIsColorful((prev) => !prev);

  return (
    <ColorfulModeContext.Provider value={{ isColorful, toggleColorful }}>
      {children}
    </ColorfulModeContext.Provider>
  );
}

export function useColorfulMode() {
  return useContext(ColorfulModeContext);
}

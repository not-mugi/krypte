import { useEffect } from "react";
import { ThemedText as Text, useTheme, ThemedBlock, Block } from "@mugijs/web";

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("mugi");

    return () => setTheme("light");
  }, [setTheme]);

  return (
    <div className={`App ${theme}`}>
      <ThemedBlock scale="screen" alignment="center">
        <Block
          className="border-4 border-gray-200 rounded-xl"
          scale="2xl"
          alignment="center"
        >
          <Text className="text-8xl">Mugi Js</Text>
        </Block>
      </ThemedBlock>
    </div>
  );
}

export default App;

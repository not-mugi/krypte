import { useEffect } from "react";
import { ThemedSpan, useTheme, ThemedBlock, Block, Text } from "@mugijs/web";

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
          <ThemedSpan width="400px" height="500px">
            <Text className="text-2xl">Hello mugi js</Text>
          </ThemedSpan>
        </Block>
      </ThemedBlock>
    </div>
  );
}

export default App;

import { useEffect } from "react"
import { ThemedText as Text, useTheme, ThemedBlock } from "../../../pkgs/web"

function App() {

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme("mugi")

    return () => setTheme("light")
  }, [setTheme])

  return (
    <div className={`App ${theme}`}>
        <ThemedBlock scale="screen">
        <Text className="text-8xl">Mugi Js</Text>
        </ThemedBlock>
    </div>
  )
}

export default App

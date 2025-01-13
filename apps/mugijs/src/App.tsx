import { Block } from "@mugijs/react-web";

function App() {
  return (
    <div className={`App mugi`}>
      <Block
        component="section"
        className="bg-mugi-500"
        config={{
          display: "flex",
          content: "content",
          justification: "center",
          inlineJustification: "center"
        }}
      >
        Hello world
      </Block>
    </div>
  );
}

export default App;

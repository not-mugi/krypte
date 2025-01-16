import { Block } from "@mugijs/react-web";

function App() {
  return (
    <div className={"mugi"}>
      <Block
        component="section"
        className="mugi:bg-mugi-200"
        boxConfig={{
          display: "flex",
          content: "content",
          justification: "center",
        }}
      >
        Hello world
      </Block>
    </div>
  );
}

export default App;

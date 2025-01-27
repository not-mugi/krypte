import { Block } from "@mugijs/react-web";

function App() {
  return (
    <div className={"mugi"}>
      <Block
        component="button"
        color={{
          color : "emerald",
          background : "rose"
        }}
        sizing={{
          width : "1/2",
          height : "xs"
        }}
      >
        Hello world
      </Block>
    </div>
  );
}

export default App;

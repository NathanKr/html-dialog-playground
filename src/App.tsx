// import "./App.css";
import DialogModel from "./components/dialog-model";
import DialogNonModel from "./components/dialog-non-model";
import DialogModelSimple from "./components/dialog-non-model-simple";

function App() {
  return (
    <>
    <div style={{ border: "2px solid orange" }}>
        <h2>Dialog Modal Simple - blocking</h2>
        <p>
          The page UI is{" "}
          <span style={{ color: "orange" }}>non interactive</span>
        </p>
        <br />
        <DialogModelSimple />
      </div>
      <br />
      <div style={{ border: "2px solid orange" }}>
        <h2>Dialog Modal - blocking</h2>
        <p>
          The page UI is{" "}
          <span style={{ color: "orange" }}>non interactive</span>
        </p>
        <br />
        <DialogModel />
      </div>
      <br />
      <div style={{ border: "2px solid green" }}>
        <p>
          The page UI is <span style={{ color: "green" }}>interactive</span>
        </p>

        <h2>Dialog Non Modal - non blocking</h2>
        <br />
        <DialogNonModel />
      </div>
    </>
  );
}

export default App;

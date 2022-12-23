import { FeedbackButton } from "@feedback-otter/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h2>Click the buttons for more detail</h2>
        <button className="button" onClick={appDetail}>
          App Button
        </button>
        <FeedbackButton onClick={defaultDetail}>Default FBO</FeedbackButton>
        <FeedbackButton className="button" onClick={classDetail}>
          Class FBO
        </FeedbackButton>
        <FeedbackButton
          onClick={overrideDetail}
          style={{
            backgroundColor: "grey",
            color: "yellow",
            padding: "2rem",
            borderRadius: "3rem",
          }}
        >
          Style Override FBO
        </FeedbackButton>
        <FeedbackButton placement="right">Right FBO</FeedbackButton>
        <FeedbackButton placement="left">Left FBO</FeedbackButton>
      </div>
    </>
  );
}

function appDetail() {
  alert("The default button style for the app");
}

function defaultDetail() {
  alert("The default button style for the Feedback Otter (FBO) package");
}

function classDetail() {
  alert(
    "The Feedback Otter button with the default button style class.\n" +
      "The class is filling in pieces of the default button style that it does not have."
  );
}

function overrideDetail() {
  alert(
    "The Feedback Otter button can be overridden with any `style` on the `style` prop."
  );
}

export default App;

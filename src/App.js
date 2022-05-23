import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./components/DemoComponent/DemoComponent";
import Sample from "./components/Sample/Sample";

function App() {
  const dataArr = [
    {
      paragraph: "12",
      div: "12",
      span: "12",
      span2: "12",
      h1: "3",
    },
    {
      paragraph: "13",
      div: "13",
      span: "13",
      span2: "13",
      h1: "3",
    },
    {
      paragraph: "14",
      div: "14",
      span: "14",
      span2: "14",
      h1: "3",
    },
    {
      paragraph: "14",
      div: "14",
      span: "14",
      span2: "14",
      h1: "3",
    },
    {
      paragraph: "15",
      div: "16",
      span: "16",
      span2: "16",
      h1: "3",
    },
  ];
  const arr = ["Avi", "Ben", "Roy", "Ziv"];
  const paragraph = "para";
  return (
    <>
      <DemoComponent />
      <Sample paragraph={paragraph} div={"2"} span={"3"} span2={"4"} h1={"3"} /> 
      {dataArr.map((item) => (
        <Sample
          paragraph={item.paragraph}
          div={item.div}
          span={item.span}
          span2={item.span2}
          h1={item.h1}
        />
      ))}
      <br />
      <div>HTML:</div>
      {arr}
    </>
  );
}

export default App;

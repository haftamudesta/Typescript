import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Heading title={"Hello react"} />
      <Section title="over ride the default">this my tutorial</Section>
      <Counter />
    </>
  );
}

export default App;

import { useState } from "react";
import data from "./data";

const App = () => {
  const [value, setValue] = useState(1);
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(text);

  return (
    <section className="section-center">
      <h4>Lorem Ipsum</h4>
      <form
        className="lorem-form"
        onSubmit={(e) => {
          e.preventDefault();
          let amount = Number(value);
          setText(data.slice(0, amount));
        }}
      >
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={value}
          onChange={handleChange}
          min="1"
          step="1"
          max="8"
        />
        <button type="submit" className="btn">
          Generate!
        </button>
      </form>
      <article className="className">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;

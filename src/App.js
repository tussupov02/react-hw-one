import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  const [isShow, setShow] = useState(false);
  const [link, setLink] = useState("");
  const addLink = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="App">
      <h2
        style={{
          width: "100px",
          color: "rgba(211, 46, 46, 0.822)",
          marginTop: "20px",
        }}
      >
        Кликер
      </h2>
      <p
        style={{
          width: "600px",
          color: "gray",
          marginTop: "15px",
        }}
      >
        Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
        короткой ссылке клиентам не придётся видеть длинные url-адреса,
        занимающие много места.
      </p>
      <main>
        <Form setLink={setLink} setShow={setShow} />
        <div className="cut" id={`${isShow && "show"}`}>
          <p
            className="textLink"
            onClick={() => {
              addLink(`${link}`);
            }}
          >
            {link}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;

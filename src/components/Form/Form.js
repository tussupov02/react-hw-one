import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({ setLink, setShow }) {
  const [inputValue, setInputValue] = useState("");

  const result = (url) => {
    fetch(`https://clck.ru/--?url=${url}`)
      .then((res) => res.text())
      .then((res) => {
        setLink(res);
        setShow(true);
        console.log(res);
      });
  };

  const changeLink = () => {
    result(inputValue);
  };

  return (
    <div className="link">
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Button  onClick={changeLink} value={"Сократить"}/>
    </div>
  );
}

import "../../App.css";

export default function Input({ inputValue, setInputValue }) {
  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <input
      placeholder="Введите ссылку, которую нужно сократить"
      value={inputValue}
      onChange={onChange}
    ></input>
  );
}

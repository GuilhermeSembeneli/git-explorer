import React from "react";
import { InputContext } from "../../contexts/InputContext";
import { useHistory } from "react-router-dom";

interface InputProp {
  type: string;
  placeholder?: string;
}

export function Input(props: InputProp) {
  const history = useHistory();
  const [text, setText] = React.useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  
  function handleSubmit(e: any) {
    history.push(`/user/${text}`)
  }

  function handleUp(e: any) {
    if (e.keyCode === 13) {
      history.push(`/user/${text}`)
    }
  }

  return (
    <input
      onChange={handleChange}
      value={text}
      onBlur={handleSubmit}
      onKeyUp={handleUp}
      {...props}
    />
  );
}

import React, { useState } from "react";
import "./App.css";
import InputBox from "components/InputBox";

function App() {

  const [value, setValue] = useState<string>('');

  return (
    <>
      <InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요.' value={value} error={false} setValue={setValue} message='error message' />
    </>
  );
}

export default App;
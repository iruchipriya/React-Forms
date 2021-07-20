import React, { useRef, useState } from 'react';

export default function Input(props) {
  //UseState -> updates on every keystroke
  const [name, setName] = useState('');
  //TRUE AT FIRST , NO => COZ INITIAL STATE IS NOT TRUE
  // const [nameIsValid, setnameIsValid] = useState(true);
  const [nameIsValid, setnameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameChange = event => {
    setName(event.target.value);
    if (name.trim() !== '') {
      setnameIsValid(true);
    }
  };

  const nameBlur = event => {
    setNameTouched(true);
    if (name.trim() === '') {
      setnameIsValid(false);
    }
  };

  const nameIsInvalid = !nameIsValid && nameTouched;
  //we can also use ref instead of UseState, use ref when you want the value check after submit.
  // const nameInputRef = useRef();

  const formSubmission = event => {
    event.preventDefault();

    //AFTER FORM IS SUBMIT, WE TREAT IT AS TOUCHED
    setNameTouched(true);
    //validation
    if (name.trim() === '') {
      setnameIsValid(false);
      return;
    }
    setnameIsValid(true);

    console.log(name);

    //TO KEEP FORM EMPTY AFTER EVERY SUBMIT
    setName('');

    //REF
    // const nameEnteredValue = nameInputRef.current.value;
    // console.log(nameEnteredValue);
    // nameInputRef.current.value = '';
  };

  //WE CAN CHANGE CLASSNAME ON CONDITION
  // const nameInputClasses = nameIsValid ? 'form-control' : 'form-error';
  // then => className = {nameInputClasses}

  return (
    <form onSubmit={formSubmission}>
      <label htmlFor="name"> Your Name </label>
      <input
        // ref={nameInputRef}
        type="text"
        id="name"
        value={name}
        onChange={nameChange}
        onBlur={nameBlur}
      />
      <br /> <br />
      {nameIsInvalid && <p>Name not valid</p>}
      <br /> <br />
      <button className="btn btn-sm btn-success"> Submit</button>
    </form>
  );
}

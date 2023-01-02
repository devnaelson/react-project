import '../style.css';
import React, { useRef, useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";

const MultiselectCheckbox = ({ options, onChange }) => {
  const [data, setData] = React.useState(options);
  const [count, setCount] = useState(0);
  const toggle = index => {
    const newData = [...data];
    console.log(newData)
    newData.splice(index, 1, {
      label: data[index].label,
      checked: !data[index].checked
    });
    setData(newData);
    onChange(newData.filter(x => x.checked));
  };
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={item.label}>
          <label id={item.label}>
            {item.label} | {count}
          </label>
          <input readOnly type="checkbox" checked={item.checked || false} onClick={() => toggle(index)} />
        </React.Fragment>
      ))}
    </>
  );
};

function Greet(pros) {
  const message = `Hello, ${pros.name}!`; // Calculates output
  useEffect(() => {
    console.log(typeof pros.off)
    if (pros.off == true)    // Good!
      document.title = `Greetings to ${pros.name}`; // Side-effect!
  });
  return <div>{message}</div>;       // Calculates output
}

const options = [{ label: 'Item1' }, { label: 'Item2' }, { label: 'Item3' }];
export default function Features() {
  return (
    <React.Fragment>
      <Greet name="naelson" off={false} />
      <MultiselectCheckbox
        options={options}
        onChange={data => {
          // console.log(data);
        }
        }
      />
    </React.Fragment>
  );
}
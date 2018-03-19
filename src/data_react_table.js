import React from "react";
import namor from "namor";
import "./index.css";


const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
    const firstName = namor.generate({ words: 1, numbers: 0 });
    const lastName = namor.generate({ words: 1, numbers: 0 });
  return {
    name: `${lastName}, ${firstName}`,
    email: `${firstName}.${lastName}@gmail.com`,
    phone: Math.floor(Math.random() * 999999999),
  };
}
export function makeData(len = 20) {
      return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;

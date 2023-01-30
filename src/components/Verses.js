import React from "react";
import { words } from "../quotes";
export default function Verses() {
  return <div>{words[Math.floor(Math.random() * words.length)]}</div>;
}

import React from "react";
import { HotKeys } from "react-hotkeys";

const KEY_MAP = {
  DELETE: ["del", "backspace"],
};

function KeyMap({ children }) {
  return <HotKeys keyMap={KEY_MAP}>{children}</HotKeys>;
}

export default KeyMap;

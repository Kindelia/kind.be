import $ from "@master/literal";
import { useState, useMemo } from "react";

export function TextTypingAnimation() {
  const [text, setText] = useState("");
  const [renderCursor, setRenderCursor] = useState(true);
  const [fontSize, setFontSize] = useState(250);

  const textToType = "Be Kind.";

  useMemo(() => {
    if (text.length < textToType.length) {
      setTimeout(() => {
        setText(textToType.substring(0, text.length + 1));
      }, 100);
    } else {
      setTimeout(() => {
        setRenderCursor(false);
      }, 500);
    }
  }, [text]);

  useMemo(() => {
    if (!renderCursor && fontSize > 50) {
      setTimeout(() => {
        setFontSize(fontSize - 1);
      }, 10);
    }
  }, [renderCursor, fontSize]);

  return (
    <div
      className={$`flex flex:1 jc:center f:${fontSize} f:"Fira Code" f:bold`}
    >
      {text}
      {renderCursor && <span className="ml:10px">|</span>}
    </div>
  );
}

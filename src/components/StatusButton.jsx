"use client";
import { useEffect, useState } from "react";

function StatusButton({ status }) {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [small, setSmall] = useState("");

  useEffect(() => {
    switch (status) {
      case "paid":
        setColor("bg-emerald-100");
        setText('text-emerald-700')
        setSmall("bg-emerald-700")
        break;
      case "pending":
        setColor("bg-orange-100");
        setText('text-orange-500')
        setSmall("bg-orange-500")
        break;
      case "draft":
        setColor("bg-neutral-200");
        setText('text-slate-800')
        setSmall("bg-neutral-800")
        break;
      default:
        setColor("");
        setText("")
        setSmall("")
    }
  }, [color, text, small]);
  if (status) {
    return <button className={`capitalize btn ${color} font-bold py-[13px] px-[30px]`}>
      <span className={`w-2 h-2 rounded-full ${small}`}></span>
      <span className={`${text}`}>{status}</span>
      </button>;
  }
}

export default StatusButton;

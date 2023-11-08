"use client";
import {useEffect, useState} from "react";
import booksInfo from "./aozora_books";
import "./omikuji.css";

export default function Omikuji() {
  const [targetBook, setBook] = useState({});
  useEffect(() => {
    const targetIndex = Math.floor(Math.random() * booksInfo.length);
    setBook(booksInfo[targetIndex]);
  }, []);

  return (
    <section>
      <div>　{targetBook["line"]}</div>
      <div className="bookInfo">
        <p
          onClick={() => {
            location.href = targetBook["url"];
          }}
          className="bookUrl"
        >
          『{targetBook["title"]}』
        </p>
        <p>　{targetBook["author"]}</p>
      </div>
    </section>
  );
}

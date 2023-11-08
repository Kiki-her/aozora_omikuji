"use client";
import {useEffect, useState} from "react";
import booksInfo from "./aozora_books";
import "./omikuji.css";
import Image from "next/image";
import twitterLogo from "./twitterIcon.png";

export default function Omikuji() {
  const [targetBook, setBook] = useState({});
  const [reselect, setSelect] = useState(true);

  useEffect(() => {
    const targetIndex = Math.floor(Math.random() * booksInfo.length);
    setBook(booksInfo[targetIndex]);
  }, [reselect]);

  return (
    <>
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
      <div className="buttons">
        <button
          onClick={() => {
            setSelect(!reselect);
          }}
        >
          もう一冊引く
        </button>
        <a
          href={`https://twitter.com/share?hashtags=青空おみくじ&text=${targetBook["line"]}--『${targetBook["title"]}』${targetBook["author"]}`}
          rel="nofollow"
          target="_blank"
        >
          <Image
            src={twitterLogo}
            alt="twitter logo"
            width={30}
            height={30}
            priority
            className="twitterIcon"
          />
        </a>
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import booksInfo from "./aozora_books";
import bookImage from "./bookimage.png";
import Omikuji from "./omikuji";
import {useState} from "react";

export default function Home() {
  const [flag, setFlag] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {flag ? (
        <Omikuji />
      ) : (
        <div>
          <Image
            src={bookImage}
            alt="book image"
            width={280}
            height={398}
            onClick={() => {
              setFlag(true);
            }}
            priority
          />
        </div>
      )}
    </main>
  );
}

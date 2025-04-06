import React from "react";
import { assets } from "../assets/assets";
const Books = () => {
  return (
    <div className="books-section pt-20 px-5">
      <h1 className="text-3xl font-bold mb-5 pb-2">Books by Rajesh Sir</h1>
      <div className="book-item border p-5 rounded-lg shadow-lg max-w-2xl flex items-start">
        <img src={assets.h2w} alt="Book" className="w-32 h-auto mr-6" />
        <div>
          <h2 className="text-2xl font-semibold mb-2">TAX FREE CROREPATI</h2>
          <p className="text-lg mb-4">Author: Rajesh Srivastava Sir</p>

          <div className="about-section">
            <h3 className="text-xl font-semibold mb-2">About the Book</h3>
            <p className="text-md">
              H2W stands for Happiness, Health and Wealth! These are the three
              focus areas of this book and the book is written in this order
              while underlining the importance of attaining wealth. Five of the
              eleven chapters in the book are dedicated to this subject.{" "}
              <br></br>
              <p className="text-md">
                Driven by peer and societal pressure, an intense self awareness,
                and fear, many people do not have the time to develop a goal for
                themselves.
              </p>
              They have many plans for their future and often confuse them for
              the long-term goal. The book emphasizes the point that we need to
              open our eyes to the obvious things that will help us attain our
              goals.
            </p>
            <br></br>
            <p><b>Shopping Links:</b> </p>
            <a
              href="https://www.amazon.in/Would-Like-Become-Free-Crorepati/dp/9386301660"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-4 block"
            >
              Buy on Amazon
            </a>
            <a
              href="https://www.flipkart.com/h2w-would-you-like-become-tax-free-crorepati/p/itmdwmkh4sfdjhyx?pid=9789383175703&lid=LSTBOK9789383175703FZL4F9&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-4 block"
            >
              Buy on Flipkart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

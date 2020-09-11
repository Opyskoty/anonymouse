import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <h1 className="mt-1 pt-4">Anonymouse</h1>
      <div className="about">
        <h3 className="header mt-5 ml-1">About</h3>
        <p>
          Started by three visually impaired mice, Anonymouse is the first
          online forum where mice can come and safely chat with one another
          about close calls they have had with cats. The whole website can be
          used without having to rely on the use of a computer mouse or
          trackpad. All mice are welcome to submit a post and/or offer
          support/advice in the comments section of each post. This app
          currently has zero funding, so it is up to you all to be the
          moderators. Be sure to delete any inappropriate posts or comments, and
          don't forget to watch out for cats!
        </p>
      </div>
      <div className="use">
        <h3 className="header mt-5 ml-1">How to Use Anonymouse</h3>
        <p>
          This entire app is 100% functional without having to use a mouse! If
          you prefer to click, be our guest, but for those that are reliant on a
          keyboard, please use the following shortcuts:</p>
          <ul>
            <li><u>Tab</u> to move down the page between buttons and links</li>
            <li><u>Shift+Tab</u> to move up the page between buttons and links</li>
            <li><u>Enter OR Return</u> to click on all buttons</li>
            <li><u>Delete OR Backspace</u> to remove posts and comments</li>
          </ul>
          <p><small>Note: this app does not utilize a backend, so nothing you write will be saved (:</small></p>
      </div>
      <div className="tech">
        <h3 className="header mt-5 ml-1">Technologies Used</h3>
        <p>This app was built mainly using React and React HotKeys.</p>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCat } from "@fortawesome/free-solid-svg-icons";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Main() {
  return (
    <>
    <Jumbotron>
      <h1>AnonyMouse</h1>
      <p>
        <em>
          Have you or someone you know had a rough or scary encounter with a
          cat? We're here for you.
        </em>
      </p>
      <span className="icon fa-layers fa-10x">
        <FontAwesomeIcon icon={faCat} transform="shrink-8" />
        <FontAwesomeIcon icon={faBan} style={{ color: "red" }} />
      </span>
      <div className="w-50 ml-auto mr-auto mt-5">
        <h5>Tell us what happened:</h5>
        <PostForm />
      </div>
    </Jumbotron>
    <PostList />
    </>
  );
}

export default Main;

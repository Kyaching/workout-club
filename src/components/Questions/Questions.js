import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="question-container">
      <div className="questions">
        <h2>
          <strong>Q.1.</strong> How does react works?
        </h2>
        <p>
          Ans: React is a Javascript library. React mainly focused on the User
          Interface of a website.React doesn’t have many moving parts for us to
          learn about and understand. Reactjs is simple. The advantage to having
          a small API to work with is that you can spend more time familiarizing
          yourself with it, experimenting with it, and so on. The syntax used by
          React components is called JSX (JavaScript XML). The idea is actually
          quite simple. A component renders content by returning some JSX. The
          JSX itself is usually HTML markup, mixed with custom tags for the
          React components. What’s absolutely groundbreaking here is that we
          don’t have to perform little micro-operations to change the content of
          a component.
        </p>
      </div>
      <div className="questions">
        <h2>
          <strong>Q.2.</strong> Difference between props and state?
        </h2>
        <ol>
          <li>Props is immutable. State is mutable.</li>
          <li>
            The child component can access props. The child component cannot
            access in State.
          </li>
          <li>Props are read-only. Where's state changes asynchronous.</li>
          <li>
            Props allow you to pass the data from one component to other
            components as an argument. State holds information about components.
          </li>
          <li>
            Props make components reusable. The state cannot make components
            reusable.
          </li>
        </ol>
      </div>
      <div className="questions">
        <h2>
          <strong>Q.3.</strong> Usage of useEffect?
        </h2>
        <p>
          The purpose of the useEffect hook in React Js is to allow us to
          perform side effects from within the functional component. Now, what
          are the side effects? Side effects are anything that affects something
          outside our function scope.Some examples of side effects are: fetching
          data, directly updating the DOM, and timers. useEffect accepts two
          arguments. The second argument is optional.
        </p>
      </div>
    </div>
  );
};

export default Questions;

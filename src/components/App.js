import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne<Link to="/pagetwo">Navigate to Page 2</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo<button>Clicke me</button>
      <Link to="/">Navigate to Page 1</Link>
    </div>
  );
};
//fdsf
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}></Route>
          <Route path="/pagetwo" exact component={PageTwo}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

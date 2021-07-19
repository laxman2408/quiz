import React from "react";
import "./Login/style1.css";
import Loginpage from "./Login/Loginpage";
import Quiz from "./Quizpage/Quiz";
import { Route, Switch } from "react-router-dom";
import Program from './Quizpage/Program'
import Question2 from './Quizpage/Questionpage/Question2'
import Question3 from './Quizpage/Questionpage/Question3'
import Question4 from './Quizpage/Questionpage/Question4'
function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route path="/Quiz" component={Quiz}>
            <Quiz />
          </Route>
          {/* <Route path="/Html" component={}>
            < Html/>
          </Route> */}
          <Route path="/Question2" component={Program}>
                    {/* <Program/> */}<Question2/>
                 </Route>
                 <Route path="/Question3" component={Program}>
                    {/* <Program/> */}<Question3/>
                 </Route>
                 <Route path="/Question4" component={Program}>
                    {/* <Program/> */}<Question4/>
                 </Route>
                 {/* <Route path="/" component={Question2}>
                    
                 </Route> */}
        </Switch>
        
      </main>
    </div>
  );
}

export default App;

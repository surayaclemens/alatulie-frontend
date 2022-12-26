import './App.scss';
import Welcome from './components/Welcome/Welcome';
import Intro from './components/Intro/Intro';
import SelectLang from './components/SelectLang/SelectLang';
import Quenya from './components/Quenya/Quenya';
import Sindarin from './components/Sindarin/Sindarin';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';




class App extends Component {

  
  render(){
    document.title="Alatúlie | English to Elvish translator"

    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/intro" exact component={Intro} />

            <Route path="/language" exact component={SelectLang} />
            <Route path="/quenya" exact component={Quenya} />
            <Route path="/sindarin" exact component={Sindarin} />

          </Switch> 
        </BrowserRouter>

  
      </div>
    );
  }
}

export default App;

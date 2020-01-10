import React ,{Component} from 'react';
import Dei from './die';


class App extends Component {
  render (){
    return(
      <div className =  'App'>
        <Dei face='five' />
        <Dei face='one' />


      </div>
    );
  }  
}

export default App;

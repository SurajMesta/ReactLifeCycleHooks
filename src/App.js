import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import Main from './components/Main'

class App extends React.Component{
     constructor(props){
       super(props)

       this.onMount=this.onMount.bind(this)
       this.onUnMount=this.onUnMount.bind(this)
     }

     onMount(){
       ReactDOM.render(<Main/>,document.getElementById('renderHere'))
       console.log("Component Mounted at Node (renderHere)")
     }

     onUnMount(){
       ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'))
       console.log("Component Unmounted at Node (renderHere)")
     }

  render(){
    return(
      <div>
          <button class="btn btn-md btn-success" onClick={this.onMount}>Mount</button>
       <button class='btn btn-md btn-warning' onClick={this.onUnMount}>Unmount</button>

     <div id="renderHere"></div>

     
      </div>

     

    )
  }

}

export default App;

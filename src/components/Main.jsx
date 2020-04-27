import React,{Component} from 'react'
import ReactDOM from 'react-dom'


 export default class Main extends Component{
  constructor(props){
      super(props)

      this.state={
          msg:false
      }

      this.updateLikes=this.updateLikes.bind(this)
      this.clearLikes=this.clearLikes.bind(this)
      
  }


  updateLikes(){
      ReactDOM.render(<Main likes={this.props.likes+1}/>,document.getElementById('renderHere'))

  }

  clearLikes(){
      ReactDOM.render(<Main likes={this.props.likes - this.props.likes}/>,document.getElementById('renderHere'))
 
       this.setState({msg:false})
    }

 


  componentWillMount(){
      console.log("Component Will Mounted")
  }


  componentDidMount(){
      console.log("Component Did Mounted")
  }

  componentWillReceiveProps(newprops){
      console.log('component will recieve props')
      console.log(newprops)

      if(newprops.likes >=10){
        this.setState({msg:true})
    }

  }

  shouldComponentUpdate(newprops,newstate){
      console.log("Should component update?")
      console.log(newprops)
      console.log(newstate)
      return true
  }

  componentWillUpdate(newprops,newstate){
      console.log("component will update")
      console.log(newprops)
      console.log(newstate)


    
  }


  componentDidUpdate(prevprops,prevstate){
      console.log("Component did update")
      console.log("prevprops",prevprops)
      console.log("prevstate",prevstate)
      console.log('--------------------------------')
  }

  componentWillUnmount(){
      console.log("Component will unmount")
  }

  



    render(){
        console.log("Render Method called")
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="jumbotron text-center">
                                Welcome to Life Cycle Hooks
                            </h2>

        <h1>{this.state.msg ? 'I am Popular' :'Alas I need Likes' }</h1>
                        <h2>Likes = {this.props.likes}</h2>
                        <button type="button" className="btn btn-md btn-success" onClick={this.updateLikes}>Update</button>
                        <button type="button" className="btn btn-md btn-warning" onClick={this.clearLikes}>Clear</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}





Main.defaultProps={
    likes:0
}
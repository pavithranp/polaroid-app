import React from 'react'
import './edit.css';
import { BrowserRouter as Router,Link, Route,Switch, Redirect} from 'react-router-dom'


//{this.state.date.toLocaleTimeString()}
class Edit extends React.Component {
  constructor(props) {
    super(props);
    //initialise the state
    this.state = { filename: "" };
  }
    render() {
      
      console.log(this.props.location.state.filename)
      return <h1>Edit {this.props.location.state.filename}</h1>
    }
  }
  
  export default Edit;
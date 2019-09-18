import React from 'react'
import './Sizes.css';
import mini from '../assets/mini.svg';
import square from '../assets/square.svg';
import wide from '../assets/wide.svg';
import styled from "styled-components";

class Sizes extends React.Component {
  render() {
    return     <body >
      <h1 className='headline1' >
      
      Choose your size
      
      
      </h1>
      
      
      <div  className="box flex">
        <p>Mini
        <img src={mini}  alt="logo" onClick={() => this.imageClick()} />
        </p>
          
       
        <p>Square
        <img src={square}  alt="logo" onClick={() => this.imageClick()} />
        </p>
        
        <p>Wide
        <img src={wide}  alt="logo" onClick={() => this.imageClick()} />
        </p>
        </div>
       
        
        
        
      
    </body>
    
    
  }
}
document.body.style = 'background: #B4D6D8;';
export default Sizes


import React from 'react';

export default class Application extends React.Component{
  constructor(){
    super();
    this.state={
      word: '',
      score: 0,
      multiplier: 1,
    }
  }

  scoreWord(word, multiplier){
    let score = 0;
    let wordArray = word.split('')
    wordArray.forEach((value)=>{
      switch(value.toUpperCase()){
        case 'A': case 'E': case 'I': case 'L': case 'N':
        case 'O': case 'R': case 'S': case 'T': case 'U':
          score = score + 1;
          break;
        case 'D': case 'G':
          score = score + 2;
          break;
        case 'B': case 'C': case 'M': case 'P':
          score = score + 3;
          break;
        case 'F': case 'H': case 'V': case 'W': case 'Y':
          score = score + 4;
          break;
        case 'K':
          score = score + 5;
          break;
        case 'J': case 'X':
          score = score + 8;
          break;
        case 'Q': case 'Z':
          score = score + 10;
          break;
        default:
          return;
      }
    })
    this.setState({score: score*multiplier})
  }

  handleChange(e){
    this.setState({word: e.target.value})
  }

    render(){
      return(
        <div>
          <input
            value = {this.state.word}
            onChange={(e)=>this.handleChange(e)}
          />
          <input
            value = {this.state.multiplier}
            onChange = {(e)=>this.setState({multiplier: e.target.value})}
          />
          <button onClick={()=>this.scoreWord(this.state.word, this.state.multiplier)}>click me</button>
          <p>{this.state.score}</p>
        </div>
      )
    }

}

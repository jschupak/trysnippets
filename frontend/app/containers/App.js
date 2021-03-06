import React from 'react';
import axios from 'axios';
import Loader from 'react-loader';
import Title from './Title.js';
import Forms from './Form.js';




const App = React.createClass({

  getInitialState: function(){
    return{
      snippets: {snippetArr: [{id:0, snippet:"<div>This is the first snippet of code</div>"}, {id:1, snippet: "<div>This is the second snippet</div>"}] },
      checkedBoxArr: [],
      checkboxes: '',
      displaySnippets: []
    }
  },

  componentDidMount(){

      this.setState({
        checkboxes: document.querySelectorAll('input')
      })


    console.log("this is the checkboxes", this.state.checkboxes);

    console.log(this.state.checkedBoxArr);

  },

  isChecked: function(){
    for(var i = 0; i < this.state.checkboxes.length; i++){
      if(this.state.checkboxes[i].checked === true){
        console.log("isChecked function");
        this.state.checkedBoxArr.push(this.state.checkboxes[i].value);
        console.log("checkboxarr ", this.state.checkedBoxArr);
      }
    }
    for(var i = 0; i < this.state.checkedBoxArr.length; i++){
      console.log("checkedBoxArr[i] ", this.state.checkedBoxArr[i]);
      for(var j = 0; j < this.state.snippets.snippetArr.length; j++){
        console.log("snippets[j] ", this.state.snippets.snippetArr[j]);
        if(this.state.checkedBoxArr[i] == this.state.snippets.snippetArr[j].id){
          this.state.displaySnippets.push(this.state.snippets.snippetArr[j]);
        }
      }
    }
    this.setState({
      displaySnippets: this.state.displaySnippets
    })
    return console.log(this.state.displaySnippets);
  },
  // componentWillMount(){
  //   console.log(this.state.snippets.snippetArr[0]);
  //   var checkboxes = document.querySelectorAll('input');
  //   console.log(checkboxes);
  // },

  render: function() {

    var style = {
      background: "black"
    }

    return (
      <Forms style={style} snippets={this.state.displaySnippets}  isChecked={this.isChecked}/>
    )
  }
});

export default App;















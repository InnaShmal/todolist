import { Component } from "react";
import check from './check.avif';

export default class Planner extends Component {
    state={
        userInput: '',
        list: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
        console.log(e)
    }

    addItem(input) {
        if (input==='') {
            alert ('Please enter the task')
        } else {
        let listArray= this.state.list;
        listArray.push(input);
        this.setState({list: listArray, userInput:''})
        console.log(listArray)
    }
    }

    deleteItem() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onFormSubmit}>
            <div className="box">
                <input type="text"
                placeholder="What's the plan?"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="box">
                <button className="buttonAdd" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
            </div>
            <div>
                <ul>
                {this.state.list.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img className="check" src={check} alt="done" width='15px'/> {item}</li>
                ))}
                </ul>
                <div className="box">
                <button className="buttonDelete" onClick={()=>this.deleteItem()}>Delete</button>
                </div>
            </div>
            </form>
            </div>
        )
    }
}
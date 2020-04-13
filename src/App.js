import React, { Component } from "react";
import axios from "axios";
import Quoteform from "./components/Quoteform";
import "./App.css";

const initialQuote = {
    quote:
        "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: initialQuote,
        };
        this.getQuote=this.getQuote.bind(this)
    }

    getQuote() {
        axios
            .get("https://simpsons-quotes-api.herokuapp.com/quotes")
            .then((res) => res.data)
            .then(data=> {
                this.setState({
                    quote: data[0]
                })
            })
                
    }

    render() {
        return (
            <div>
                <button onClick={this.getQuote}>Click for another quote</button>
                <Quoteform simpson={this.state.quote} />
            </div>
        );
    }
}

export default App;

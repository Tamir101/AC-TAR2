import { Component } from "react";

export default class CCQ1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "white", // צבע ברירת מחדל
        };
    }

    chgColor = (color) => {
        this.setState({ backgroundColor: color });
    };
    
    
    render() {
        return (
            <div style={{ margin: 5, padding: 5,
                border: 'solid black 5px', backgroundColor: this.state.backgroundColor,
                borderRadius: 20,
                }}>
                  <button
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("red")}
                >
                    RED
                </button>
                <button
                    style={{
                        backgroundColor: "blue",
                        color: "white",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("blue")}
                >
                    BLUE
                </button>
                <button
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("green")}
                >
                    GREEN
                </button>
                <button
                    style={{
                        backgroundColor: "pink",
                        color: "black",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("pink")}
                >
                    PINK
                </button>
                <button
                    style={{
                        backgroundColor: "yellow",
                        color: "black",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("yellow")}
                >
                    YELLOW
                </button>
                <button
                    style={{
                        backgroundColor: "orange",
                        color: "white",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("orange")}
                >
                    ORANGE
                </button>
                <button
                    style={{
                        backgroundColor: "grey",
                        color: "white",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("grey")}
                >
                    GREY
                </button>
                <button
                    style={{
                        backgroundColor: "purple",
                        color: "white",
                        margin: "5px",
                    }}
                    onClick={() => this.chgColor("purple")}
                >
                    PURPLE
                </button>
            </div>
        )
    }
}

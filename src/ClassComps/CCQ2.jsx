import { Component } from "react";

export default class CCQ2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            satScore:"",
            message: "",
            res: "",
        };
    }

    showMes = (fieldName) => {
        this.setState({ message: `please enter your ${fieldName}` });
    }

    hideMes = (fieldName, value) => {
        this.setState({ message: "" })
        if (fieldName === "sat score") {
            if (value > 555) {
                this.setState({ res: "You can be admitted to study this year." });
            }
            else{
                this.setState({ res: "You should try to apply again next year." });
            }
        }
    }

    render() {
        return (
            <div style={{
                margin: 5, padding: 5,
                border: 'solid black 5px', 
                borderRadius: 20
            }}>
                <p>{this.state.message}</p>
                name = {" "}
                <input type="text"
                    onFocus={() => this.showMes("name")}
                    onBlur={() => this.hideMes("name")} />
                <br />
                lastName ={" "}
                <input type="text"
                    onFocus={() => this.showMes("last name")}
                    onBlur={() => this.hideMes()} /><br />
                satScore = {" "}
                <input type="number" max="800"
                    onFocus={() => this.showMes("sat score")}
                    onBlur={(event) => this.hideMes("sat score", event.target.value)} /><br />
                <p>{this.state.res}</p>
            </div>
        )
    }
}

import { Component } from "react"

export default class CCQ3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "100%"
        };
    }

    chgWidth50 = () => {
        this.setState({ width: '50%' });
    }

    chgWidth100 = () => {
        this.setState({ width: '100%' });
    }

    render() {

        const cellStyle = {
            border: "1px solid black",
            padding: "8px",
        };

        return (
            <div style={{
                margin: 5, padding: 5,
                borderRadius: 20
            }}>
                <table
                    onClick={this.chgWidth50}
                    onDoubleClick={this.chgWidth100}
                    style={{
                        border: '1px solid black',
                        borderCollapse: 'collapse', 
                        width: this.state.width,
                        borderRadius: 20,
                    }}>
                     <tr>
                            <td style={cellStyle}>Cell 1,1</td>
                            <td style={cellStyle}>Cell 1,2</td>
                            <td style={cellStyle}>Cell 1,3</td>
                        </tr>
                        <tr>
                            <td style={cellStyle}>Cell 2,1</td>
                            <td style={cellStyle}>Cell 2,2</td>
                            <td style={cellStyle}>Cell 2,3</td>
                        </tr>
                </table>

            </div>
        )
    }
}
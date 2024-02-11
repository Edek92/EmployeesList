import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localTerm: ''
        }
    }

    exportToValue = (e) => {
        const currentTerm = e.target.value
        this.setState({ localTerm: currentTerm })
        this.props.onUpdateSearch(currentTerm)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find an employee"
                value={this.state.localTerm}
                onChange={this.exportToValue}
            />
        )
    }
}

export default SearchPanel;
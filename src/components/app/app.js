import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'John D.', salary: 800, increase: true, id: 1 },
                { name: 'Alex M.', salary: 1400, increase: false, id: 2 },
                { name: 'James H.', salary: 1850, increase: false, id: 3 }
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(itemId => id !== itemId.id)
            }
        })
    }

    addItem = (name, salary, id) => {
        this.setState(({ data }) => {
            this.maxId++
            return {
                data: [...data, { name, salary, increase: false, id }]
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={id => { this.deleteItem(id) }} />
                <EmployeesAddForm
                    subData={(name, value, id) => { this.addItem(name, value, id) }}
                    id={this.maxId} />
            </div>
        )
    }
}

export default App
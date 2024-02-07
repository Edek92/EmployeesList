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
                { name: 'John D.', salary: 800, increase: true, rise: true, id: 1 },
                { name: 'Alex M.', salary: 1400, increase: false, rise: false, id: 2 },
                { name: 'James H.', salary: 1850, increase: false, rise: false, id: 3 }
            ],
            term: ''
        }

        this.maxId = 4;
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }

                return item
            })
        }))
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
                data: [...data, { name, salary, increase: false, rise: false, id }]
            }
        })
    }

    employeesCounter = () => {
        return this.state.data.length
    }

    increaseCounter = () => {
        return this.state.data.filter((item) => item.increase === true).length
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    render() {
        const { data, term } = this.state;

        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo
                    employeesCounter={this.employeesCounter}
                    increaseCounter={this.increaseCounter} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm
                    subData={this.addItem}
                    id={this.maxId} />
            </div>
        )
    }
}

export default App
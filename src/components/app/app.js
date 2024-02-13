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
                { name: 'John D.', salary: 800, increase: false, rise: false, id: 1 },
                { name: 'Alex M.', salary: 1400, increase: false, rise: false, id: 2 },
                { name: 'James H.', salary: 1850, increase: false, rise: false, id: 3 },
                { name: 'Martin S.', salary: 950, increase: false, rise: false, id: 4 },
                { name: 'Edvard A.', salary: 2100, increase: false, rise: false, id: 5 }
            ],
            term: '',
            filter: 'all',
        }

        this.maxId = 10000;
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

    dataFilter = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter((item) => { return item.rise })
            case 'salary':
                return items.filter((item) => { return item.salary > 1000 })
            default:
                return items
        }
    }

    onFilterData = (item) => {
        this.setState({ filter: item })
    }

    onChangeSalary = (id, salary) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: salary }
                }

                return item
            })
        }))
    }

    render() {
        const { data, term, filter } = this.state;

        const visibleData = this.dataFilter(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employeesCounter={this.employeesCounter}
                    increaseCounter={this.increaseCounter} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterData={this.onFilterData} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}
                    test={this.test} />
                <EmployeesAddForm
                    subData={this.addItem}
                    id={this.maxId} />
            </div>
        )
    }
}

export default App
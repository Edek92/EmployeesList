import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            salary: this.props.salary,
        }
    }

    onChangeFunction = (e) => {
        this.setState(() => ({
            salary: +(e.target.value.replace(/[^\d]/g, ''))
        }))

        this.props.onChangeSalary(this.props.id, +(e.target.value.replace(/[^\d]/g, '')))
    }

    render() {
        const { name, onDelete, onToggleProp, increase, rise } = this.props;
        const enc = increase ? " increase" : "";
        const isLike = rise ? " like" : "";

        return (
            <li className={"list-group-item d-flex justify-content-between" + isLike + enc} >
                <span className={"list-group-item-label"}
                    data-toggle='rise'
                    onClick={onToggleProp}>{name}</span>
                <input
                    type="text"
                    className="list-group-item-input"
                    value={this.state.salary + '$'}
                    onChange={this.onChangeFunction} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        data-toggle='increase'
                        onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li >
        );
    }
}

export default EmployeesListItem
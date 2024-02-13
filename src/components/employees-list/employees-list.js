import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary, test }) => {

    const elements = data.map(elem => {
        const { id, ...itemProps } = elem;

        return <EmployeesListItem
            key={id}
            id={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onChangeSalary={onChangeSalary} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
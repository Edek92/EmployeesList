import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({ data }) => {

    const elements = data.map(elem => {
        const { id, ...itemProps } = elem;

        return <EmployeesListItem key={id} {...itemProps} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
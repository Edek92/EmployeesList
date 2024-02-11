import './app-filter.css'

const buttons = [
    { name: 'all', label: 'All employees' },
    { name: 'rise', label: 'For a promotion' },
    { name: 'salary', label: 'Salary more than $1000' }
]

const AppFilter = (props) => {

    const visibleButtons = buttons.map(({ name, label }) => {
        return (
            <button
                type='button'
                className={props.filter === name ? 'btn btn-light' : 'btn btn-outline-light'}
                onClick={() => { props.onFilterData(name) }}
                key={name}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {visibleButtons}
        </div>
    )
}

export default AppFilter
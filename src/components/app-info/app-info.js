import "./app-info.css";

const AppInfo = ({ employeesCounter, increaseCounter }) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in company "Geo-Experts"</h1>
            <h2 className="subtitle">Total number of employees: {employeesCounter()}</h2>
            <h2 className="subtitle">Bonus will be received by: {increaseCounter()}</h2>
        </div>
    )
}

export default AppInfo
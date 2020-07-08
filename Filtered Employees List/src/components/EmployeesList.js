import React from "react";

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      search: [],
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      search: this.props.employees,
    });
  }
  componentDidUpdate() {
    console.log("updated:", this.state);
  }

  render() {
    //handle input change
    const handleChange = (e) => {
      const results = this.props.employees.filter((employee) =>
        employee.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({
        ...this.state,
        input: e.target.value,
        search: results,
      });
    };
    return (
      <React.Fragment>
        <div className="controls">
          <input
            type="text"
            className="filter-input"
            data-testid="filter-input"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <ul className="employees-list">
          {this.state.search.map((employee) => (
            <li key={employee.name} data-testid="employee">
              {employee.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;

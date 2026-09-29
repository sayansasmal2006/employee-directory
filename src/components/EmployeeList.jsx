import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <section className="employee-section">
        <h2>Employee List</h2>
        <p className="no-data">No employees found.</p>
      </section>
    );
  }

  return (
    <section className="employee-section">
      <h2>Employee List</h2>

      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.employeeId}
            employee={employee}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default EmployeeList;
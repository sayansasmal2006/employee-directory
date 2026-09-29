function Header({ employeeCount }) {
  return (
    <header className="header">
      <h1>Employee Directory</h1>
      <p>Farm Employee Management System</p>

      <div className="employee-count">
        Total Employees: <strong>{employeeCount}</strong>
      </div>
    </header>
  );
}

export default Header;
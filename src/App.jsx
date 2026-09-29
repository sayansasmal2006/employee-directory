import { useState } from "react";

import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";

import "./App.css";

const initialForm = {
  name: "",
  employeeId: "",
  department: "",
  gender: "",
  phone: "",
  localAddress: "",
  permanentAddress: "",
};

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Rahul Das",
      employeeId: "EMP001",
      department: "Agriculture",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Kolkata",
      permanentAddress: "Kolkata",
    },
    {
      name: "Priya Sen",
      employeeId: "EMP002",
      department: "Accounts",
      gender: "Female",
      phone: "9876543211",
      localAddress: "Howrah",
      permanentAddress: "Howrah",
    },
  ]);

  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setEmployees(
        employees.map((employee) =>
          employee.employeeId === editingId
            ? { ...formData }
            : employee
        )
      );

      setEditingId(null);
    } else {
      setEmployees([
        ...employees,
        { ...formData },
      ]);
    }

    setFormData(initialForm);
  };

  const handleEdit = (employee) => {
    setFormData(employee);
    setEditingId(employee.employeeId);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (employeeId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmed) {
      setEmployees(
        employees.filter(
          (employee) => employee.employeeId !== employeeId
        )
      );
    }
  };

  const handleCancel = () => {
    setFormData(initialForm);
    setEditingId(null);
  };

  const departments = [
    "All",
    ...new Set(
      employees.map((employee) => employee.department)
    ),
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.employeeId
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All" ||
      employee.department === departmentFilter;

    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Header employeeCount={employees.length} />

      <main>
        <EmployeeForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editingId={editingId}
          onCancel={handleCancel}
        />

        <section className="filter-section">
          <input
            type="text"
            placeholder="Search by name or employee ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={departmentFilter}
            onChange={(e) =>
              setDepartmentFilter(e.target.value)
            }
          >
            {departments.map((department) => (
              <option
                key={department}
                value={department}
              >
                {department}
              </option>
            ))}
          </select>
        </section>

        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
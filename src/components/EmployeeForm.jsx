function EmployeeForm({
  formData,
  setFormData,
  onSubmit,
  editingId,
  onCancel,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="form-section">
      <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department Name"
          value={formData.department}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="localAddress"
          placeholder="Local Address"
          value={formData.localAddress}
          onChange={handleChange}
          required
        />

        <textarea
          name="permanentAddress"
          placeholder="Permanent Address"
          value={formData.permanentAddress}
          onChange={handleChange}
          required
        />

        <div className="form-buttons">
          <button type="submit">
            {editingId ? "Update Employee" : "Add Employee"}
          </button>

          {editingId && (
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;
import React from "react";

function Dashboard() {
  // Mock data for display
  const companies = [
    { name: "Company A", lastFive: ["Email", "Phone Call"], next: "LinkedIn Post - 2nd Jan", overdue: false },
    { name: "Company B", lastFive: ["LinkedIn Post", "Email"], next: "Phone Call - 3rd Jan", overdue: true },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} style={{ backgroundColor: company.overdue ? "red" : "white" }}>
              <td>{company.name}</td>
              <td>{company.lastFive.join(", ")}</td>
              <td>{company.next}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

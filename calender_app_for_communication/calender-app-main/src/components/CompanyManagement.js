import React, { useState } from "react";

function CompanyManagement() {
    const [companies, setCompanies] = useState([]);
    const [companyData, setCompanyData] = useState({
        name: "",
        location: "",
        linkedin: "",
        emails: "",
        phoneNumbers: "",
        comments: "",
        periodicity: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompanyData({ ...companyData, [name]: value });
    };

    const addCompany = () => {
        setCompanies([...companies, companyData]);
        setCompanyData({
            name: "",
            location: "",
            linkedin: "",
            emails: "",
            phoneNumbers: "",
            comments: "",
            periodicity: "",
        });
    };

    return (
        <div>
            <h2>Company Management</h2>
            <input
                type="text"
                name="name"
                placeholder="Company Name"
                value={companyData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={companyData.location}
                onChange={handleChange}
            />
            <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile"
                value={companyData.linkedin}
                onChange={handleChange}
            />
            <input
                type="text"
                name="emails"
                placeholder="Emails (comma-separated)"
                value={companyData.emails}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phoneNumbers"
                placeholder="Phone Numbers (comma-separated)"
                value={companyData.phoneNumbers}
                onChange={handleChange}
            />
            <input
                type="text"
                name="comments"
                placeholder="Comments"
                value={companyData.comments}
                onChange={handleChange}
            />
            <input
                type="text"
                name="periodicity"
                placeholder="Communication Periodicity (e.g., 2 weeks)"
                value={companyData.periodicity}
                onChange={handleChange}
            />
            <button onClick={addCompany}>Add Company</button>
            <ul>
                {companies.map((company, index) => (
                    <li key={index}>
                        {company.name} - {company.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CompanyManagement;

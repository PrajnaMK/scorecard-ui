import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ScorecardPage.css'; // Ensure your CSS file is in the correct location

const ScorecardPage = () => {
  const [scorecards, setScorecards] = useState([]);
  const [formData, setFormData] = useState({
    recruiterName: '',
    performanceScale: '',
    expectedInterviews: '',
    achievedInterviews: '',
    totalSubmissions: '',
  });

  // Replace with actual API call
  useEffect(() => {
    fetch('http://localhost:8080/scorecards')
      .then(res => res.json())
      .then(data => setScorecards(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/scorecards/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newCard => {
        setScorecards([...scorecards, newCard]);
        setFormData({
          recruiterName: '',
          performanceScale: '',
          expectedInterviews: '',
          achievedInterviews: '',
          totalSubmissions: '',
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="animated-bg"></div>

      <div className="container mt-5 text-white">
        <h2>Scorecards</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Recruiter Name</th>
              <th>Performance Scale</th>
              <th>Expected Interviews</th>
              <th>Achieved Interviews</th>
              <th>Total Submissions</th>
            </tr>
          </thead>
          <tbody>
            {scorecards.map((scorecard) => (
              <tr key={scorecard.id}>
                <td>{scorecard.id}</td>
                <td>{scorecard.recruiterName}</td>
                <td>{scorecard.performanceScale}</td>
                <td>{scorecard.expectedInterviews}</td>
                <td>{scorecard.achievedInterviews}</td>
                <td>{scorecard.totalSubmissions}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="mt-4 text-white">Add New Scorecard</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="recruiterName"
              className="form-control"
              placeholder="Recruiter Name"
              value={formData.recruiterName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="performanceScale"
              className="form-control"
              placeholder="Performance Scale"
              value={formData.performanceScale}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="number"
              name="expectedInterviews"
              className="form-control"
              placeholder="Expected Interviews"
              value={formData.expectedInterviews}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="number"
              name="achievedInterviews"
              className="form-control"
              placeholder="Achieved Interviews"
              value={formData.achievedInterviews}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="number"
              name="totalSubmissions"
              className="form-control"
              placeholder="Total Submissions"
              value={formData.totalSubmissions}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger">Add Scorecard</button>
        </form>

        <div className="mt-3">
          <a href="/" className="btn btn-secondary">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default ScorecardPage;

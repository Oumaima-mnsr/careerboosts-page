import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDropzone } from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import "./ProjectForm.css";

const ProjectForm = ({ onNextStep }) => {
  const [projectName, setProjectName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [totalEmployees, setTotalEmployees] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setCompanyLogo(acceptedFiles[0]);
    },
    accept: "image/*",
    multiple: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
  };

  const handleBack = () => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Add Project Details</h2>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label>Project Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="date-picker-input"
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label>Project End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="date-picker-input"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label>Company Logo</label>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p className="file-upload-text">
                    {companyLogo ? companyLogo.name : "No file chosen"}
                  </p>
                  <button type="button" className="upload-button">
                    <FileUploadOutlinedIcon className="upload-icon" />
                    Upload File
                  </button>
                </div>
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label>Total number of employees</label>
                <input
                  type="text"
                  value={totalEmployees}
                  onChange={(e) => setTotalEmployees(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group project-description">
            <label>Project Description</label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Feel free to add the project objectives, key drivers, as well as the main beneficiaries"
            />
          </div>
          <div className="button-container">
            <button type="button" className="button-back" onClick={handleBack}>
              Back
            </button>
            <button type="submit" className="button-next">
              Next
            </button>
          </div>
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default ProjectForm;

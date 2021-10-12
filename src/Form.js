import "./App.css";
import React, { useState } from "react";
import CustomCheckBox from "./CustomCheckBox";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quality, setQuality] = useState("excellent");
  const [qualityBev, setQualityBev] = useState("excellent");
  const [clean, setClean] = useState("excellent");
  const [overAll, setOverAll] = useState("excellent");
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "quality":
        setQuality(value);
        break;
      case "beverage":
        setQualityBev(value);
        break;
      case "experience":
        setOverAll(value);
        break;
      case "clean":
        setClean(value);
        break;
      default:
        break;
    }
  }
  function handleSubmit() {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setSnackBarVisible(true);
      setSnackBarText("Please Fill in All fields");
      setSnackBarType("warning");
      return;
    }
    if (name.length < 2) {
      setSnackBarVisible(true);
      setSnackBarText("Please enter your full name");
      setSnackBarType("warning");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSnackBarVisible(true);
      setSnackBarText("Please enter a proper Email");
      setSnackBarType("warning");
      return;
    }
    if (!/^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(phone.replace(/\D/g, ""))) {
      setSnackBarVisible(true);
      setSnackBarText("Please enter a proper Phone Number");
      setSnackBarType("warning");
      return;
    }
    setName("");
    setEmail("");
    setPhone("");
    try {
      if (localStorage.getItem("form-data")) {
        localStorage.setItem(
          "form-data",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("form-data")),
            {
              name,
              email,
              phone,
              quality,
              qualityBev,
              clean,
              overAll,
            },
          ])
        );
        setSnackBarVisible(true);
        setSnackBarText("Form Submitted Successfully");
        setSnackBarType("success");
        return;
      } else {
        localStorage.setItem(
          "form-data",
          JSON.stringify([
            {
              name,
              email,
              phone,
              quality,
              qualityBev,
              clean,
              overAll,
            },
          ])
        );
      }
    } catch {
      setSnackBarVisible(true);
      setSnackBarText("Something went wrong please try again");
      setSnackBarType("error");
    }
  }
  return (
    <div className="form-container">
      <h1>Aromatic Bar</h1>
      <p>
        We are commited to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you
      </p>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onInput={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onInput={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="name"
          value={phone}
          onInput={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>

      <div className="checkbox-group">
        <label>Please rate the Quality of Service</label>
        <CustomCheckBox name="quality" handleChange={handleChange} />
      </div>

      <div className="checkbox-group">
        <label>Please rate the Quality of Beverage</label>
        <CustomCheckBox name="beverage" handleChange={handleChange} />
      </div>

      <div className="checkbox-group">
        <label>Was our Restraunt Clean</label>
        <CustomCheckBox name="clean" handleChange={handleChange} />
      </div>

      <div className="checkbox-group">
        <label>Please rate the overall dining experience</label>
        <CustomCheckBox name="experience" handleChange={handleChange} />
      </div>

      <button className="submitButton" type="button" onClick={handleSubmit}>
        Submit Form
      </button>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarVisible}
        autoHideDuration={3000}
        onClose={() => {
          setSnackBarVisible(false);
        }}
      >
        <Alert
          onClose={() => {
            setSnackBarVisible(false);
          }}
          severity={snackBarType}
        >
          {snackBarText}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Form;

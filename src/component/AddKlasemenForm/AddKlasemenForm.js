import React, { useState } from "react";
import "./AddKlasemenForm.css";

const AddKlasemenForm = ({ onAddKlasemen }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    abbr: "",
    logos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddKlasemen(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img
            src="https://img.freepik.com/premium-vector/ball-with-three-spotting-stripe-football-league-logo_8296-13.jpg"
            alt="img-form"
            className="form-image"
          />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Leagues</h1>
          <form action="">
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                id="slug"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="" className="form-label">
                Abbr
              </label>
              <input
                type="text"
                name="abbr"
                id="abbr"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlfor="" className="form-label">
                Logo
              </label>
              <input
                type="text"
                name="logos"
                id="logos"
                className="form-input"
                onChange={handleChange}
              />
            </div>
              <button className="form-button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddKlasemenForm;

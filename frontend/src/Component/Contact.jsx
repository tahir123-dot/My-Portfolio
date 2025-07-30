import React, { useState } from "react";
import "./Contact.css";
import Email from "../assets/Email.png";
import Phone from "../assets/Phone.png";
import Address from "../assets/Location.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/sendemail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="h2">Contact Us</h2>
        <div className="info-item">
          <span>
            <img src={Email} alt="email" />
          </span>
          <div>
            <strong className="strong">Email</strong>
            <p className="p">
              <a
                href="mailto:tahirrashid735833@gmail.com"
                style={{ color: "black", cursor: "pointer" }}
              >
                tahirrashid735833@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="info-item">
          <span>
            <img src={Phone} alt="Phone" />
          </span>
          <div>
            <strong className="strong">Phone</strong>
            <p className="p">+923415150339</p>
          </div>
        </div>
        <div className="info-item">
          <span>
            <img src={Address} alt="Address" />
          </span>
          <div>
            <strong className="strong">Address</strong>
            <p className="p">Pakistan, Islamabad</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Contact;

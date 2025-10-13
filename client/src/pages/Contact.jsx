import React, { useState, useEffect } from "react";
import { 
  container, button, 
  contactSection, contactHeader, contactTitle, contactSubtitle,
  contactCard, contactIconStyle, contactInfoText,
  faqSection, faqTitle, faqItem, faqButton, faqAnswer,
  contactForm, formLabel, formInput
} from "../styles/ui.config";
import contactIcon from "../assets/contact.png";

const faqData = [
  { question: "What is your return policy?", answer: "You can return any product within 30 days of delivery for a full refund." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide. Shipping fees may vary depending on location." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you’ll receive a tracking number via email." },
  { question: "Can I change my order after placing it?", answer: "You can modify your order within 2 hours of placing it by contacting support." },
  { question: "How do I contact customer support?", answer: "You can reach out us via email at support@shopease.com or call +1 234 567 890." },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeFaq, setActiveFaq] = useState(null);

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("contactFormSubmissions");
    if (!savedData) return;
    console.log("Previous submissions:", JSON.parse(savedData));
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing submissions from localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem("contactFormSubmissions")) || [];

    // Add new submission
    const updatedSubmissions = [...existingSubmissions, formData];

    // Save back to localStorage
    localStorage.setItem("contactFormSubmissions", JSON.stringify(updatedSubmissions));

    alert("Message sent successfully!");
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <section className={contactSection}>
      <div className={container}>
        {/* Header */}
        <div className={contactHeader}>
          <h2 className={contactTitle}>Get in Touch</h2>
          <p className={contactSubtitle}>
            Have questions or feedback? We’d love to hear from you.
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info + FAQ */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className={contactCard}>
              <img src={contactIcon} alt="Contact" className={contactIconStyle} />
              <div className={contactInfoText}>
                <p><span className="font-semibold">Email:</span> support@shopease.com</p>
                <p><span className="font-semibold">Phone:</span> +1 234 567 890</p>
                <p><span className="font-semibold">Address:</span> 123 Main Street, City, Country</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className={faqSection}>
              <h3 className={faqTitle}>Frequently Asked Questions</h3>
              <div className="space-y-2">
                {faqData.map((item, index) => (
                  <div key={index} className={faqItem}>
                    <button className={faqButton} onClick={() => toggleFaq(index)}>
                      <span className="font-medium">{item.question}</span>
                      <span>{activeFaq === index ? "-" : "+"}</span>
                    </button>
                    {activeFaq === index && (
                      <div className={faqAnswer}>{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={contactForm}>
            <div>
              <label className={formLabel}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formInput}
                required
              />
            </div>

            <div>
              <label className={formLabel}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formInput}
                required
              />
            </div>

            <div>
              <label className={formLabel}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={formInput}
                required
              ></textarea>
            </div>

            <button type="submit" className={button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

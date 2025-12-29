import React, { useState, useEffect } from "react";
import { Section, Container, SectionHeader, Input, Button } from "../shared/components";
import { useForm, useLocalStorage } from "../shared/hooks";
import contactIcon from "../assets/contact.png";

const faqData = [
  { question: "What is your return policy?", answer: "You can return any product within 30 days of delivery for a full refund." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide. Shipping fees may vary depending on location." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you'll receive a tracking number via email." },
  { question: "Can I change my order after placing it?", answer: "You can modify your order within 2 hours of placing it by contacting support." },
  { question: "How do I contact customer support?", answer: "You can reach out us via email at support@shopease.com or call +1 234 567 890." },
];

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [submissions, setSubmissions] = useLocalStorage("contactFormSubmissions", []);

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    validateForm,
    resetForm
  } = useForm(
    { name: "", email: "", message: "" },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      message: { required: true, minLength: 10 }
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setSubmissions(prev => [...prev, { ...values, timestamp: new Date().toISOString() }]);
    alert("Message sent successfully!");
    resetForm();
  };

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    <Section>
      <Container>
        <SectionHeader 
          title="Get in Touch"
          description="Have questions or feedback? We'd love to hear from you."
        />

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info + FAQ */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <img src={contactIcon} alt="Contact" className="w-12 h-12 mt-1" />
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Email:</span> support@shopease.com</p>
                <p><span className="font-semibold">Phone:</span> +1 234 567 890</p>
                <p><span className="font-semibold">Address:</span> 123 Main Street, City, Country</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {faqData.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                    <button 
                      className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      <span className="text-gray-600 font-bold text-lg">
                        {activeFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    {activeFaq === index && (
                      <div className="px-4 py-3 text-gray-700 bg-white border-t border-gray-200">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <Input
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              required
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              required
            />

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-gray-700 transition-colors duration-200 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell us how we can help you..."
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactForm({ onSuccess }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const mobile = form.current.user_phone.value;
    const email = form.current.user_email.value.trim();

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      // Email to you
      await emailjs.sendForm(
        "service_nd2inbz",
        "template_xzo4xm9",
        form.current,
        "fzxAXqEl_aHNbOpON"
      );

      // Auto-reply to customer
      if (email) {
        await emailjs.sendForm(
          "service_nd2inbz",
          "template_n12txll",
          form.current,
          "fzxAXqEl_aHNbOpON"
        );
      }

      toast.success("Message sent successfully!");

      form.current.reset();

      // Close modal automatically
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="p-2">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            name="user_phone"
            className="form-control"
            placeholder="Mobile Number"
            maxLength="10"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Tell us about your electrical requirement..."
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
import React, { useState } from "react";
import "./Contact.css";
import LoadingSpinner from "./LoadingSpinner";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface IFormState {
  name: string;
  email: string;
  message: string;
  sent: boolean;
}

const Contact = () => {
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    email: "",
    message: "",
    sent: false,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormState>();

  const sendEmail = (formData: IFormState) => {
    setLoading(true);
    emailjs
      .send(
        "service_kb2dfbd",
        "template_snj2mpa",
        formData,
        "mzUprdGBxm-9YeHhh"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          setFormState({ ...formState, sent: true });
          setLoading(false);
        },
        (error: any) => {
          console.log(error.text);
          setError(true);
          setLoading(false);
          setFormState({ ...formState, sent: false });
        }
      );
  };

  const { sent } = formState;

  if (sent) {
    return (
      <div className="contact">
        Your message has been sent, thank you for contacting me!
      </div>
    );
  }

  return (
    <div className="contact">
      {error && !loading && (
        <div className="error-text">
          There has been an error with sending your form, please try sending to{" "}
          <a className="mail-to" href="mailto:lawriewilliams@gmail.com">
            lawriewilliams@gmail.com
          </a>
        </div>
      )}
      {!error && !loading && (
        <form
          className={`${error ? "error" : ""} contact-form`}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="form-header">Contact Me</div>

          <div className="name-email">
            <div className="form-name">
              <input
                className={`name-email-input ${errors.name && "input-error"}`}
                type="text"
                placeholder="Name"
                {...register("name", { required: "Please enter your name" })}
              />
              {errors.name && (
                <p className="error error-name">{errors.name.message}</p>
              )}
            </div>
            <div className="form-email">
              <input
                className={`name-email-input ${errors.email && "input-error"}`}
                type="text"
                placeholder="Email address"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                  required: "Please enter your email address",
                })}
              />
              {errors.email && (
                <p className="error-email error">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="message">
            <textarea
              className={`message-area ${errors.message && "input-error"}`}
              placeholder="Your message here"
              {...register("message", {
                required: "Please enter your message",
              })}
              onChange={(e) => {
                setFormState({ ...formState, message: e.target.value });
              }}
            />
            {errors.message && (
              <p className="error error-message">{errors.message.message}</p>
            )}
          </div>
          <button className="send" type="submit">
            Send
          </button>
        </form>
      )}
      {!loading && (
        <div className="error-text">
          Or send an email from your client to{" "}
          <a
            className="mail-to"
            href={`mailto:lawriewilliams@gmail.com?body=${formState.message}`}
          >
            lawriewilliams@gmail.com
          </a>
        </div>
      )}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default Contact;

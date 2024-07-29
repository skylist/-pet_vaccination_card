import React, { FormEvent, useRef } from "react";
import "./styles.css";
import { useRegisterUser } from "../../services/user";
import { Link, useNavigate } from "react-router-dom";
import { AppNotification } from "../../components/notification";

export const RegisterPage: React.FC = () => {
  const form = useRef(null);

  const navigate = useNavigate();
  const navigateToHome = () => navigate("/home");

  const registerUser = useRegisterUser(navigateToHome, AppNotification.Error);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);

      const email = String(formData.get("email"));
      const password = String(formData.get("password"));
      const repassword = String(formData.get("re-password"));
      const name = String(formData.get("name"));

      if (!email || !password || !!repassword || !name) {
        return;
      }

      if (repassword !== repassword) {
        return;
      }

      registerUser.mutate({ email, password });
    }
  }

  return (
    <main className="main">
      <form onSubmit={handleFormSubmit} className="register__form" ref={form}>
        <fieldset className="register__form__content">
          <legend>Register</legend>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <label htmlFor="password">Retry password</label>
          <input type="password" name="re-password" id="re-password" />

          <button type="submit">Register</button>
        </fieldset>
      </form>

      <Link to="/">Login now!</Link>
    </main>
  );
};

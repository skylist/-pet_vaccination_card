import React, { FormEvent, useEffect, useRef } from "react";
import "./styles.css";
import { useLoginUser } from "../../services/user";
import { Link, useNavigate } from "react-router-dom";
import { AppNotification } from "../../components/notification";
import { useUserContext } from "../../providers";

export const LoginPage: React.FC = () => {
  const userContext = useUserContext();
  const form = useRef(null);
  const navigate = useNavigate();
  const loginUser = useLoginUser(
    AppNotification.Error,
    AppNotification.Success,
  );

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      const email = String(formData.get("email"));
      const password = String(formData.get("password"));

      if (!email || !password) {
        return;
      }

      loginUser.mutate({ email, password });
    }
  }

  useEffect(() => {
    if (loginUser.data) {
      userContext.setUser(loginUser.data);
      navigate("/home");
    }
  }, [loginUser.data, navigate, userContext]);

  return (
    <>
      <main className="main">
        <div className="banner" />

        <h2>Bem vindo de volta</h2>
        <h3>faça seu login</h3>
        <form onSubmit={handleFormSubmit} className="login__form" ref={form}>
          <div className="login__form__content">
            <label htmlFor="email" className="readonly">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="email"
            />

            <label htmlFor="password" className="readonly">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="login__footer">
          <span className="aux_text">Ainda não tem uma conta?</span>
          <Link to="/register">Cadastre-se!</Link>
        </div>
      </main>
    </>
  );
};

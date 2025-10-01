"use client";
import style from "./login.module.css";
import { Mail, KeyRound } from "lucide-react";
import Link from "next/link";
import { GoogleIcon } from "@/components/googleIcon";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogleLogin = () => {
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    window.location.href = `${backendUrl}/auth/google`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      alert("Login realizado com sucesso!");
      // Preciso mandar isso para um redux ou urso, preciso decidir ainda
      console.log(response.data.user);
    } catch (error: object | any) {
      console.log("Erro ao logar:", error);
      if (error.status === 401) {
        alert("Senha ou email incorretos. Tente outros.");
        return;
      } else if (error.status === 500) {
        alert(
          "Provavelmente o servidor está offline, tente novamente mais tarde ou ligue o servidor..."
        );
        return;
      }
      alert("Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <div className={style.body}>
      <div className="login-container">
        <div className="header-login flex justify-center align-center flex-column">
          <div className="tag green text-xs">Iniciar sessão</div>
          <h1>Bem-vindo de volta!</h1>
          <p className="text-gray-5">
            Insira suas credenciais para acessar sua conta.
          </p>
        </div>
        <form
          action="login"
          className="login-form pt-16 flex-container gap-8"
          onSubmit={handleSubmit}
        >
          <label htmlFor="">Email</label>
          <div className="input-icon w-full">
            <div className="icon-container">
              <Mail color="white" size={16} />
            </div>
            <input
              className="input-ghost xl-input"
              type="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="">Senha</label>
          <div className="input-icon w-full">
            <div className="icon-container">
              <KeyRound color="white" size={16} />
            </div>
            <input
              className="input-ghost xl-input"
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="passwordReset flex-container align-end text-sm">
            <Link href="#">Esqueceu a senha?</Link>
          </div>
          <div className="button-container-login flex-container align-center flex-column">
            <button className="base-button w-full" type="submit">
              Entrar
            </button>
            <span className="pt-8 pb-8">Ou</span>
            <button
              className="flex flex-row gap-8 w-full justify-center align-center"
              onClick={handleGoogleLogin}
              type="button"
            >
              <GoogleIcon size={18} />
              Continuar com o <span className="bold">Google</span>
            </button>
          </div>
          <div className="registerLink pt-8 flex-container flex-row align-center justify-center">
            <p className="text-sm text-gray-5">
              Não tem uma conta? <Link href="/cadastro">Crie uma.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

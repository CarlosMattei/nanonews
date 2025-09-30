"use client";
import styles from "./cadastro.module.css";
import { Mail, KeyRound } from "lucide-react";
import Link from "next/link";
import { GoogleIcon } from "@/components/googleIcon";
import { useState } from "react";
import axios from "axios";

export default function CadastrarPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGoogleLogin = () => {
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    window.location.href = `${backendUrl}/auth/google`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post("/api/auth", {
        name,
        email,
        password,
        confirmPassword,
      });

      alert("Cadastro realizado com sucesso!");
      // Preciso mandar isso para um redux ou urso, preciso decidir ainda
      console.log(response.data.response);
    } catch (error: object | any) {
      console.log("Erro ao cadastrar:", error);
      if (error.status === 409) {
        alert("Email já cadastrado. Tente outro.");
        return;
      } else if (error.status === 500) {
        alert(
          "Provavelmente o servidor está offline, tente novamente mais tarde ou ligue o servidor..."
        );
        return;
      }
      alert("Erro ao realizar cadastro. Tente novamente.");
    }
  };

  return (
    <div className={styles.body}>
      <div className="cadastrar-container">
        <div className="header-cadastrar flex justify-center align-center flex-column">
          <div className="tag green text-xs">Iniciar sessão</div>
          <h1>Crie sua conta!</h1>
          <p className="text-gray-5">
            Insira os dados para criar usa conta na NanoNews
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="cadastrar-form pt-16 flex-container gap-8"
        >
          <label htmlFor="">Nome de usuário</label>
          <div className="input-icon w-full">
            <div className="icon-container">
              <Mail color="white" size={16} />
            </div>
            <input
              className="input-ghost xl-input"
              type="text"
              placeholder="Nome de usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <label htmlFor="">Email</label>
          <div className="input-icon w-full">
            <div className="icon-container">
              <Mail color="white" size={16} />
            </div>
            <input
              className="input-ghost xl-input"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <label htmlFor="">Repetir senha</label>
          <div className="input-icon w-full">
            <div className="icon-container">
              <KeyRound color="white" size={16} />
            </div>
            <input
              className="input-ghost xl-input"
              type="password"
              placeholder="Repita a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="passwordReset flex-container align-end text-sm">
            <Link href="#">Esqueceu a senha?</Link>
          </div>
          <div className="button-container-cadastrar flex-container align-center flex-column">
            <button type="submit" className="base-button w-full">
              Criar conta
            </button>
            <span className="pt-8 pb-8">Ou</span>
            <button
              className="flex flex-row gap-8 w-full justify-center align-center"
              type="button"
              onClick={() => handleGoogleLogin()}
            >
              <GoogleIcon size={18} />
              Continuar com o <span className="bold">Google</span>
            </button>
          </div>
          <div className="registerLink pt-8 flex-container flex-row align-center justify-center">
            <p className="text-sm text-gray-5">
              Já tem uma conta? <Link href="#">Entre.</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

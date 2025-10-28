"use client";

import Image from "next/image";
import { Search, Menu, ArrowRightFromLine } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Acessando o estado do usuário e pega todas as informações dele do zustand
  const user = useUserStore((state) => state.user);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      console.log(user);
    } else {
      setIsLoggedIn(false);
      console.log(user);
    }
  }, [user]);

  return (
    <nav className="navbar">
      <div className="navbar-container bg-gray-100 p-8 rounded-lg flex-container">
        <div className="container-top flex flex-container flex-row align-center p-4 gap-8">
          <div className="logo">
            <Image
              src="/Logo.svg"
              alt="Logotipo NanoNews"
              width={90}
              height={40}
            />
          </div>
          <div className="search-bar-container flex-container">
            <div className="searchbar">
              <div className="icon-navbar">
                <Search color="white" size={18} />
              </div>
              <input type="text" placeholder="Buscar" />
            </div>
          </div>
          {!isLoggedIn ? (
            <div className="buttons-container flex-container flex-row gap-4">
              <Link href="/login">
                <button className="btn-entrar black-button small">
                  Entrar
                </button>
              </Link>
              <Link href="/cadastro">
                <button className="btn-cadastrar base-button small">
                  Criar Conta
                </button>
              </Link>
            </div>
          ) : (
            //! Carlos, aqui... Pra caso vc queira fazer o front sem ter o back, é só tirar o ponto de exclamação de cima. Abaixo tem oq o array user tem
            //
            //     "id": "a959b3da-7fe8-4ffe-9632-31912a1181e3",
            //     "email": "viniciusporto010@gmail.com",
            //     "name": "Vinícius Porto",
            //     "profilePicture": "https://lh3.googleusercontent.com/a/ACg8ocI8cnKHIqLihK2Ycgsj8i-mtbIzoIBgM-dx9J5gPeupdfanKKxW2g=s96-c",
            //     "createdAt": "2025-10-16T20:52:48.637Z"
            // }

            <div>Bem vindo, {user?.name}, Carlos. precisa ser aqui</div>
          )}
        </div>
        <div className="container-bottom">
          <div className="links flex-container justify-between flex-row gap-16 p-4 pl-12 pr-12">
            <a href="#">Home</a>
            <a href="#">Tecnologia</a>
            <a href="#">Programação e Desenvolvimento</a>
            <a href="#">Inteligencia Artificial</a>
            <a href="#">Segurança</a>
            <a href="#">Hardware</a>
            <a href="#">Startups</a>
            <a href="#">Cloud e Dados</a>
          </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="logo-mobile">
          <Image
            src="/Logo.svg"
            alt="Logotipo NanoNews"
            width={90}
            height={40}
          />
        </div>
        <div className="hamburguer" onClick={handleOpenMenu}>
          <Menu color="white" size={32} />
        </div>
      </div>
      <div className={`side-navigation-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="flex-container-side flex-row justify-between align-center p-4">
          <button className="close-menu" onClick={handleCloseMenu}>
            <ArrowRightFromLine color="white" size={16} />
          </button>
          <div className="logo-mini">
            <Image
              src="/Logo-N.svg"
              alt="Logotipo NanoNews"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="button-container-mobile flex-container flex-colums pt-16 pb-16">
          {!isLoggedIn ? (
            <>
              <a href="/login">
                <button className="button black-button w-full">Login</button>
              </a>
              <a href="/cadastro">
                <button className="button base-button w-full">Cadastro</button>
              </a>
            </>
          ) : (
            <div>
              Bem vindo, {user?.name}, Carlos. precisa ser aqui tambem...
            </div>
          )}
        </div>
        <div className="searchbar">
          <div className="icon-navbar">
            <Search color="white" size={18} />
          </div>
          <input type="text" placeholder="Buscar" />
        </div>

        <div className="links-mobile flex flex-column gap-8 p-8 pt-4">
          <a href="#" className="active-link">
            Home
          </a>
          <a href="#">Tecnologia</a>
          <a href="#">Programação e Desenvolvimento</a>
          <a href="#">Inteligencia Artificial</a>
          <a href="#">Segurança</a>
          <a href="#">Hardware</a>
          <a href="#">Startups</a>
          <a href="#">Cloud e Dados</a>
        </div>
      </div>
    </nav>
  );
}

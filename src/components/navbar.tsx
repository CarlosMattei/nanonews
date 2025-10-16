"use client";

import Image from "next/image";
import { Search, Menu, ArrowRightFromLine } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link'

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container bg-gray-100 p-8 rounded-lg flex-container">
                <div className="container-top flex flex-container flex-row align-center p-4 gap-8">
                    <div className="logo">
                        <Image src="/Logo.svg" 
                        alt="Logotipo NanoNews" 
                        width={90} 
                        height={40} />
                    </div>
                    <div className="search-bar-container flex-container">
                        <div className="searchbar">
                            <div className="icon-navbar">
                                <Search color="white" size={18} />
                            </div>
                            <input type="text" placeholder="Buscar"/>
                        </div>
                    </div>
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
                    <Image src="/Logo.svg" 
                    alt="Logotipo NanoNews" 
                    width={90} 
                    height={40} />
                </div>
                <div className="hamburguer" onClick={handleOpenMenu}>
                    <Menu color="white" size={32} />    
                </div>
            </div>
            <div className={`side-navigation-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="flex-container-side flex-row justify-between align-center p-4">
                    <button className="close-menu" onClick={handleCloseMenu}>
                        <ArrowRightFromLine color="white" size={16} />
                    </button>
                    <div className="logo-mini">
                        <Image src="/Logo-N.svg" 
                        alt="Logotipo NanoNews" 
                        width={40} 
                        height={40} />
                    </div>
                </div>
                <div className="button-container-mobile flex-container flex-colums pt-16 pb-16">
                    <a href="/login">
                        <button className="button black-button w-full">Login</button>
                    </a>
                    <a href="/cadastro">
                        <button className="button base-button w-full">Cadastro</button>
                    </a>
                </div>
                <div className="searchbar">
                            <div className="icon-navbar">
                                <Search color="white" size={18} />
                            </div>
                    <input type="text" placeholder="Buscar"/>
                </div>
                
                <div className="links-mobile flex flex-column gap-8 p-8 pt-4">
                        <a href="#" className="active-link">Home</a>
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
        
    )
}
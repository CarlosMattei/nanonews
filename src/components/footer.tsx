"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container pl-24 pr-24 pt-12 pb-12 bg-gray-100 flex flex-row justify-between">
                <div className="container-left-footer flex flex-row align-start gap-8">
                    <div className="logo">
                        <Image src="/Logo.svg" 
                        alt="Logotipo NanoNews" 
                        width={100} 
                        height={40} />
                    </div>
                </div>
                <div className="container-right-footer flex flex-row justify-between gap-24">
                    <div className="container-links-1 flex flex-column">
                        <h4 className="text-gray-5 text-sm">Categorias</h4>
                        <a className="text-gray-5 text-xs" href="#">Home</a>
                        <a className="text-gray-5 text-xs" href="#">Tecnologia</a>
                        <a className="text-gray-5 text-xs" href="#">Programação e Desenvolvimento</a>
                        <a className="text-gray-5 text-xs" href="#">Inteligencia Artificial</a>
                        <a className="text-gray-5 text-xs" href="#">Segurança</a>
                        <a className="text-gray-5 text-xs" href="#">Hardware</a>
                        <a className="text-gray-5 text-xs" href="#">Startups</a>
                        <a className="text-gray-5 text-xs" href="#">Cloud e Dados</a>
                    </div>
                    <div className="container-links-1 flex flex-column">
                        <h4 className="text-gray-5 text-sm">Paginas</h4>
                        <a className="text-gray-5 text-xs" href="#">Inicio</a>
                        <a className="text-gray-5 text-xs" href="#">Login</a>
                        <a className="text-gray-5 text-xs" href="#">Cadastro</a>
                        <a className="text-gray-5 text-xs" href="#">Pesquisa</a>
                        <a className="text-gray-5 text-xs" href="#">Noticias</a>
                    </div>
                    <div className="container-links-1 flex flex-column">
                        <h4 className="text-gray-5 text-sm">Burocrático</h4>
                        <a className="text-gray-5 text-xs" href="#">Segurança e Dados</a>
                        <a className="text-gray-5 text-xs" href="#">Termos e Condições</a>
                        <a className="text-gray-5 text-xs" href="#">Termo de Serviços</a>
                        <a className="text-gray-5 text-xs" href="#">FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
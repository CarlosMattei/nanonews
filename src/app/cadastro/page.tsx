import styles from './cadastro.module.css'
import { Mail, KeyRound } from 'lucide-react';
import Link from 'next/link';
import { GoogleIcon } from '@/components/googleIcon';

export default function cadastrarPage () {
    return (
    <body className={styles.body}>
        <div className="cadastrar-container">
            <div className="header-cadastrar flex justify-center align-center flex-column">
                <div className="tag green text-xs">Iniciar sessão</div>
                <h1>Crie sua conta!</h1>
                <p className="text-gray-5">Insira os dados para criar usa conta na NanoNews</p>
            </div>
            <form action="cadastrar" className="cadastrar-form pt-16 flex-container gap-8">
                <label htmlFor="">Nome de usuário</label>
                <div className="input-icon w-full">
                    <div className="icon-container">
                        <Mail color='white' size={16} />
                    </div>
                    <input className='input-ghost xl-input' type="email" placeholder="Nome de usuário" required />
                </div>
                <label htmlFor="">Email</label>
                <div className="input-icon w-full">
                    <div className="icon-container">
                        <Mail color='white' size={16} />
                    </div>
                    <input className='input-ghost xl-input' type="email" placeholder="Digite seu email" required />
                </div>
                <label htmlFor="">Senha</label>
                <div className="input-icon w-full">
                    <div className="icon-container">
                        <KeyRound color='white' size={16} />
                    </div>
                    <input className='input-ghost xl-input' type="password" placeholder="Senha" required />
                </div>
                <label htmlFor="">Repetir senha</label>
                <div className="input-icon w-full">
                    <div className="icon-container">
                        <KeyRound color='white' size={16} />
                    </div>
                    <input className='input-ghost xl-input' type="password" placeholder="Repita a senha" required />
                </div>
                <div className="passwordReset flex-container align-end text-sm">
                    <Link href="#">Esqueceu a senha?</Link>
                </div>
                <div className="button-container-cadastrar flex-container align-center flex-column">
                    <button className='base-button w-full'>Entrar</button>
                    <span className='pt-8 pb-8'>Ou</span>
                    <button className='flex flex-row gap-8 w-full justify-center align-center'>
                        <GoogleIcon size={18} />
                        Continuar com o <span className='bold'>Google</span></button>
                </div>
                <div className="registerLink pt-8 flex-container flex-row align-center justify-center">
                    <p className="text-sm text-gray-5">Não tem uma conta? <Link href='#'>Crie uma.</Link></p>
                </div>
            </form>
        </div>
    </body>
    )
}
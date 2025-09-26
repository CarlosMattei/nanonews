import style from './login.module.css'
import { Mail, KeyRound } from 'lucide-react';
import Link from 'next/link';
import { GoogleIcon } from '@/components/googleIcon';

export default function LoginPage() {
    return (
        <body className={style.body}>
        <div className="login-container">
            <div className="header-login flex justify-center align-center flex-column">
                <div className="tag green text-xs">Iniciar sessão</div>
                <h1>Bem-vindo de volta!</h1>
                <p className="text-gray-5">Insira suas credenciais para acessar sua conta.</p>
            </div>
            <form action="login" className="login-form pt-16 flex-container gap-8">
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
                <div className="passwordReset flex-container align-end text-sm">
                    <Link href="#">Esqueceu a senha?</Link>
                </div>
                <div className="button-container-login flex-container align-center flex-column">
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
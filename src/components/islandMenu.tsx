import { useState, useRef, useEffect } from 'react';
import { TextAlignStart, TextInitial } from 'lucide-react';
import { TextAlignCenter } from 'lucide-react';
import { TextAlignJustify } from 'lucide-react';
import { TextAlignEnd } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Bold } from 'lucide-react';
import { Italic } from 'lucide-react';
import { Image } from 'lucide-react';
import { Text } from 'lucide-react';
import { List } from 'lucide-react';
import { Quote } from 'lucide-react';
import { Underline } from 'lucide-react';

export default function IslandMenu() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="Island">
            <div ref={modalRef} className="componentesMenu flex flex-column align-center" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="modalComponentesContainer flex flex-column rounded-lg justify-center align-center gap-4 p-8 bg-gray-100">
                    <p className='text-xs text-gray-5 pb-8'>componentes</p>
                    <button className="imagem gray-button gap-8 flex flex-row small w-full"><Image size={20}/>Imagem</button>
                    <button className="texto gray-button gap-8 flex flex-row small w-full"><Text size={20}/>Texto</button>
                    <button className="titulo gray-button gap-8 flex flex-row small w-full"><TextInitial size={20}/>Título</button>
                    <button className="lista gray-button gap-8 flex flex-row small w-full"><List size={20}/>Lista</button>
                    <button className="citacao gray-button gap-8 flex flex-row small w-full"><Quote size={20}/> Citação</button>
                </div>
            </div>
            <div className="IslandMenu flex flex-row gap-8 p-8 border border-solid text-gray-5 bg-gray-100 rounded-xl">
            <div className="alignContainer flex flex-row gap-8 bg-gray-50 p-4 rounded-xl">
                <button className="direita gray-button small flex justify-center align-center"><TextAlignEnd size={15}/></button>
                <button className="esquerda gray-button small flex justify-center align-center"><TextAlignStart size={15}/></button>
                <button className="centro gray-button small flex justify-center align-center"><TextAlignCenter size={15}/></button>
                <button className="justificado gray-button small flex justify-center align-center"><TextAlignJustify size={15}/></button>
            </div>
            <button 
                className="abrirModalComponentes base-button small flex justify-center align-center"
                onClick={toggleModal}
            >
                <Plus size={15}/>
            </button>
            <div className="divisor"></div>
            <div className="efeitosDeTexto flex flex-row gap-8">
                <button className="bold gray-button small flex justify-center align-center"><Bold size={15}/></button>
                <button className="italic gray-button small flex justify-center align-center"><Italic size={15}/></button>
                <button className="underline gray-button small flex justify-center align-center"><Underline size={15}/></button>
            </div>
            </div>
        </div>
    );
}
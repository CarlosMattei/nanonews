"use client";

import { ArrowLeft, ImageUp } from 'lucide-react';
import { useRef, useEffect, useState } from "react";
import IslandMenu from '@/components/islandMenu';
import styles from './criarpublicacao.module.css';

export default function CriarPublicacaoPage() {
    const refDescricao = useRef<HTMLTextAreaElement | null>(null);
    const refText = useRef<HTMLTextAreaElement | null>(null);
    const refTitle = useRef<HTMLTextAreaElement | null>(null);
    const refList = useRef<HTMLTextAreaElement | null>(null);
    const [listValue, setListValue] = useState('');

    const autoResize = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
      const el = ref.current;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    };

    useEffect(() => {
      autoResize(refDescricao);
      autoResize(refText);
      autoResize(refTitle);
      autoResize(refList);
    }, []);

    // Função para garantir que cada linha comece com "• "
    const handleListChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      let value = e.target.value;
      // Divide em linhas, adiciona bolinha se não houver
      value = value
        .split('\n')
        .map(line => line.startsWith('• ') ? line : `• ${line.replace(/^•\s*/, '')}`)
        .join('\n');
      setListValue(value);
      autoResize(refList);
    };

    return (<>
    
    <IslandMenu/>
        <div className="header flex flex-row justify-between p-8 align-center bg-gray-50 border-b text-gray-10">
            <div className="buttonVoltar flex flex-1">
                <button className="gray-button small flex flex-row justify-center align-center h-full">
                    <ArrowLeft color='gray' size={20}/>
                </button>
            </div>
            <div className="nomeDaPublicacao flex flex-1 justify-center">
                <p className="text-sm text-white">Sem título</p>
            </div>
        <div className="acoes flex flex-row justify-end gap-8 align-center flex-1">
            <div className="status">
                <p className="text-sm text-gray-5">Projeto não salvo</p>
            </div>
            <button className="base-button small">Salvar</button>
        </div>
        </div>

        <div className={styles.editorDePublicacao} >
            <div className={styles.conteudoEditorPublicacao}>
            <div className={styles.informacoesPublicacao}>
                <div className="nomeDaPublicacao">
                    <h1 className="text-white">Sem título</h1>
                    <textarea ref={refDescricao} rows={1} onInput={() => autoResize(refDescricao)} name="descricaoPublicacao" id="descricaoPublicacao" className={`${styles.textareaComponent} ${styles.descricaoPublicacao}`} placeholder="Descrição do Post para saber o que ele vai falar"></textarea>
                    <p className='text-gray-5 text-xs'>criado em 22 de Janeiro de 2025</p>
                </div>
            </div>
            <div className="corpoPublicacao">
                <div className="textComponent">
                    <textarea name="TextComponent" id="TextComponent" className={`${styles.textareaComponent} ${styles.textComponent}`} ref={refText} rows={1} onInput={() => autoResize(refText)} placeholder="Escreva sua publicação"></textarea>
                </div>
                <div className="titleComponent">
                    <textarea name="TitleComponent" id="TitleComponent" className={styles.titleComponent} ref={refTitle} rows={1} onInput={() => autoResize(refTitle)} placeholder="Título"></textarea>
                </div>
                <div className="listComponent">
                    <textarea
                        name="ListComponent"
                        id="ListComponent"
                        className={`${styles.textareaComponent} ${styles.listComponent}`}
                        ref={refList}
                        rows={1}
                        value={listValue}
                        onChange={handleListChange}
                        placeholder="Lista"
                    ></textarea>
                </div>
                <div className="imageComponent">
                    <div className={`imageUploader flex flex-column ${styles.imageUploader} justify-center align-center gap-8 p-12 border-2 border-dashed text-gray-10 rounded-lg`}>
                    <ImageUp size={40} color='var(--white)'/>
                    <p className="text-xs text-gray-5">Arraste e solte para carregar uma imagem</p>
                    <p className="text-xs text-gray-5">ou</p>
                    <button className="base-button small">Adicionar imagem</button>
                    </div>
                    <div className="ImagePreview">
                        { /* Preview da imagem carregada aparecerá aqui */ }
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
"use client";

import { ArrowLeft } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IslandMenu from "@/components/islandMenu";
import TitleComponent from "@/components/TitleComponent";
import TextComponent from "@/components/TextComponent";
import ListComponent from "@/components/ListComponent";
import ImageComponent from "@/components/ImageComponent";
import styles from "./criarpublicacao.module.css";

interface Component {
  type: "text" | "title" | "list" | "image";
  id: number;
}

export default function CriarPublicacaoPage() {
  const router = useRouter();
  const refDescricao = useRef<HTMLTextAreaElement | null>(null);
  const [components, setComponents] = useState<Component[]>([]);
  const [title, setTitle] = useState("Sem título");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingMainTitle, setIsEditingMainTitle] = useState(false);

  const autoResize = (ref: React.RefObject<HTMLTextAreaElement | null>) => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    autoResize(refDescricao);
  }, []);

  const addComponent = (type: Component["type"]) => {
    setComponents([...components, { type, id: Date.now() }]);
  };

  const renderComponent = (component: Component) => {
    switch (component.type) {
      case "text":
        return <TextComponent key={component.id} autoResize={autoResize} />;
      case "title":
        return <TitleComponent key={component.id} autoResize={autoResize} />;
      case "list":
        return <ListComponent key={component.id} autoResize={autoResize} />;
      case "image":
        return <ImageComponent key={component.id} />;
      default:
        return null;
    }
  };

  const handleTitleDoubleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleMainTitleDoubleClick = () => {
    setIsEditingMainTitle(true);
  };

  const handleMainTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMainTitleBlur = () => {
    setIsEditingMainTitle(false);
  };

  return (
    <>
      <IslandMenu onAddComponent={addComponent} />
      <div className="header flex flex-row justify-between p-8 align-center bg-gray-50 border-b text-gray-10">
        <div className="buttonVoltar flex flex-1">
          <button
            className="gray-button small flex flex-row justify-center align-center h-full"
            onClick={() => router.back()}
          >
            <ArrowLeft color="gray" size={20} />
          </button>
        </div>
        <div className="nomeDaPublicacao flex flex-1 justify-center">
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              className="text-sm text-white bg-transparent border-none outline-none"
              style={{ textAlign: "center" }}
              autoFocus
            />
          ) : (
            <p
              className="text-sm text-white"
              onDoubleClick={handleTitleDoubleClick}
            >
              {title}
            </p>
          )}
        </div>
        <div className="acoes flex flex-row justify-end gap-8 align-center flex-1">
          <div className="status">
            <p className="text-sm text-gray-5">Projeto não salvo</p>
          </div>
          <button className="base-button small">Salvar</button>
        </div>
      </div>

      <div className={styles.editorDePublicacao}>
        <div className={styles.conteudoEditorPublicacao}>
          <div className={styles.informacoesPublicacao}>
            <div className="nomeDaPublicacao">
              {isEditingMainTitle ? (
                <input
                  type="text"
                  value={title}
                  onChange={handleMainTitleChange}
                  onBlur={handleMainTitleBlur}
                  className="text-white bg-transparent border-none outline-none"
                  style={{ fontSize: "2.5rem", fontWeight: "700" }}
                  autoFocus
                />
              ) : (
                <h1
                  className="text-white"
                  onDoubleClick={handleMainTitleDoubleClick}
                >
                  {title}
                </h1>
              )}
              <textarea
                ref={refDescricao}
                rows={1}
                onInput={() => autoResize(refDescricao)}
                name="descricaoPublicacao"
                id="descricaoPublicacao"
                className={`${styles.textareaComponent} ${styles.descricaoPublicacao}`}
                placeholder="Descrição do Post para saber o que ele vai falar"
              ></textarea>
              <p className="text-gray-5 text-xs">
                criado em 22 de Janeiro de 2025
              </p>
            </div>
          </div>
          <div className={styles.corpoPublicacao}>
            {components.map(renderComponent)}
          </div>
        </div>
      </div>
    </>
  );
}
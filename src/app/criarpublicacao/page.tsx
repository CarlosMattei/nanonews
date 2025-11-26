"use client";

import { ArrowLeft } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IslandMenu from "@/components/islandMenu";
import TitleComponent from "@/components/TitleComponent";
import TextComponent from "@/components/TextComponent";
import ListComponent from "@/components/ListComponent";
import ImageComponent from "@/components/ImageComponent";
import axios from "axios";
import styles from "./criarpublicacao.module.css";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/userStore";

interface Component {
  type: "text" | "title" | "list" | "image";
  id: number;
  content: string;
}

export default function CriarPublicacaoPage() {
  const router = useRouter();
  const refDescricao = useRef<HTMLTextAreaElement | null>(null);
  const [components, setComponents] = useState<Component[]>([]);
  const [title, setTitle] = useState("Sem título");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingMainTitle, setIsEditingMainTitle] = useState(false);
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  const user = useUserStore((state) => state.user);

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
    setComponents([...components, { type, id: Date.now(), content: "" }]);
  };

  const updateComponentContent = (id: number, content: string) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id ? { ...component, content } : component
      )
    );
  };

  const renderComponent = (component: Component) => {
    switch (component.type) {
      case "text":
        return (
          <TextComponent
            key={component.id}
            autoResize={autoResize}
            value={component.content}
            onChange={(e) =>
              updateComponentContent(component.id, e.target.value)
            }
          />
        );
      case "title":
        return (
          <TitleComponent
            key={component.id}
            autoResize={autoResize}
            value={component.content}
            onChange={(e) =>
              updateComponentContent(component.id, e.target.value)
            }
          />
        );
      case "list":
        return (
          <ListComponent
            key={component.id}
            autoResize={autoResize}
            value={component.content}
            onChange={(e) =>
              updateComponentContent(component.id, e.target.value)
            }
          />
        );
      case "image":
        return (
          <ImageComponent
            key={component.id}
            value={component.content}
            onChange={(value) => updateComponentContent(component.id, value)}
          />
        );
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

  const saveArticle = async () => {
    try {
      const articleData = {
        headline: title || "Sem título",
        createdAt: new Date().toISOString(),
        authorId: user?.id ,
      };

      const contentData = components.map((component, index) => ({
        order: index + 1,
        typeComponent: component.type,
        content: component.content,
      }));

      const payload = {
        article: articleData,
        content: contentData,
      };

      try {
        const response = await axios.post(
          `${backendUrl}/articles`,
          payload
        );

        if (response.status === 200) {
          toast.success("Artigo salvo com sucesso!");
          router.push("/");
        }
      } catch (error) {
        console.error(
          "Erro ao salvar o artigo (banco de dados / backend):",
          error
        );
        toast.error("Erro ao salvar o artigo no servidor. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro ao salvar o artigo (total):", err);
      toast.error("Erro ao salvar o artigo. Tente novamente.");
    }
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
          <button className="base-button small" onClick={saveArticle}>
            Salvar
          </button>
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

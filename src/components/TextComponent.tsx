import { useRef, useEffect } from "react";
import styles from "./../app/criarpublicacao/criarpublicacao.module.css";

interface TextComponentProps {
  placeholder?: string;
  autoResize: (ref: React.RefObject<HTMLTextAreaElement | null>) => void;
}

export default function TextComponent({ placeholder, autoResize }: TextComponentProps) {
  const refText = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    autoResize(refText);
  }, [autoResize]);

  return (
    <div className="textComponent">
      <textarea
        name="TextComponent"
        id="TextComponent"
        className={`${styles.textareaComponent} ${styles.textComponent}`}
        ref={refText}
        rows={1}
        onInput={() => autoResize(refText)}
        placeholder={placeholder || "Escreva seu texto"}
      ></textarea>
    </div>
  );
}

import { useRef, useEffect } from "react";
import styles from "./../app/criarpublicacao/criarpublicacao.module.css";

interface TextComponentProps {
  placeholder?: string;
  autoResize: (ref: React.RefObject<HTMLTextAreaElement | null>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextComponent({
  placeholder,
  autoResize,
  value,
  onChange,
}: TextComponentProps) {
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
        value={value}
        onChange={onChange}
        onInput={() => autoResize(refText)}
        placeholder={placeholder || "Escreva seu texto"}
      ></textarea>
    </div>
  );
}

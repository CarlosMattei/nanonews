import { useEffect, useRef } from "react";
import styles from "./../app/criarpublicacao/criarpublicacao.module.css";

interface TitleComponentProps {
  placeholder?: string;
  autoResize: (ref: React.RefObject<HTMLTextAreaElement | null>) => void;
}

export default function TitleComponent({
  placeholder,
  autoResize,
}: TitleComponentProps) {
  const refTitle = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    autoResize(refTitle);
  }, [autoResize]);
  return (
    <div className="titleComponent">
      <textarea
        name="TitleComponent"
        id="TitleComponent"
        className={styles.titleComponent}
        rows={1}
        onInput={() => autoResize(refTitle)}
        placeholder={placeholder || "Título"}
      ></textarea>
    </div>
  );
}

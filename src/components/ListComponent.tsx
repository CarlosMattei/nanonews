import { useRef, useState } from "react";
import styles from "./../app/criarpublicacao/criarpublicacao.module.css";

interface ListComponentProps {
  placeholder?: string;
  autoResize: (ref: React.RefObject<HTMLTextAreaElement | null>) => void;
}

export default function ListComponent({
  placeholder,
  autoResize,
}: ListComponentProps) {
  const refList = useRef<HTMLTextAreaElement | null>(null);
  const [listValue, setListValue] = useState("");

  // Função para garantir que cada linha comece com "• "
  const handleListChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;
    // Divide em linhas, adiciona bolinha se não houver
    value = value
      .split("\n")
      .map((line) =>
        line.startsWith("• ") ? line : `• ${line.replace(/^•\s*/, "")}`
      )
      .join("\n");
    setListValue(value);
    autoResize(refList);
  };

  return (
    <div className="listComponent">
      <textarea
        name="ListComponent"
        id="ListComponent"
        className={`${styles.textareaComponent} ${styles.listComponent}`}
        ref={refList}
        rows={1}
        value={listValue}
        onChange={handleListChange}
        placeholder={placeholder || "Lista"}
      ></textarea>
    </div>
  );
}

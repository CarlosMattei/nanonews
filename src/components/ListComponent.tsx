import { useRef, useState } from "react";
import styles from "./../app/criarpublicacao/criarpublicacao.module.css";

interface ListComponentProps {
  placeholder?: string;
  autoResize: (ref: React.RefObject<HTMLTextAreaElement | null>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ListComponent({
  placeholder,
  autoResize,
  value,
  onChange,
}: ListComponentProps) {
  const refList = useRef<HTMLTextAreaElement | null>(null);

  const handleListChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let updatedValue = e.target.value;
    updatedValue = updatedValue
      .split("\n")
      .map((line) =>
        line.startsWith("• ") ? line : `• ${line.replace(/^•\s*/, "")}`
      )
      .join("\n");
    onChange({ ...e, target: { ...e.target, value: updatedValue } });
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
        value={value}
        onChange={handleListChange}
        placeholder={placeholder || "Lista"}
      ></textarea>
    </div>
  );
}

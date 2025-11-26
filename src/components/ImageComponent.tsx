import { ImageUp } from "lucide-react";
import Image from "next/image";
import styles from "./../app/criarpublicacao/criarpublicacao.module.css";

interface ImageComponentProps {
  src?: string;
  alt?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function ImageComponent({
  src,
  alt,
  value,
  onChange,
}: ImageComponentProps) {
  const fotoDoCarlos = "/capas/Whisk_92d1e73ad296b0aa7784b90ab65ac4f7dr.jpeg";

  return (
    <div className="imageComponent">
      {value === "" ? (
        <div
          className={`imageUploader flex flex-column ${styles.imageUploader} justify-center align-center gap-8 p-12 border-2 border-dashed text-gray-10 rounded-lg`}
        >
          <ImageUp size={40} color="var(--white)" />
          <p className="text-xs text-gray-5">
            Arraste e solte para carregar uma imagem
          </p>
          <p className="text-xs text-gray-5">ou</p>
          <button
            className="base-button small"
            onClick={() => onChange(fotoDoCarlos)}
          >
            Adicionar imagem
          </button>
        </div>
      ) : (
        <div className={`${styles.imagePreviewContainer}`}>
          <div className={`${styles.imagePreview}`}>
            <Image
              src={value || fotoDoCarlos}
              alt={alt || "Imagem"}
              layout="responsive"
              width={1000}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
}

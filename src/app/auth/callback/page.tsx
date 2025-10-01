"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      localStorage.setItem("accessToken", token);

      window.location.href = "/";
    }
  }, [params]);

  return <p>Carregando (carlos faz algo bonito aqui)...</p>;
}

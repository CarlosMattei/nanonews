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

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, justifyContent: "center" }}>
        <img style={{ width: "200px" }} src="/logo_nano_sem_fundo.gif" alt="Carregando..." />
      </div>
        <div style={{ marginBottom: "20px" }}>
          <h5 className="text-gray-5">Autenticando usuário, aguarde...</h5>
        </div>
    </div>
  );
}

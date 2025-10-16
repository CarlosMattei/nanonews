"use client";
import { useUserStore } from "@/store/userStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CallbackPage() {
  const params = useSearchParams();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const token = params.get("token");
    const user = params.get("user");

    console.log("Token recebido:", token);
    console.log("User recebido:", user);

    if (user) {
      const JsonUser = JSON.parse(decodeURIComponent(user));
      setUser(JsonUser);
    }
    if (token) {
      localStorage.setItem("accessToken", token);

      window.location.href = "/";
    }
  }, [params]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "200px" }}
          src="/logo_nano_sem_fundo.gif"
          alt="Carregando..."
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h5 className="text-gray-5">Autenticando usuário, aguarde...</h5>
      </div>
    </div>
  );
}

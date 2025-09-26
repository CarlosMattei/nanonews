import { NavBar } from "@/components/navbar";
import Card from "@/components/card";
import style from  "./page.module.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={style.content}>
      <main className="slider">
        <div className="slide">
          <div className="slideInfosContainer gap-8 flex-container pb-8">
            <div className="tag">Tecnologia</div>
            <h1 className="text-3xl">Apple Lança Nova tecnologia de Inteligencia Artificial de Segurança</h1>
            <h3 className="regular text-sm">Programa deve beneficiar 400 mil startups pelo mundo</h3>
            <p className="regular mb-4">Há 4 Minutos</p>
          </div>
        <div className="pagination">
          <div className="part"></div>
          <div className="part"></div>
          <div className="part"></div>
        </div>
        </div>
      </main>

    <div className="card-grid">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
      </div>
    </>
  );
}

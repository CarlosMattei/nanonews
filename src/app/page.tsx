import { NavBar } from "@/components/navbar";
import Footer from "@/components/footer";
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

    <div className="highlights flex flex-row mt-24">

      {/* Em Alta Hoje */}
      <div className="section-em-alta-hoje flex flex-column flex-2 pr-16">

          <h4 className="mb-24">Em Alta Hoje</h4>

          <div className="card-em-alta bg-gray-100 flex flex-column aspect-16-9 w-full rounded-md justify-between">
            <img className="capa-card-em-alta" src="capas\Whisk_92d1e73ad296b0aa7784b90ab65ac4f7dr.jpeg" alt="#" />
            <div className="overlay-em-alta p-8">
              <div className="icon-container-fogo">
                <img src="/fire-icon-nano-news.png" alt="#" />
              </div>
              <div className="titulo-em-alta">
                <h5 className="text-2xl">Apple Lança Nova tecnologia de Inteligencia Artificial de Segurança</h5>
              </div>
            </div>
          </div>
      </div>

       {/* Ultimos em Alta Hoje */}
      <div className="ultimas-em-alta flex flex-column flex-1">

          <h4 className="mb-24">Ultimas em Alta</h4>

          <div className="container-ultimas-em-alta flex flex-column gap-8 h-full">
            <div className="card-ultima-em-alta p-8 bg-gray-100 rounded-md flex flex-column gap-8">
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident esse.</h5>
              <p className="text-xs text-gray-5">Há 2 minutos</p>
            </div>
            <div className="card-ultima-em-alta p-8 bg-gray-100 rounded-md flex flex-column gap-8">
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident esse.</h5>
              <p className="text-xs text-gray-5">Há 2 minutos</p>
            </div>
            <div className="card-ultima-em-alta p-8 bg-gray-100 rounded-md flex flex-column gap-8">
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident esse.</h5>
              <p className="text-xs text-gray-5">Há 2 minutos</p>
            </div>
          </div>
          <div className="container-ultimas-em-alta-button pt-16 flex justify-end">
            <button className="base-button small">Ver mais</button>
          </div>

      </div>
    </div>

    {/* populares da semana */}

    <div className="populares-da-semana">
      <h4 className="mb-24 mt-24">Populares da Semana</h4>

      {/* noticias populares da semana */}

      <div className="container-populares-da-semana flex flex-row gap-16">
        <div className="noticias-populares-da-semana flex-3">

            <div className="card-populares-da-semana flex flex-row gap-16 pt-8 mb-16">
              <img src="/capas/Whisk_92d1e73ad296b0aa7784b90ab65ac4f7dr.jpeg" alt="" className="card-populares-da-semana flex-1" />
              <div className="infos-populares-da-semana flex flex-3 flex-column gap-24">
                <div className="content-infos-populares-da-semana flex flex-column gap-4">
                  <div className="tag green">Tecnologia</div>
                  <h5 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident esse.</h5>
                  <p className="text-xs text-gray-5">Há 2 minutos</p>
                </div>
              <div className="link flex flex-row gap-8">
                <a href="#">Ler mais</a> <a href="#">&gt;</a>
              </div>
              </div>
            </div>
            <div className="card-populares-da-semana flex flex-row gap-16 pt-8 mb-16">
              <img src="/capas/Whisk_92d1e73ad296b0aa7784b90ab65ac4f7dr.jpeg" alt="" className="card-populares-da-semana flex-1" />
              <div className="infos-populares-da-semana flex flex-3 flex-column gap-24">
                <div className="content-infos-populares-da-semana flex flex-column gap-4">
                  <div className="tag green">Tecnologia</div>
                  <h5 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident esse.</h5>
                  <p className="text-xs text-gray-5">Há 2 minutos</p>
                </div>
              <div className="link flex flex-row gap-8">
                <a href="#">Ler mais</a> <a href="#">&gt;</a>
              </div>
              </div>
            </div>
            <div className="card-populares-da-semana flex flex-row gap-16 pt-8 mb-16">
              <img src="/capas/Whisk_92d1e73ad296b0aa7784b90ab65ac4f7dr.jpeg" alt="" className="card-populares-da-semana flex-1" />
              <div className="infos-populares-da-semana flex flex-3 flex-column gap-24">
                <div className="content-infos-populares-da-semana flex flex-column gap-4">
                  <div className="tag green">Tecnologia</div>
                  <h5 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident esse.</h5>
                  <p className="text-xs text-gray-5">Há 2 minutos</p>
                </div>
              <div className="link flex flex-row gap-8">
                <a href="#">Ler mais</a> <a href="#">&gt;</a>
              </div>
              </div>
            </div>
        </div>

        {/* categorias */}
        <div className="categorias-container flex-1 p-8 flex flex-column bg-gray-100">
          <h3 className="pb-12">Busque por categoria</h3>
          <a href="/">Tecnologia</a>
          <a href="/">Política</a>
          <a href="/">Esportes</a>
          <a href="/">Entretenimento</a>
          <a href="/">Saúde</a>
          <a href="/">Tecnologia</a>
          <a href="/">Política</a>
          <a href="/">Esportes</a>
          <a href="/">Entretenimento</a>
          <a href="/">Saúde</a>
          <a href="/">Tecnologia</a>
          <a href="/">Política</a>
          <a href="/">Esportes</a>
          <a href="/">Entretenimento</a>
          <a href="/">Saúde</a>
        </div>
      </div>
    </div>

    {/* Noticias por categoria */}
    <div className="noticias-por-categoria">
      <h2 className="mb-24 mt-24">Notícias por categoria</h2>

      <div className="container-categoria-tecnologia pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Tecnologia</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container-categoria-tecnologia mt-32 pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Programação e Desenvolvimento</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container-categoria-tecnologia mt-32 pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Inteligencia Artificial</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container-categoria-tecnologia mt-32 pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Segurança</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container-categoria-tecnologia mt-32 pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Hardware</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container-categoria-tecnologia mt-32 pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Startups</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="container-categoria-tecnologia mt-32 pb-24">
        <div className="flex flex-row justify-between align-center mb-8">
          <h3>Cloud e Dados</h3>
          <button className="base-button small">Ver mais</button>
        </div>
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>

      </div>

      <Footer />
    </>
  );
}

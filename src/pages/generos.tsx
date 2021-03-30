import { Component, useState, useEffect } from "react";
import { Header, Footer, Loading } from "../components";
import { Botao, Imagem, Pagina } from "../styles";
import { apiGenero } from "../api/data"
import { IGenero } from "../interfaces/Genero.interface";

export default function Generos() {

  const [isLoading, setIsLoading] = useState(true)
  const [generos, setGeneros] = useState<IGenero[]>([])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGenero.index();
      setGeneros(response.data);
    };
    fetchData();
  }, []);



  return (
    <>
      {isLoading ? <Loading /> : <>
        <Header />

        <section className="center">
          <Pagina>Generos</Pagina>
          <div className="section">
            <div className="center flex">
              {generos &&
                generos.map((item) => (
                  <div><a key={item.id} href={`/${item.id}`}><Botao type="button" tipo="menu" bg="marmore">{item.nome}</Botao></a></div>
                ))}
            </div>
          </div>
          <Botao type="button">
            <a href="menu"><Imagem src="/img/voltar.png" alt="icone de lupa" size="md" /></a>
          </Botao>
        </section>

        <Footer />
      </>

      }

    </>
  )
}

import { Component } from "react";
import { Header, Footer } from "../components";
import { Botao, Imagem, Pagina } from "../styles";

export default function EmAlta() {
    return (
        <>
            <Header />

            <section >
                <Pagina>Em alta</Pagina>
                <div className="section">
                    <div className="center flex">
                        <div>
                            <Imagem src="img/Series/Poster99.png" className="emAlta" alt="Brooklin 99" />
                            <Imagem src="img/top3.svg" size="md" alt="Terceiro lugar" />
                        </div>
                        <div>
                            <Imagem src="img/Series/PosterLucifer.jpg" className="emAlta" alt="Jane The Virgen" />
                            <Imagem src="img/top1.svg" size="md" alt="Primeiro lugar" />
                        </div>
                        <div >
                            <Imagem src="img/Series/PosterAnne.jpg" className="emAlta" alt="Reign" />
                            <Imagem src="img/top2.svg" size="md" alt="Segundo lugar" />
                        </div>

                    </div>
                    <Botao type="button">
                        <a href="menu"><Imagem src="img/voltar.png" alt="icone de lupa" size="md" /></a>
                    </Botao>
                </div>
            </section>

            <Footer />
        </>
    )
}

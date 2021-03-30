import { Component } from "react";
import { Header, Footer } from "../components";
import { Botao, Imagem, Pagina } from "../styles";

export default function Home() {
    return (
        <>
            <Header />

            <section className="center">
                <Pagina>Início</Pagina>
                <div className="section">
                    <div className="flex">
                        <div>
                            <Imagem src="/img/Series/Brooklin99.jpg" alt="Brooklin 99" />
                        </div>
                        <div>
                            <Imagem src="/img/Series/JaneTheVirgen.png" alt="Jane The Virgen" />
                        </div>
                        <div>
                            <Imagem src="img/Series/Reign.png" alt="Reign" />
                        </div>
                        <div>
                            <Imagem src="img/Series/TheSociety.png" alt="The Society" />
                        </div>
                    </div>
                    <a href="/menu" ><Botao type="button" tipo="menu" bg="marmore">menu</Botao></a>
                </div>
            </section>

            <Footer />
        </>
    )
}

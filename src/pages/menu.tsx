import { Component } from "react";
import { Header, Footer } from "../components";
import { Botao, Imagem, Pagina } from "../styles";

export default function Menu() {
    return (
        <>
            <Header />

            <section>
                <Pagina>Menu</Pagina>
                <div className="section">
                    <div className="center menu">
                        <ul>
                            <li>
                                <a href="emAlta"><Botao type="button" bg="marmore" tipo="menu">Em alta</Botao></a>
                            </li>

                            <li>
                                <a href="generos"><Botao type="button" bg="marmore" tipo="menu">Gêneros</Botao></a>
                            </li>

                            <li>
                                <a href="lancamentos"><Botao type="button" bg="marmore" tipo="menu">Lançamentos</Botao></a>
                            </li>
                        </ul>



                    </div>
                    <Botao type="button">
                        <a href="/"><Imagem src="img/voltar.png" alt="icone de lupa" size="md" /></a>
                    </Botao>
                </div>
            </section>

            <Footer />
        </>
    )
}

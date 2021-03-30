import { Component } from "react";
import { Header, Footer } from "../components";
import { Botao, Imagem, Pagina } from "../styles";

export default function Lancamentos() {
    return (
        <>
            <Header />

            <section>
                <Pagina>Lançamentos</Pagina>
                <div className="section">
                    <div className="menu center">
                        <ul>
                            <li>
                                <a href="#"><Botao type="button" tipo="menu" bg="marmore">Julho</Botao></a>
                            </li>

                            <li>
                                <a href="agosto"><Botao type="button" tipo="menu" bg="marmore">Agosto</Botao></a>
                            </li>

                            <li>
                                <a href="#"><Botao type="button" tipo="menu" bg="marmore">Setembro</Botao></a>
                            </li>
                        </ul>



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

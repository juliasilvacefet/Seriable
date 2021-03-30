import { Component } from "react";
import { Header, Footer } from "../components";
import { Botao, Imagem, Pagina } from "../styles";

export default function Agosto() {
    return (
        <>
            <Header />

            <section >
                <Pagina>Lançamento de Agosto</Pagina>
                <div className="section">
                    <div className="menu center row">
                        <div className="texto-central col-8">
                            <h3>Mundo Misterio</h3>
                            <p>Felipe Castanhari explora os mistérios da ciência e da história para provar que aprender pode ser divertido. Ele é auxiliado pela doutora Tay, o zelador Betinho e também por B.R.I.G.G.S., uma inteligência artificial.</p>
                            <div className="align-esq">Numero de Temporadas: 1 </div>
                            <div className="align-esq"> Disponivel: Netflix </div>
                            <div className="align-esq"> Elenco: Lilian Regina, Bruno Miranda, Felipe Castanhari, Guilherme Briggs </div>

                        </div>
                        <div className="img-lateral col-4">
                            <Imagem src="img/Series/PosterMundoMisterio.jpeg" alt="MundoMisterio" />
                        </div>

                    </div>
                    <Botao type="button">
                        <a href="lancamentos"><Imagem src="img/voltar.png" alt="icone de lupa" size="md" /></a>
                    </Botao>
                </div>
            </section>

            <Footer />
        </>
    )
}

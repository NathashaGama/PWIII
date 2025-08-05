import React from "react";

function Teste(props){
    switch(props.genero) {
        case "homem":
            return <h1> Seja bem vindo, senhor {props.nome}!</h1>
        case "mulher":
            return <h1> Bem vinda, senhora {props.nome}!</h1>
        default:
            return <h1>Bem vindo!</h1>
    }
}

export default Teste
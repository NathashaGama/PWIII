import React  from "react"

function Index({nome, idade, teste}){
    return(
        <>
            <h1>Hello Wold</h1>
            <p> {nome}</p>
            <p>Sua idade é {idade} </p>
            <p> Se voce somar 1+1 vai dar {1+1}</p>
        </>
        
    )
}
//outro jeito de fazer 
//function Index({props}){
//    return(
//        <>
//            <h1>Hello Wold</h1>
//            <p> {props.teste} </p>
//            <p> {props.teste1} </p>
//            <p> {props.teste2} </p>
//        </>       
//    )
//}
export default Index
import React  from "react"

function Index({teste, idade}){
    return(
        <>
            <h1>Hello Wold</h1>
            <p> {teste} </p>
            <p>{teste}.teste</p>
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
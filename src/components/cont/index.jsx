import { useState } from "react";

function cont(){
    const [status, setStatus]= useState(0);
        return (
        <div>
            <p> Valor: {status} </p>
            <button onClick={function(){ setStatus(status -1);}}>
                Subtrai
            </button>

            <button onClick={function(){ setStatus(status +1);}}>
                Soma
            </button>
        </div>
        )

}

export default cont



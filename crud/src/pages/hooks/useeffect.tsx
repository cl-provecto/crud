import { useEffect, useState } from "react"
import Topo from "@/components/Topo"

//useEffect usado para renderização apenas uma vez da página

export default function UseEffect() {

    const [cont, setCont] = useState<number>(0)
    const [aux, setAux] = useState<number>(0)

    //let aux = 0

    // useEffect(() => {
    //     let c = cont
    //     c ++
    //     setCont(c)
    // }, [])

    useEffect(() => {
        alert("UseEffect Disparado.")
    }, [aux])

    function add() {
        let c = cont
        c ++
        setCont(c)
    }

    function addaux() {
        let a = aux
        a ++
        setAux(a)
    }

    return (
        <div>
            <Topo></Topo>
            <div>
                <p>{`Valor de CONT: ${cont}`}</p>
                <p>{`Valor de CONT: ${aux}`}</p>
                <button onClick={() => { add(), addaux() }}>Adicionar 1</button>
            </div>
        </div>
    )
}
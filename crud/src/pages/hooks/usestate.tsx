import { useState } from "react"
import DisplayState from "@/components/DisplayState"

export default function UseState() {

    const [cont, setCont] = useState<number>(0)

    function add() {
        //setCont(cont ++)
        let c = cont
        c ++
        setCont(c)
    }
    function sub() {
        //setCont(cont ++)
        let c = cont
        c --
        setCont(c)
    }

    return (
        <div>
            UseState
            <DisplayState valor={cont} fadd={add} fsub={sub}></DisplayState>
        </div>
    )
}
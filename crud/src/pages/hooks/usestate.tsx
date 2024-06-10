import { useState } from "react"
import DisplayState from "@/components/DisplayState"

export default function UseState() {

    const [cont, setCont] = useState<number>(0)

    return (
        <div>
            UseState
            <DisplayState valor={cont} fvalor={setCont}></DisplayState>
        </div>
    )
}
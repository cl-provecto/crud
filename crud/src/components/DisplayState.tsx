interface DisplayStateProps {
    valor: number,
    fvalor: any
}

export default function DisplayState(props:DisplayStateProps) {

    function add() {
        //setCont(cont ++)
        let c = props.valor
        c ++
        props.fvalor(c)
    }
    function sub() {
        //setCont(cont ++)
        let c = props.valor
        c --
        props.fvalor(c)
    }

    return (
        <div className="flex flex-col p-5 rounded-md bg-zinc-300 justify-center items-center w-[300px]">
            <div className="flex bg-zinc-700 text-green-500 justify-center items-center w-[200px] mb-3">
                {props.valor}
            </div>
            <div className="flex gap-5">
                <button className="btnPadrao" onClick={add}>Adicionar</button>
                <button className="btnPadrao" onClick={sub}>Subtrair</button>
            </div>
        </div>
    )
}
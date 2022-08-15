
import { Itarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

function Item({ tarefa, tempo,selecionado,completado,id }: Itarefa ) {

    return (
        <li >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}
export default Item

import style from './Lista.module.scss'
import  Item  from './Item'
import { Itarefa } from '../../types/tarefa'



function Lista({tarefas}: {tarefas:Itarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (

                   /* <Item tarefa={item.tarefa}
                        tempo={item.tempo} /> OPÇÃO 1 */
                        <Item 
                        key={index}                           
                         {...item} /*ESSA É UMA SEGUNDA OPÇÃO */
                        />

                ))}

            </ul>
        </aside>
    )
}
export default Lista
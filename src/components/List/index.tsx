import { ITarefa } from "../../types/tarefa";
import Item from "./Item/Index";
import style from './List.module.scss';



function List({tarefas}: {tarefas: ITarefa[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) =>(
          <Item 
            key={index}
            {...item} //vai pegar tarefa e tempo de uma vez
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;

import React from "react";
import Item from "./Item/Index";
import style from './List.module.scss';

function List() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:00",
    }
  ];
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

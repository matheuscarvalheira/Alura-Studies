import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITarefa } from "../types/tarefa";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
       tarefas={tarefas}
       selecionaTarefa = {selecionaTarefa}
       />
      <Stopwatch />
    </div>
  );
}

export default App;

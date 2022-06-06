import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("state: " , this.state)
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adcione um novo estudo</label>
          <input type="text"
          name="tarefa"
          id="tarefa"
          value={this.state.tarefa}
          onChange={ e => this.setState({...this.state, tarefa: e.target.value })}
          placeholder="O que você quer estudar?"
          required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input type="time"
          step="1"
          name="tempo"
          value={this.state.tempo}
          onChange={ e => this.setState({...this.state, tempo: e.target.value })}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;

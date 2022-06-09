import { ITarefa } from '../../../types/tarefa';
import style from '../List.module.scss';


function Item({tarefa, tempo, selecionado, completado, id} : ITarefa) {
  console.log("Item atual: ", {tarefa, tempo, selecionado, completado, id})
  return (
    <li  className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}


export default Item;

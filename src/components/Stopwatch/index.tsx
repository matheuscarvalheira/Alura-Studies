import { tempoParaSegundos } from "../../common/utils/date";
import Button from "../Button";
import Clock from './Clock';
import style from './Stopwatch.module.scss';

export default function Stopwatch(){
  console.log('conversao: ', tempoParaSegundos('01:01:01'));
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro!</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>
        Começar
      </Button>
    </div>
  )
}
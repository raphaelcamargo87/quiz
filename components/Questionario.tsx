import QuestaoModel from "../model/questao"
import styles from "../styles/Questionario.module.css"
import Botao from "./Botao"
import Questao from "./Questao"

interface QuestionarioProps{
    questao: QuestaoModel
    ultimaPergunta: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irParaProximoPasso: () => void
}


export default function Questionario(props: QuestionarioProps){

    function respostaFornecida(indice: number){
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))        
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ? 
                <Questao 
                valor={props.questao}
                tempoParaResposta={5}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irParaProximoPasso}/>
            : false }
            
            <Botao onClick={props.irParaProximoPasso} 
                texto={props.ultimaPergunta ? "Finalizar" : "Próxima"}/>
        </div>
    )
}
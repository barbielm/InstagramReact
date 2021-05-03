export default function Suggestion(props){
    return(
        <div class="sugestao">
          <div class="usuario">
            <img src={`assets/img/${props.suggestion}.svg`} />
            <div class="texto">
              <div class="nome">{props.suggestion}</div>
              <div class="razao">{props.reason}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
    )
}
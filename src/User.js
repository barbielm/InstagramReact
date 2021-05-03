export default function User(props){
    return(
        <div class="usuario">
            <img src={`assets/img/${props.userAccount}.svg`} />
            <div class="texto">
              <strong>{props.userAccount}</strong>
              {props.nick}
            </div>
          </div>    
    )
}
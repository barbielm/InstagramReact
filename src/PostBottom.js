import PostBottomActions from './PostBottomActions'

export default function PostBottom(props){
    return(
        <div class="fundo">
            <PostBottomActions />

            <div class="curtidas">
                <img src={`assets/img/${props.curtidoPor}.svg`} />
                <div class="texto">
                Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                </div>
            </div>
        </div>
    )
}
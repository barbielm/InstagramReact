import PostTopActions from "./PostTopActions"

export default function PostTop(props){
    return(
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.user}.svg`} />
                {props.user}
            </div>
            <PostTopActions />
        </div>
    )
}
import PostTop from './PostTop';
import PostContent from './PostContent'
import PostBottom from './PostBottom'

export default function Post(props){
    return(
        <div class="post">
            <PostTop user={props.user} />
            <PostContent conteudo={props.conteudo} />
            <PostBottom curtidoPor={props.curtidoPor} curtidas={props.curtidas} />
      </div>
    )
}
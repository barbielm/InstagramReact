import Post from './Post'
const posts = [{user:"meowed", conteudo:"assets/img/gato-telefone.svg", curtidoPor:"respondeai", curtidas:"101.523"},
{user:"barked", conteudo:"assets/img/dog.svg", curtidoPor:"adorable_animals", curtidas:"99.159"}]

export default function Posts(){
    return(
        <div class="posts">
            {posts.map(post => <Post user={post.user}  conteudo={post.conteudo} curtidoPor={post.curtidoPor}  curtidas={post.curtidas} />)}
        </div>
    )
}
import Suggestion from './Suggestion'

const suggestions = [{suggestion:"bad.vibes.memes", reason:"Segue você"}, {suggestion:"chibirdart", reason:"Segue você"}, 
{suggestion:"razoesparaacreditar", reason:"Novo no Instagram"}, {suggestion:"adorable_animals", reason:"Segue você"}, {suggestion:"smallcutecats", reason:"Segue você"}]

export default function Suggestions(){
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(element => <Suggestion suggestion={element.suggestion} reason={element.reason} />)}
        </div>
    )
}
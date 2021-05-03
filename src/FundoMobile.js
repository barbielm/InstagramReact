import Icon from './Icon'
export default function FundoMobile(){
    return(<div class="fundo-mobile">
                <Icons />
            </div>)
}

function Icons(){
    return( 
        <>
            <Icon name="home" />
            <Icon name="search-outline" />
            <Icon name="add-circle-outline" />
            <Icon name="heart-outline" />
            <Icon name="person-outline" />
        </>
    )
}
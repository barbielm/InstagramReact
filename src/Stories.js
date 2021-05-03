import Story from './Story'
const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]


export default function Stories(){
    return(
        <div class="stories">
            {users.map(user => <Story user={user} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
      </div>
    )
}
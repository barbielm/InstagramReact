import User from './User'
import Suggestions from './Suggestions'
import Links from './Links'
import Copyright from './Copyright'

const user = {userAccount:"catanacomics", nick:"Catana"}

export default function Sidebar(){

    return(
        <div class="sidebar">
            <User userAccount={user.userAccount} nick={user.nick} />
            <Suggestions />
            <Links />
            <Copyright />
        </div>
    )
}
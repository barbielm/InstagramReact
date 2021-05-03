import LogoMobile from './LogoMobile'
import Logo from './Logo'
import InstagramMobile from './InstagramMobile'
import Pesquisa from './Pesquisa'
import Icons from './Icons'
import IconsMobile from './IconsMobile'

export default function Navbar(){
    return( <div class="navbar">
                <div class="container">
                    <Logo />
                    <LogoMobile />
                    <InstagramMobile />
                    <Pesquisa />
                    <Icons />
                    <IconsMobile />
                </div>
            </div>)
}
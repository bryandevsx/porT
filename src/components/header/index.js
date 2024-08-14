import './style.css';
import logo from '../../img/logo.png'
function Header(){
     return(

          <div className="header">
               <img className="logo" src={logo} alt="Logo"/>
          
               <div>
                    <ul className="itens">
                         <li>Sobre Mim</li>
                         <li>Currículo</li>
                         <li className="ctt">Contato</li>
                    </ul>
               </div>
          </div>
     )
}

export default Header;
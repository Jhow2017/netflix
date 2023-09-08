import LogoNetflix from '../../assets/logo.png'

const Header = ({ hideMenu }) => {

  return (

    <header className="row">
        <div className="col-2">
            <img src={LogoNetflix} alt="Logo Netflix"/>
        </div>
        {!hideMenu && (
          <div className="col-8">
            <ul className="menu_list">
                <li>
                <a href="#">Início</a>
                </li>
                <li>
                <a href="#">Séries</a>
                </li>
                <li>
                <a href="#">Filmes</a>
                </li>
                <li>
                <a href="#">Mais Recentes</a>
                </li>
                <li>
                <a href="#">Minha lista</a>
                </li>
            </ul>
        </div>
        )
        }
    </header>

  );
}

export default Header;
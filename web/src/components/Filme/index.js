import CapaFilme from '../../assets/filmes/100.jpg'

const Filme = () => {
  return (
    <li className="filme" data-toggle="modal" data-target="#modal-filme">
        <img className="img-fluid" src={CapaFilme} alt="Imagem Logo"/>
        <div className="filme_info">
            <div className="col-12">
            <a
                href="#"
                className="btn-custom-round btn btn-light rounded-circle"
            >
                <span className="mdi mdi-play"></span>
            </a>
            <a
                href="#"
                className="btn-custom-round border-white btn rounded-circle opacity-50"
            >
                <span className="mdi mdi-thumb-up text-white"></span>
            </a>
            <a
                href="#"
                className="btn-custom-round border-white btn rounded-circle opacity-50"
            >
                <span className="mdi mdi-thumb-down text-white"></span>
            </a>
            <a
                href="#"
                className="btn-custom-round border-white btn rounded-circle opacity-50"
            >
                <span className="mdi mdi-plus text-white"></span>
            </a>
            </div>
            <p>T3:EP5 <text>"Meu Episódeo"</text></p>
        </div>
    </li>

  );
}

export default Filme;
import imagemFilmeModal  from '../../assets/diabo-de-cada-dia.png';
import Episodio from '../Episodio';

const ModalFilme = () => {
  return (
    <div className="modal fade" id="modal-filme">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-hero">
          <img src={imagemFilmeModal} />
          <div className="col-12 modal-hero-infos">
            <button className="btn btn-lg btn-custom-white">
              <span className="mdi mdi-play"></span> Assistir
            </button>
            <a
              href="#"
              className="btn-custom-round btn btn-lg btn-light rounded-circle"
            >
              <span className="mdi mdi-play"></span>
            </a>
            <a
              href="#"
              className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
            >
              <span className="mdi mdi-thumb-up text-white"></span>
            </a>
            <a
              href="#"
              className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
            >
              <span className="mdi mdi-thumb-down text-white"></span>
            </a>
          </div>
        </div>
        <div className="modal-infos">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <p className="filme_descricao">
                  Pregadores Profanos. Autoridades Corruptas. Amantes
                  Assassinos. Numa cidade cheia de pecadores, um jovem busca
                  justiça.
                </p>
              </div>
              <div className="col-5">
                <p className="filme_elenco">
                  Elenco:
                  <text
                    >Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael
                    Lopes.</text
                  >
                  <br />
                  <br />
                  Gêneros: <text>Ação, Aventura, Dramático. </text>
                  <br />
                  <br />
                  Cenas e momentos: <text>Violentos.</text>
                </p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-7">
                <h3 className="text-white">Episódes</h3>
              </div>
              <div className="col-5 text-right">
                <select className="form-control">
                  <option>Temporada 1</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <ul id="lista_episodeos">
                <Episodio/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ModalFilme;
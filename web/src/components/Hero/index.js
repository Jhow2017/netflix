import ImagemCapaHero from '../../assets/diabo-de-cada-dia.png';
import ImagemTopHero from '../../assets/badge-top-10.png';

const Hero = () => {
  return (
    <div id="hero" className="container-fluid">
        <div className="container">
            <div className="row" id="hero_infos">
                <div className="col-6">
                    <img className="logo" src={ImagemCapaHero} />
                    <h1 className="text-white">
                      <img src={ImagemTopHero}/>Top 1 de hoje no Brasil.
                    </h1>
                    <p className="text-white">
                      Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos.
                      Numa cidade cheia de pecadores, um jovem busca justiça.
                    </p>
                    <br />
                    <button className="btn btn-lg btn-custom-white">
                      <span className="mdi mdi-play"></span> Assistir
                    </button>
                    <button className="btn btn-lg btn-custom-translucent">
                      <span className="mdi mdi-information-outline"></span> Mais Informações
                    </button>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Hero;
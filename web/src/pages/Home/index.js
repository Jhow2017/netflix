import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Secao from '../../components/Secao';


const Home = () => {

    return (
        <>

        <ModalFilme/>
        
        <div className="container-fluid">
            <Header/>
        </div>

        <Hero/>

        <div id="main-content">
            <Secao/>
        </div>  

        </>
    );
}
export default Home;
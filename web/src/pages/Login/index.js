import React, {useState} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

const Login = () => {

    const [credencias, setCredencias] = useState({
        email: '',
        senha:'',
    });

    const login = () => {
        try {

            const response =  api.post('/usuario/login', credencias);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            localStorage.setItem('@user', JSON.stringify(res.usuario))
            window.location.reload();

        } catch (err){
            alert(err.message);
        }
    }

    return (
        <div 
            className="container-fluid bg_filmes"
            style={{
                position: 'fixed',
                height: '100%',
            }}
        >
            <Header hideMenu/>
            <div id="caixa_login" className="col-4 offset-4">
                <h1 className="text-white">Entrar</h1>
                <br />
                <>
                    
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email ou número de telefone"
                        onChange={(e) => {
                            setCredencias({
                                ... credencias,
                                email: e.target.value,
                            })
                        }}
                    />

                    <br />

                    <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Senha"
                        onChange={(e) => {
                            setCredencias({
                                ... credencias,
                                senha: e.target.value,
                            })
                        }}
                    />

                    <br />

                    <button className="btn btn-lg btn-block btn-danger" onClick={login}>Entrar</button>
                    
                    <div className="row mt-4">
                        <div className="col text-muted">
                            <input type="checkbox" /> Lembrar de mim.
                        </div>
                        <div className="col text-right">
                            <a href="link" className="text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Login;
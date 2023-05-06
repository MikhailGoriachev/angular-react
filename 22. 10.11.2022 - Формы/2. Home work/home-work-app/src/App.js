import logo from './images/icon.svg';
import './App.css';

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top shadow">
                <div className="container-fluid justify-content-center">

                    <a className="navbar-brand mx-2" href="#">
                        <img className="logo" src={logo} alt="logo"/>
                    </a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link mx-3 active" href="#">
                                    Задание
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
                <h4 className="text-center">Задание 2. Погода</h4>

                <div className="card w-22rem col m-2 shadow">

                    <div className="card-header">
                        <h5 className="text-center">Статистика в Донецке</h5>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Минимум: <b>-31&#176;</b></li>
                        <li className="list-group-item">Максимум: <b>+41&#176;</b></li>
                    </ul>
                    
                </div>
                
            </section>
        </>
    );
}

export default App;

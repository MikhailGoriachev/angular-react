// навигационный компонент
function Navigation() {

    let activeClass = ({isActive}) => `nav-link mx-3 ${isActive ? 'active' : ''}`;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top shadow">
            <div className="container-fluid justify-content-center">

                <NavLink className="navbar-brand mx-2" to='/'>
                    <img className="logo" src="images/icon.svg" alt="logo"/>
                </NavLink>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink className={activeClass} to='/'>
                                Главная
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={activeClass} to='/task01'>
                                Компоненты
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className={activeClass} to='/appointments'>
                                Медицинские приёмы
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
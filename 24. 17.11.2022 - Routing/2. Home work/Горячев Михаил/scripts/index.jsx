// одработка страницы "index.html"

const Outlet = ReactRouterDOM.Outlet;

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;
const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;

// вывод навигации
ReactDOM.createRoot(document.querySelector("#app")).render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/task01' element={<Task01/>}/>
            <Route path='/appointments' element={<Appointments/>}>
                <Route index element={<AppointmentList/>}/>
                <Route path='form' element={<AppointmentForm/>}/>
                <Route path='details/:id' element={<AppointmentDetails/>}/>
            </Route>
        </Routes>
    </Router>
);
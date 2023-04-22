
import { Outlet, Link } from "react-router-dom"
import './styles.css';
const Main = () => (
    <>
        <header id="main-header">
            <nav id="main-nav">
                <ul>
                    <li><Link to='encuesta'>Encuesta</Link></li>
                    <li><Link to='resultados'>Resultados</Link></li>
                    <li><Link to='referencia'>Referencia</Link></li>
                </ul>
            </nav>
        </header>
        <main>
<div id="content">
            <Outlet />
            </div>
        </main>
    </>
);
export default Main;

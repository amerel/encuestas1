import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Reference from './pages/Reference';
import Encuesta from './pages/Encuesta1';
import Main from './pages/Main';
import Resultados from './pages/Resultados';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="encuesta" element={<Encuesta />} />
      <Route path="referencia" element={<Reference />} />
      <Route path="resultados" element={<Resultados />} />
    </Route>
  ))
function App() {
  return (
    <RouterProvider router={router} />)
}
export default App

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import LoginForm from './paginas/LoginForm'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import VerCliente from './paginas/VerCliente'

function App() {



  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<NuevoCliente/>}/>
      </Route>

      <Route path='/clientes' element={<Layout/>}>
        <Route index element={<Inicio/>}/>
        <Route path='nuevo' element={<NuevoCliente/>}/>
        <Route path='editar/:id' element={<EditarCliente/>}/>
        <Route path=':id' element={<VerCliente/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App

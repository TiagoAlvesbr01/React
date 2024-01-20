import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Main from './pages/Main';
import Contato from './pages/Contato'
import SobreEmpresa from './pages/SobreEmpresa'

function Casa() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/sobre-empresa' element={<SobreEmpresa/>} />
                <Route path='/contato' element={<Contato/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Casa;
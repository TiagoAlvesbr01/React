import React from 'reat';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main';
import Contato from './pages/Contato'
import SobreEmpresa from './pages/SobreEmpresa'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact Component={Main} />
                <Route path="/sobre-empresa" Component={SobreEmpresa} />
                <Route path="/contato" Component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
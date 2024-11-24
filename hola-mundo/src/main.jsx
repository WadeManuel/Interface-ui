import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import './index.css'
/*Los nombres de nuestros componentes siempren deben de ser en Passcalquey*/ 


const root=createRoot(document.getElementById('root'))
root.render(
  /*Con el React Fragmment Podemos tener mas de un boton por que solo permite uno por que solo recive como parametro un
  elemnto el render por tanto  da error tener mas de dos button es codigo js con transpilador swc*/
  

      <App/>
 
)

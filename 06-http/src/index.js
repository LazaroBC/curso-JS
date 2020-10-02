//const { init } = require("./js/chistes-page");
//init(); 

/* const { obtenerUsuarios } = require("./js/http-provider");
import {init} from './js/usuarios-page';

obtenerUsuarios().then(console.log);

init(); */

/* import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name:'Lázaro',
    job: 'Informático'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'Melisa',
    job:'Developer'
}).then(console.log);

CRUD.borrarUsuario( 1 ).then(console.log); */

import {init} from './js/archivos-page';

init();
class Clients{
    constructor(){

    }
}
const add = document.querySelector('.add');
const remove = document.querySelector('.delete');
const title = document.querySelector('#title');
const enviar = document.querySelector('#enviar');
const formCliente = document.querySelector('.clientForm form');

add.addEventListener('click', () => {
    title.textContent = 'Añadir persona';
    enviar.textContent = 'Añadir';
})
document.querySelectorAll('.edit').forEach( e => {
    e.addEventListener('click', () => {
        title.textContent = 'Editar persona';
        enviar.textContent = 'Editar';
    })
})
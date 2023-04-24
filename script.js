console.log("cargo el Script");
const arr=[];
function crearTabla(){
    
const listado = document.getElementById('listado');
let r = arr.filter(arr =>{
       console.log(arr.results[0].gender);
    return arr.results[0].gender === "male";

}),
m = arr.filter(arr =>{
    console.log(arr.results[0].gender);
 return arr.results[0].gender === "female";

});


       
       const fila = `<tr><td>${r[0].results[0].name.first}
                        ${r[0].results[0].name.last}
                        <img src="${r[0].results[0].picture.medium}"</td>
                        
                        <td>${m[0].results[0].name.first}
                        ${m[0].results[0].name.last}
                        <img src="${m[0].results[0].picture.medium}"</td>
                        </tr>
                        `
                        
                        
                        listado.innerHTML += fila;
  console.log(r);

}
async function cargar(){
  let cant = document.getElementById('cantidad').value;
  console.log(cant);
 for(let i=0; i < cant ; i++){
  await  fetch(`https://randomuser.me/api/`)
    .then(res=>res.json())
    .then(usuario=>arr.push(usuario));
      
  }
  crearTabla();
  console.log(arr);
  
}
function eliminar(id){

    fila =fila.getElementById(id);
    fila.parentNode.removeChild(fila);
}
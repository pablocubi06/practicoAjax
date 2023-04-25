console.log("cargo el Script");
const arr=[];

function crearTabla(){
  let fila='' ;
const listado = document.getElementById('listado');
let r = arr.filter(arr =>{
       ;
    return arr.results[0].gender === "male";

}),
m = arr.filter(arr =>{
     return arr.results[0].gender === "female";

});

  for(let i=0;i < document.getElementById('cantidad').value; i++ ){
      
    if(r[i]!== undefined && m[i]!== undefined){

      fila += `<tr><td><p><img src="${r[i].results[0].picture.medium}" float ="rigth">
                        ${r[i].results[0].name.first}
                        ${r[i].results[0].name.last}<br>
                        ${r[i].results[0].email}
                        </p></td>
                        <td><p ><img src="${m[i].results[0].picture.medium}" float ="rigth">
                        ${m[i].results[0].name.first}
                        ${m[i].results[0].name.last}<br>
                        ${m[i].results[0].email}
                        </p></td>
                        </tr>       
                        `;
    }else 
    if(r[i]!== undefined && m[i]=== undefined){

      fila += `<tr><p><img src="${r[i].results[0].picture.medium}" float ="rigth">
                      ${r[i].results[0].name.first}
                      ${r[i].results[0].name.last}<br>
                       ${r[i].results[0].email}
                        </p></tr>
                        <td> </td>
                        </tr>`;
    }
   else 
   if(r[i]=== undefined && m[i]!== undefined){

      fila += `<tr><td> </td>
                   <td><p><img src="${m[i].results[0].picture.medium}" float ="rigth">
                        ${m[i].results[0].name.first}
                        ${m[i].results[0].name.last}<br>
                        ${m[i].results[0].email}
                        </p></td>
                        </tr>       
                        `;
    }else {i=document.getElementById(`cantidad`);}


  }
       
                            
                        
                        listado.innerHTML += fila;


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
  document.getElementById('cantidad').value = '';
  
}
function eliminar(id){

    fila =fila.getElementById(id);
    fila.parentNode.removeChild(fila);
}
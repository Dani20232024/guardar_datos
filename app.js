
let allPersons = [];

function guardarPersona(){
    let formNombre = document.getElementById('nombre').value;
    let formPrecio = document.getElementById('precio').value;
    let formDescripcion = document.getElementById('descripcion').value;
    
    let persona = {
        nombre : formNombre,
        precio : formPrecio,
        descripcion :formDescripcion
    }
    
    allPersons.push(persona)
    console.log(allPersons);
 
 if (formNombre!=""){
   document.getElementById("nombre").classList.add('is-valid');
   document.getElementById("nombre").classList.remove('is-invalid');
   } else {
      document.getElementById("nombre").classList.add('is-invalid');
      document.getElementById("nombre").classList.remove('is-valid');
   }
 if (formPrecio!=""){
   document.getElementById("precio").classList.add('is-valid');
   document.getElementById("precio").classList.remove('is-invalid');
   
   } else {
      document.getElementById("precio").classList.remove('is-valid');
      document.getElementById("precio").classList.add('is-invalid');
   
   }
 if (formDescripcion!=""){
      document.getElementById("descripcion").classList.add('is-valid');
      document.getElementById("descripcion").classList.remove('is-invalid');
      
      } else {
         document.getElementById("descripcion").classList.remove('is-valid');
         document.getElementById("descripcion").classList.add('is-invalid');
      
      }

    

        let data_tablita = document.getElementById('tablita')
        allPersons.forEach((data)=>{

         const nuevaData = document.createElement('tr')
         const plantilla = `
         
         <td>${data.nombre}</td>
         <td>${data.precio}</td>
         <td>${data.descripcion}</td>
         <td><a href="" class="btn btn-danger btn-sm">Eliminar</a></td>
         
         
         `
         nuevaData.innerHTML = plantilla
         nuevaData.dataset.data = data 
         data_tablita.append(nuevaData)

        })
        allPersons = []
  }


document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const enviar = document.getElementById('enviar');
  const resultParagraph = document.getElementById('resultado');

  async function reconocerImagen(file) {
    const url = 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/';
    const formData = new FormData();
    formData.append('srcImg', file);
    formData.append('Session', 'string');

    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'd819d75ef2msh1b6b8c20e832adbp18c059jsnf3197efd1407',
        'x-rapidapi-host': 'pen-to-print-handwriting-ocr.p.rapidapi.com'
      },
      body: formData
    };

    try {
      const response = await fetch(url, options);//genero la respuesta de la API
      const result = await response.json();//parseo a JSON
      resultParagraph.textContent = result.value;//agarro el value que es el txt traducido
     
      //console.log(resultParagraph);//resultado 
    } catch (error) {
      console.error('Error:', error);
      resultParagraph.textContent = 'Ocurrió un error al procesar la imagen.';
    }
  }

  enviar.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
      reconocerImagen(file);
    } else {
      alert('Por favor selecciona un archivo.');
    }
  });
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Aquí puedes agregar la lógica para manejar el archivo seleccionado
    const fileInput = document.getElementById('fileInput');
    const archivo = fileInput.files[0];

    // Por ejemplo, mostrar el nombre del archivo en el textarea
    if (archivo) {
      if(resultParagraph.lengh>0)  
      {
        document.getElementById('resultado').value = resultParagraph.textContent;
      }else
      {
        document.getElementById('resultado').value = "La API se quedo sin pruebas FREE";
      }
    } else {
        document.getElementById('resultado').value = "No se ha seleccionado ningún archivo";
    }
});
});


  
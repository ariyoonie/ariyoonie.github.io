const estadosPorPais = {
  'Mexico': ['Jalisco', 'Nuevo León', 'Veracruz'],
  'Korea': ['Seoul', 'Busan', 'Incheon']
};

const municipiosPorEstado = {
  'Jalisco': ['Guadalajara', 'Zapopan', 'Tlaquepaque'],
  'Nuevo León': ['Monterrey', 'San Nicolás', 'Escobedo'],
  'Veracruz': ['Xalapa', 'Veracruz', 'Córdoba'],
  'Seoul': ['Jung-gu', 'Gangnam-gu', 'Mapo-gu'],
  'Busan': ['Hybe', 'Haeundae-gu', 'Saha-gu'],
  'Incheon': ['Jung-gu', 'Namdong-gu', 'Bupyeong-gu']
};

const localidadesPorMunicipio = {
  'Guadalajara': ['Zona Centro', 'Providencia', 'Chapalita'],
  'Zapopan': ['Ciudad Judicial', 'Tetlán', 'Lomas Altas'],
  'Tlaquepaque': ['Centro Histórico', 'Santa María', 'San Pedro'],
  'Monterrey': ['Centro', 'Contry', 'Cumbres'],
  'San Nicolás': ['Anáhuac', 'La Fe', 'Colonia Topo Chico'],
  'Escobedo': ['Centro', 'Del Maestro', 'Nuevo Repueblo'],
  'Xalapa': ['Centro', 'Coapexpan', 'Ejido 6 de Enero'],
  'Veracruz': ['Boca del Río', 'Centro', 'Colonia Carranza'],
  'Córdoba': ['Centro', 'San José', 'Colonia Modelo'],
  'Jung-gu': ['Myeongdong', 'Dongdaemun', 'Itaewon'],
  'Gangnam-gu': ['Apgujeong', 'Sinsa-dong', 'Cheongdam-dong'],
  'Saha-gu': ['Hybe', 'Haeundae-gu', 'Saha-gu'], 
  'Haeundae-gu': ['Haeundae Beach', 'Dalmaji Hill', 'Centum City'], 
  'Bupyeong-gu': ['Bupyeong Central', 'Juan-dong', 'Ganseok-dong'], 
  'Namdong-gu': ['Namdong Industrial Complex', 'Juan 4-dong', 'Juan 7-dong'] 
};



// Resto del código permanece igual



  function cargarEstados() {
    const paisSelect = document.getElementById('paisSelect');
    const estadoSelect = document.getElementById('estadoSelect');
  
    const paisSeleccionado = paisSelect.value;
    const estados = estadosPorPais[paisSeleccionado];
  
  
    estadoSelect.innerHTML = '';
  
    for (const estado of estados) {
      const option = document.createElement('option');
      option.value = estado;
      option.text = estado;
      estadoSelect.add(option);
    }
  }
  
  function cargarMunicipios() {
    const estadoSelect = document.getElementById('estadoSelect');
    const municipioSelect = document.getElementById('municipioSelect');
  
    const estadoSeleccionado = estadoSelect.value;
    const municipios = municipiosPorEstado[estadoSeleccionado];
  
    
    municipioSelect.innerHTML = '';
  
   
    for (const municipio of municipios) {
      const option = document.createElement('option');
      option.value = municipio;
      option.text = municipio;
      municipioSelect.add(option);
    }
  }
  
  function cargarLocalidades() {
    const municipioSelect = document.getElementById('municipioSelect');
    const localidadSelect = document.getElementById('localidadSelect');
  
    const municipioSeleccionado = municipioSelect.value;
    const localidades = localidadesPorMunicipio[municipioSeleccionado];
  
 
    localidadSelect.innerHTML = '';
  
   
    for (const localidad of localidades) {
      const option = document.createElement('option');
      option.value = localidad;
      option.text = localidad;
      localidadSelect.add(option);
    }
  }
  
  function mostrarSeleccion() {
    const paisSeleccionado = document.getElementById('paisSelect').value;
    const estadoSeleccionado = document.getElementById('estadoSelect').value;
    const municipioSeleccionado = document.getElementById('municipioSelect').value;
    const localidadSeleccionada = document.getElementById('localidadSelect').value;
  
    document.getElementById('paisSeleccionado').innerText = `País: ${paisSeleccionado}`;
    document.getElementById('estadoSeleccionado').innerText = `Estado: ${estadoSeleccionado}`;
    document.getElementById('municipioSeleccionado').innerText = `Municipio: ${municipioSeleccionado}`;
    document.getElementById('localidadSeleccionada').innerText = `Localidad: ${localidadSeleccionada}`;
  
    document.getElementById('resultado').style.display = 'block';
  }
  



  
var videos=[
    {titulo: 'Video 1',descripcion: 'Descripción video 1', url: 'https://www.youtube.com/embed/qedonJosQ3g'},
    {titulo: 'Video 2',descripcion: 'Descripción video 2', url: "https://www.youtube.com/embed/JsYvBibzY30"},
    {titulo: 'Video 3',descripcion: 'Descripción video 3', url: 'https://www.youtube.com/embed/qedonJosQ3g'},
    {titulo: 'Video 4',descripcion: 'Descripción video 4', url: 'https://www.youtube.com/embed/qedonJosQ3g'}
];



var listaVideos=document.getElementById('listaVideosArreglo');

mostrarListavideos(videos);

function mostrarListavideos(videosBuscados){
    listaVideos.innerHTML="";
    videosBuscados.forEach(indiceVideo=>{

        var fila=document.createElement('div');
        var colUrlVideo=document.createElement('div');
        var iframeVideo=document.createElement('iframe');
        fila.setAttribute('class','row');
        colUrlVideo.setAttribute('class','col');
        iframeVideo.setAttribute('src',indiceVideo.url);
        iframeVideo.setAttribute('width','400px');
        iframeVideo.setAttribute('height','400px');
        iframeVideo.setAttribute('frameborder','0');
        colUrlVideo.appendChild(iframeVideo);
        fila.appendChild(colUrlVideo);

        //Crear div para el titulo y descripcion del video (columana 2)
        var col2TituloVideo=document.createElement('div');
        var h4TituloVideo=document.createElement('h4');
        var h6DescripcionVideo=document.createElement('h6');

        col2TituloVideo.setAttribute('class','col');
        h4TituloVideo.textContent=indiceVideo.titulo;
        h6DescripcionVideo.textContent=indiceVideo.descripcion;

        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        //Crear cOLUNMA 3

        var col3BotonVideo = document.createElement('div');
        var botonVideo = document.createElement('button');

        col3BotonVideo.setAttribute('class','col');
        botonVideo.setAttribute('class','btn btn-outline-primary');

        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);

        listaVideos.appendChild(fila);
    });
}


function buscarVideos() {
    var textoVideo=document.getElementById('txtBuscar').value;
    //alert('texto buscado' + textoVideo);
    var videosBuscados=videos.filter(
        indiceVideo=>{
            return indiceVideo.titulo.includes(textoVideo);

        }
    );
    mostrarListavideos(videosBuscados);
}
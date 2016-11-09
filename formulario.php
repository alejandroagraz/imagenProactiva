<!DOCTYPE html>
<html>
    <head>       
        <meta charset="utf-8">

        <title>Ejemplo del uso de formularios - aprenderaprogramar.com</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

        <script type="text/javascript">

$(document).ready(function() {
  $('#respuesta').hide();
  $('#myform').submit(function(evento) {
    $('#respuesta').hide();
    evento.preventDefault();
    var datos_formulario = $(this).serialize();
    $.ajax({
      url: 'accionform.php',
      data: datos_formulario,
      type: 'POST',
      dataType: 'json',
      success: function(datos) {
        $('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datos, null, 4));
       // $('#respuesta').text(datos.respuesta).fadeIn('slow');
      }
    });
  });
});



/*
			$(document).ready(function() {
			 
			 	 //$( "#enviar" ).click(function() {
			     $( "#enviar" ).click(function() {

			     	alert("daticaaaaa");
			     	
					$.ajax({
					   type: "POST",
					   url: index.php,
					   async: false,
					   data: JSON.stringify($('#myform').serializeArray()),
					   success: function(data){
					   	alert("exitoso");
					      console.log(data);
					      return true;
					   },
					   complete: function() {},
					   error: function(xhr, textStatus, errorThrown) {
					   	alert("errores");
					     console.log('ajax loading error...');
					     return false;
					   }
					});
*/

       </script>

    </head>

<body>

<section id="contenedor-formulario">	
<form id ="myform">

<label for="nombre">Nombre: </label>
<input type="text" name="nombre" id="nombre">
<br/> <br/>
<label for="apellido">Apellido: </label>
<input type="text" name="apellido" id="nombre1">
<br/> <br/>
<label for="email">Email: </label>
<input type="text" name="email" id="email">
<br/> <br/>
<input type="radio" name="sexo" id="varon" value="Varón">
<label for="varon">Varón: </label>
<br/> <br/>
<input type="radio" name="sexo" id="mujer" value="Mujer">
<label for="mujer">Mujer: </label>
<br/> <br/>
<button type="submit">Enviar</button>
</form>
</section>

<section id="ImprimeAcaLoRecibidoEnPhp"> 

</section>  

<section id="respuesta">

</section>  

</form>
</body>
</html>
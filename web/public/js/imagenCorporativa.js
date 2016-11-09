

if  (window.location == "https://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/form/checkbox") { // =========>> Ruta para crear checkbox aca puede probar lo que hace el codigo<<===========

    window.onload = funcion_primera;

// =========>> Genera el primer input checkbox y label al cargar el documento <<===========
        function funcion_primera () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class='fieldwrapper' id=\"field" + intId + "\"/>");
            var fQuestion = $(" <label for='question'>Indique la pregunta</label> <br> <input type='text' class='fieldnameQuestion'  placeholder=' Introduzca Preg '> <br> ");  
            var fName = $("<input type='text' class='fieldname'  placeholder='Nombre del campo' />");
            var fType = $("<select class='fieldtype'> <option value='checkbox'>Checked</option></select>");
            $(fType).css("display", "none");
            var removeButton = $("<input type='button' class='remove' value='Remove' />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fQuestion);
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        };

// =========>> Genera input y label al dar click en el boton add <<===========

    $(document).ready(function() {
  
        $("#add").click(function() {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fName = $("<input type='text' class='fieldname'  placeholder='Nombre del campo' />");
            var fType = $("<select class='fieldtype'> <option value='checkbox'>Checked</option></select>");
            $(fType).css("display", "none");
            var removeButton = $("<input type='button' class='remove' value='Remove' />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        });


// =========>> Genera los input checkbox y label (previamente definidos con el boton add) en el formulario <<===========
        $("#preview").click(function() {
            $("#yourform").remove();
            var fieldSet = $("<fieldset id='yourform'><legend>Your Form</legend></fieldset>");

            $("#buildyourform div").each(function() {

                var id = "input" + $(this).attr("id").replace("field","");

                if ( $(this).find("input.fieldnameQuestion").first().val()) {
                    
                    var idd = "Question"; //+ Math.floor(Math.random() * 11) ;
                    var labelQ = $("<label for=\"" + idd + "\">" + 'Question : ' + $(this).find("input.fieldnameQuestion").first().val() + '?' + "</label>");
                    var inputQ = $("<input type=\"text\" id=\"" + idd + "\" name=\"" + idd + "\" value=\"" + $(this).find("input.fieldnameQuestion").first().val() + "\" style='display:none'  />");


                } else {
                    var labelQ = "";
                }   

                var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
                    
                var input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" value=\"" + $(this).find("input.fieldname").first().val() + "\" />");

                fieldSet.append(labelQ);
                fieldSet.append(inputQ);
                fieldSet.append(label);
                fieldSet.append(input);
            });
            $("#div_2").append(fieldSet);
        });


 // ===================>>>>>>   Inicio peticion ajax  <<<<<<============================


            $('#save').click(function(evento) {
                //$('#respuesta').hide();
                    evento.preventDefault();
                    
                    var datos_formulario = $('#form').serializeArray();

                    //alert("Datos a enviar al controlador. " + $('#form').serialize());
                $.ajax({
                    url: create,
                    type: 'POST',                    
                    data: JSON.stringify(datos_formulario),
                    dataType: 'JSON',
                    success: function(datosRecibidos) {
                        $('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datosRecibidos, null, 4));
                        // $('#respuesta').text(datos.respuesta).fadeIn('slow');
                    }
                });
            });
// ===================>>>>>>   Fin peticion ajax  <<<<<<============================            
    });

} else if (window.location == "https://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/form/radio") { // =========>> Ruta para generar radio aun no funciona <<===========

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $(" <label for='question'>Indique la pregunta</label> <br> <input type='text' class='fieldnameQuestion'  placeholder=' Introduzca Preg '> <br> "); 
            var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\" Nombre del campo\" />");
            var fType = $("<select class=\"fieldtype\"> <option value=\"radio\">Radio Button</option> </select>");
            $(fType).css("display", "none");
            var removeButton = $("<input type=\"button\" class=\"remove\" value=\"Remove\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fQuestion);
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        };

    $(document).ready(function() {

        $("#add").click(function() {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\" Nombre del campo \" />");
            var fType = $("<select class=\"fieldtype\"> <option value=\"radio\">Radio Button</option> </select>");
            $(fType).css("display", "none");
            var removeButton = $("<input type=\"button\" class=\"remove\" value=\"Remove\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        });

        $("#preview").click(function() {
            $("#yourform").remove();
            var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");

            $("#buildyourform div").each(function() {

                var id = "input" + $(this).attr("id").replace("field","");

                if ( $(this).find("input.fieldnameQuestion").first().val()) {
                    
                     var idd = "Question"; //+ Math.floor(Math.random() * 11) ;
                    var labelQ = $("<label for=\"" + idd + "\">" + 'Question : ' + $(this).find("input.fieldnameQuestion").first().val() + '?' + "</label>");
                    var inputQ = $("<input type=\"text\" id=\"" + idd + "\" name=\"" + idd + "\" value=\"" + $(this).find("input.fieldnameQuestion").first().val() + "\" style='display:none'  />");
                    
                } else {
                    var labelQ = "";
                }   

                var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");

                var input = $("<input type='radio' id='radio' name='radio' value=\"" + $(this).find("input.fieldname").first().val() + "\" />");

                fieldSet.append(labelQ);
                fieldSet.append(inputQ);
                fieldSet.append(label);
                fieldSet.append(input);
            });
            $("#div_2").append(fieldSet);
        });
        
        
 // ===================>>>>>>   Inicio peticion ajax  <<<<<<============================


            $('#save').click(function(evento) {
                //$('#respuesta').hide();
                    evento.preventDefault();
                    
                    var datos_formulario = $('#form').serializeArray();

                    //alert("Datos a enviar al controlador. " + $('#form').serialize());
                $.ajax({
                    url: create,
                    type: 'POST',                    
                    data: JSON.stringify(datos_formulario),
                    dataType: 'JSON',
                    success: function(datosRecibidos) {
                        $('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datosRecibidos, null, 4));
                        // $('#respuesta').text(datos.respuesta).fadeIn('slow');
                    }
                });
            });
// ===================>>>>>>   Fin peticion ajax  <<<<<<============================            
    });

} else if (window.location == "https://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/form/text") {

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $(" <label for='question'>Indique la pregunta</label> <br> <input type='text' class='fieldnameQuestion'  placeholder=' Introduzca Preg '> <br> ");    
            var fName = $("<input type='text' class='fieldname'  placeholder=' Nombre del campo' />");
            var fType = $("<select class=\"fieldtype\"> <option value=\"textarea\">Text Area</option></select>");
            $(fType).css("display", "none");
            var removeButton = $("<input type=\"button\" class=\"remove\" value=\"Remove\" />");
            removeButton.click(function() {
                $(this).parent().remove();
            });
            fieldWrapper.append(fQuestion);
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            fieldWrapper.append(removeButton);
            $("#buildyourform").append(fieldWrapper);
        };

        $(document).ready(function() {

            $("#add").click(function() {
                var intId = $("#buildyourform div").length + 1;
                var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
                var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\" Nombre del campo \" />");
                var fType = $("<select class=\"fieldtype\"> <option value=\"textarea\">Text Area</option> /select>");
                $(fType).css("display", "none");
                var removeButton = $("<input type=\"button\" class=\"remove\" value=\"Remove\" />");
                removeButton.click(function() {
                    $(this).parent().remove();
                });
                fieldWrapper.append(fName);
                fieldWrapper.append(fType);
                fieldWrapper.append(removeButton);
                $("#buildyourform").append(fieldWrapper);
            });

            $("#preview").click(function() {
                $("#yourform").remove();
                var fieldSet = $("<fieldset id=\"yourform\"><legend>Your Form</legend></fieldset>");

                    $("#buildyourform div").each(function() {

                        var id = "input" + $(this).attr("id").replace("field","");

                        if ( $(this).find("input.fieldnameQuestion").first().val()) {
                            
                            var idd = "Question"; //+ Math.floor(Math.random() * 11) ;
                            var labelQ = $("<label for=\"" + idd + "\">" + 'Question : ' + $(this).find("input.fieldnameQuestion").first().val() + '?' + "</label>");
                            var inputQ = $("<input type=\"text\" id=\"" + idd + "\" name=\"" + idd + "\" value=\"" + $(this).find("input.fieldnameQuestion").first().val() + "\" style='display:none'  />");

                        } else {
                            var labelQ = "";
                        }   

                        var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
                            
                        var input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");

                        fieldSet.append(labelQ);
                        fieldSet.append(inputQ);
                        fieldSet.append(label);
                        fieldSet.append(input);
                    });
                $("#div_2").append(fieldSet);
            });
            
 // ===================>>>>>>   Inicio peticion ajax  <<<<<<============================


            $('#save').click(function(evento) {
                //$('#respuesta').hide();
                    evento.preventDefault();
                    
                    var datos_formulario = $('#form').serializeArray();

                    //alert("Datos a enviar al controlador. " + $('#form').serialize());
                $.ajax({
                    url: create,
                    type: 'POST',                    
                    data: JSON.stringify(datos_formulario),
                    dataType: 'JSON',
                    success: function(datosRecibidos) {
                        $('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datosRecibidos, null, 4));
                        // $('#respuesta').text(datos.respuesta).fadeIn('slow');
                    }
                });
            });
// ===================>>>>>>   Fin peticion ajax  <<<<<<============================            
    });
}

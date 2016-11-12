

if  (window.location == "http://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/checkbox") { // =========>> Ruta para crear checkbox aca puede probar lo que hace el codigo<<===========

    window.onload = auto_shoot;

// =========>> Genera el primer input checkbox y label al cargar el documento <<===========
        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class='fieldwrapper' id=\"field" + intId + "\"/>");
            var fQuestion = $(" <label for='question'>Enter Question</label> <br> <input type='text' class='fieldnameQuestion'  placeholder='Define The Question'> <br> ");  
            var fName = $("<input type='text' class='fieldname'  placeholder='Field Name' />");
            var fType = $("<select class='fieldtype'> <option value='checkbox'>Checked</option></select>");
            $(fType).css("display", "none");
          

            fieldWrapper.append(fQuestion);
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            $("#buildyourform").append(fieldWrapper);
        };

// =========>> Genera input y label al dar click en el boton add <<===========

    $(document).ready(function() {
  
        $("#add").click(function() {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fName = $("<input type='text' class='fieldname'  placeholder='Field Name' />");
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

                var id = "checkbox" + $(this).attr("id").replace("field","");

                if ( $(this).find("input.fieldnameQuestion").first().val()) {
                    
                    var labelQ = $("<label>" + 'Question : ' + $(this).find("input.fieldnameQuestion").first().val() + '?' + "</label>");
                    var inputQ = $("<input type=\"text\" name='Question' value=\"" + $(this).find("input.fieldnameQuestion").first().val() + "\" style='display:none'  />");

                } else {
                    var labelQ = "";
                }   

                var label = $("<label>" + $(this).find("input.fieldname").first().val() + "</label>");
                    
                var input = $("<input type=\"checkbox\" name=\"" + id + "\" value=\"" + $(this).find("input.fieldname").first().val() + "\" />");

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
                        //alert("Datos almacenados correctamente.", location.reload());
                        confirmar=confirm("The data has been stored successfully, generate another question?"); 
                            if (confirmar) {
                                location.reload();
                            } else {
                                //alert('Nooo');
                                $(location).attr('href',redirect); 
                            }
                        
                        //$('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datosRecibidos, null, 4));
                        // $('#respuesta').text(datos.respuesta).fadeIn('slow');
                    }
                });
            });
// ===================>>>>>>   Fin peticion ajax  <<<<<<============================            
    });

} else if (window.location == "http://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/radio") { // =========>> Ruta para generar radio aun no funciona <<===========

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $(" <label for='question'>Enter Question</label> <br> <input type='text' class='fieldnameQuestion'  placeholder='Define The Question'> <br> "); 
            var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\"Field Name\" />");
            var fType = $("<select class=\"fieldtype\"> <option value=\"radio\">Radio Button</option> </select>");
            $(fType).css("display", "none");

            fieldWrapper.append(fQuestion);
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            $("#buildyourform").append(fieldWrapper);
        };

    $(document).ready(function() {

        $("#add").click(function() {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\"Field Name\" />");
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
                    
                    var labelQ = $("<label>" + 'Question : ' + $(this).find("input.fieldnameQuestion").first().val() + '?' + "</label>");
                    var inputQ = $("<input type=\"text\" name='Question' value=\"" + $(this).find("input.fieldnameQuestion").first().val() + "\" style='display:none'  />");
                    
                } else {
                    var labelQ = "";
                }   

                var label = $("<label>" + $(this).find("input.fieldname").first().val() + "</label>");

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
                        //alert("Datos almacenados correctamente.", location.reload());
                        confirmar=confirm("The data has been stored successfully, generate another question?"); 
                            if (confirmar) {
                                location.reload();
                            } else {
                                //alert('Nooo');
                                $(location).attr('href',redirect); 
                            }
                            
                        //$('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datosRecibidos, null, 4));
                        // $('#respuesta').text(datos.respuesta).fadeIn('slow');
                    }
                });
            });
// ===================>>>>>>   Fin peticion ajax  <<<<<<============================            
    });

} else if (window.location == "http://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/text") {

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $(" <label for='question'>Enter Question</label> <br> <input type='text' class='fieldnameQuestion'  placeholder=' Define The Question '> <br> ");    
            var fName = $("<input type='text' class='fieldname'  placeholder='Field Name' />");
            var fType = $("<select class=\"fieldtype\"> <option value=\"textarea\">Text Area</option></select>");
            $(fType).css("display", "none");

            fieldWrapper.append(fQuestion);
            fieldWrapper.append(fName);
            fieldWrapper.append(fType);
            $("#buildyourform").append(fieldWrapper);
        };

        $(document).ready(function() {

            $("#add").click(function() {
                var intId = $("#buildyourform div").length + 1;
                var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
                var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\"Field Name\" />");
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

                        var id = "textarea" + $(this).attr("id").replace("field","");

                        if ( $(this).find("input.fieldnameQuestion").first().val()) {
                            
                            var labelQ = $("<label>" + 'Question : ' + $(this).find("input.fieldnameQuestion").first().val() + '?' + "</label>");
                            var inputQ = $("<input type=\"text\" name='Question' value=\"" + $(this).find("input.fieldnameQuestion").first().val() + "\" style='display:none'  />");

                        } else {
                            var labelQ = "";
                        }   

                        var label = $("<label>" + $(this).find("input.fieldname").first().val() + "</label>");
                            
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
                        //alert("Datos almacenados correctamente.", location.reload());
                        confirmar=confirm("The data has been stored successfully, generate another question?"); 
                            if (confirmar) {
                                location.reload();
                            } else {
                                //alert('Nooo');
                                $(location).attr('href',redirect); 
                            }
                        
                        //$('#ImprimeAcaLoRecibidoEnPhp').text(JSON.stringify(datosRecibidos, null, 4));
                        // $('#respuesta').text(datos.respuesta).fadeIn('slow');
                    }
                });
            });
// ===================>>>>>>   Fin peticion ajax  <<<<<<============================            
    });
}
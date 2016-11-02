if  (window.location == "https://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/form/checkbox") {

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $("<input type='text' class='fieldnameQuestion'  placeholder=' Introduzca Preg '> <br> ");    
            var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\" Nombre del campo\" />");
            var fType = $("<select class=\"fieldtype\"> <option value=\"checkbox\">Checked</option></select>");
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
            var fType = $("<select class=\"fieldtype\"> <option value=\"checkbox\">Checked</option></select>");
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
                    
                    var labelQ = $("<label for=\"" + id + "\">" + $(this).find("input.fieldnameQuestion").first().val() + "</label>");
                } else {
                    var labelQ = "";
                }   

                var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
                    
                var input = $("<input type=\"checkbox\" id=\"" + id + "\" name=\"" + id + "\" />");

                fieldSet.append(labelQ);
                fieldSet.append(label);
                fieldSet.append(input);
            });
            $("#div_2").append(fieldSet);
        });
    });

} else if (window.location == "https://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/form/radio") {

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $("<input type='text' class='fieldnameQuestion'  placeholder=' Introduzca Preg '> <br> ");    
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
                    
                    var labelQ = $("<label for=\"" + id + "\">" + $(this).find("input.fieldnameQuestion").first().val() + "</label>");
                } else {
                    var labelQ = "";
                }   

                var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");

                var input = $("<input type='radio' id='radio1' name='radio1' />");
                
                fieldSet.append(labelQ);
                fieldSet.append(label);
                fieldSet.append(input);
            });
            $("#div_2").append(fieldSet);
        });
    });

} else if (window.location == "https://imagen-proactiva-joseagraz.c9users.io/web/app_dev.php/form/text") {

    window.onload = auto_shoot;

        function auto_shoot () {
            var intId = $("#buildyourform div").length + 1;
            var fieldWrapper = $("<div class=\"fieldwrapper\" id=\"field" + intId + "\"/>");
            var fQuestion = $("<input type='text' class='fieldnameQuestion'  placeholder=' Introduzca Preg '> <br> ");    
            var fName = $("<input type=\"text\" class=\"fieldname\"  placeholder=\" Nombre del campo\" />");
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
                            
                            var labelQ = $("<label for=\"" + id + "\">" + $(this).find("input.fieldnameQuestion").first().val() + "</label>");
                        } else {
                            var labelQ = "";
                        }   

                        var label = $("<label for=\"" + id + "\">" + $(this).find("input.fieldname").first().val() + "</label>");
                            
                        var input = $("<textarea id=\"" + id + "\" name=\"" + id + "\" ></textarea>");

                        fieldSet.append(labelQ);
                        fieldSet.append(label);
                        fieldSet.append(input);
                    });
                $("#div_2").append(fieldSet);
            });
        });
}

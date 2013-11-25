 $(function() {

                                var edit = function(){
                                        var original = $(this).text();
                                        var input = $('<input type="text" value="'+original+'">')
                                        $(this).html(input);
                                        input.keypress(function(e){
                                                if(e.which == 13){
                                                        $(this).parent().text($(this).val());
                                                }
                                        });
                                }

                                $("td").dblclick(edit);

                             
                                $('#formular').submit(function(e){
                                        e.preventDefault();
                                        var denumire = $('#formular-denumire').val();
                                        var amanunte = $('#formular-amanunte').val()

                                        $('.tabela tr:last').after('<tr><td>' + denumire + '</td><td>' + amanunte + '</td></tr>');

                                    
                                        $(".tabela tr:last td").dblclick(edit);
                                        
                                });


                                $('thead').click(function(){
                                        $(this).css("background-color","#00AAAA");
                                });

                        });

                $(function(){
                        $('#adaugare').click(function(){
                                $('.formular').show();
                        });
                        $('#submit').click(function(e){
                                e.preventDefault();
                                $('.mainTable tr:last').after(
                                '<tr><td id="denumire">'+ $('#denumire_form').val() + '</td><td id="amanunte">'+ $('#amanunte_form').val() +'</td><td>');
                                $('#denumire_form').val('');
                                $('#amanunte_form').val('');
                                $('.formular').fadeOut();
                        });      
        });
                 $(function(){
                        $('#adaugare2').click(function(){
                                $('.formular2').show();
                        });
                        $('#submit2').click(function(e){
                                e.preventDefault();
                                $('.mainTable2 tr:last').after(
                                '<tr><td id="Denumire2">'+ $('#denumire_form2').val() + '</td><td id="amanunte2">'+ $('#amanunte_form2').val() +'</td><td>');
                                $('#denumire_form2').val('');
                                $('#amanunte_form2').val('');
                                $('.formular2').fadeOut();

     
                        });

                      
        });
                             $(function(){
                        $('#adaugare3').click(function(){
                                $('.formular3').show();
                        });
                        $('#submit3').click(function(e){
                                e.preventDefault();
                                $('.mainTable3 tr:last').after(
                                '<tr><td id="Denumire3">'+ $('#denumire_form3').val() + '</td><td id="amanunte3">'+ $('#amanunte_form3').val() +'</td><td>');
                                $('#denumire_form3').val('');
                                $('#amanunte_form3').val('');
                                $('.formular3').fadeOut();

     
                        });

                      
        });
/**
 * landing calculator
 */
jQuery(function ($) {

    var params = {
        footage: 0,
        type: null,
        view: null,
        name: null,
        phone: null
    }

    $('input[name=footage]').change(function(){
        params.footage = $(this).val();
        checkBlocks();
    });
    $('input[name=type]').change(function(){
        params.type = $(this).val();
        checkBlocks();
    });


    $('input[name=vid]').change(function(){
        params.view = $(this).val();
        checkBlocks();
    });


    var checkBlocks = function() {
        if(params.type) {
           if($('.house_'+params.type).length) {
               $('.house_'+params.type).slideDown();
               if(params.type && params.footage && params.view) {
                   calc();
               }
           } else {
               $('.house_vid').slideUp();
               if(params.type && params.footage) {
                    calc();
               }
           }
        }



    }

    var calc = function() {
        try {
            yaCounter24554348.reachGoal('calc');
        } catch(e){}
            $.ajax({
                type: "POST",
                url: "/site/calc-price",
                dataType: 'json',
                data: params,
                success: function (data) {
                    if(data.success) {
                        $('#total_price').html(data.price);
                        $('#works_list').html('');
                        if(data.works.length > 0) {
                            $.each(data.works, function (k, v) {
                                $('#works_list').append('<li>' + v + '</li>');
                            });
                            $('#calc-works').slideDown('fast');
                        } else {
                            $('#calc-works').slideUp('fast');
                        }
                        $('#calc-summary').slideDown('fast');
                    }
                }
            });
        }


    $('#calc-form').submit(function(){
        params.name = $('input[name=user_name]').val();
        params.phone = $('input[name=user_phone]').val();
        if(!params.name || !params.footage || !params.phone) return false;
        try{
            yaCounter24554348.reachGoal('Form');
        } catch(e){}
        $.ajax({
            type: "POST",
            url: "/site/submit-simple-calc",
            dataType: 'json',
            data: params,
            success: function () {
                $(".calc_callback_success").addClass('form-send__success_visible').removeClass('form-send__success_hidden');
            }
        });
        return false;
    });

});
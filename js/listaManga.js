$(document).ready(function(){
    /**slider contador*/
    var contador= $(".imgSlider li").length; // sacando la cuenta del total de imagens que tenemos
    var imgp=1; // contador para ir cambindo las imagenes con las felchas
    for(i=1;i<=contador;i++){
        $(".cambioCir").append('<li><span><i class="fas fa-circle"></i></span></li>');
    }
    $(".imgSlider li ").hide();
    $(".imgSlider li:first").show();
    $(".cambioCir li:first").css({"color":"blue"});

    // // /***decarando las funciones a usar */
    $(".cambioCir li").click(cambioImg);
    $(".flechaDerecha span").click(siguiente);
    $(".flechaIzquierda span").click(anterior);

    setInterval(function(){
        siguiente();
    },4000);
    

    /**programando las funciones */
    /**circulos */
    function cambioImg(){
        var posicionImg=$(this).index()+1; // obteniendo la posicion del circulo seleccionado
        
        $(".imgSlider li").hide(); // volvemos a oculatar todas las imagenes
        $(".imgSlider li:nth-child("+ posicionImg +")").fadeIn(); //mostramos la imagen en la posocicon del circulo seleccionado
        //cambiando estilos de los circulos
        $(".cambioCir li").css({"color":"rgba(0, 0, 255, 0.5)"});// le damos este color a todo los circulos
        $(this).css({"color":"blue"});// le ponemos el color azul solo al circulo que seleccionamos

        imgp=posicionImg; // hacemos esto para que funcionen combinados los circulos con las flechas
    }

    function siguiente(){
        if(imgp>=contador){ 
            imgp=1;
        }else{
            imgp++;
        }// con el if hacemos que cuando llegue a la ultima imagen el contador se reinicie en 1 y vuelva a la primer imagen
        $(".imgSlider li").hide(); // volvemos a oculatar todas las imagenes
        $(".imgSlider li:nth-child("+ imgp +")").fadeIn(); //mostramos la imagen en la posocicon del circulo seleccionado
        $(".cambioCir li").css({"color":"rgba(0, 0, 255, 0.5)"});// le damos este color a todo los circulos
        $(".cambioCir li:nth-child("+ imgp +")").css({"color":"blue"});// le ponemos el color azul solo al circulo que seleccionamos
    }
    function anterior(){
        if(imgp<=1){ 
            imgp=contador;
        }else{
            imgp--;
        }// a hora hacemos lo contrario para que vaya retrocediendo vamos decrementando y cuando llegue a la primera igualamos con el numero de imagenes que hya para que vaya a la ultima 
        $(".imgSlider li").hide(); // volvemos a oculatar todas las imagenes
        $(".imgSlider li:nth-child("+ imgp +")").fadeIn(); //mostramos la imagen en la posocicon del circulo seleccionado
        $(".cambioCir li").css({"color":"rgba(0, 0, 255, 0.5)"});// le damos este color a todo los circulos
        $(".cambioCir li:nth-child("+ imgp +")").css({"color":"blue"});// le ponemos el color azul solo al circulo que seleccionamos
    }
    /***mostrar div de informacion */
    $(".btm1").click(function(){
         $(".ver1").slideToggle();
    });
    $(".btm2").click(function(){
        $(".ver2").slideToggle();
    });
    $(".btm3").click(function(){
        $(".ver3").slideToggle();
    });
    $(".btm4").click(function(){
        $(".ver4").slideToggle();
    });
    $(".btm5").click(function(){
        $(".ver5").slideToggle();
    });
    $(".btm6").click(function(){
        $(".ver6").slideToggle();
    });
    $(".btm7").click(function(){
        $(".ver7").slideToggle();
    });
    $(".btm8").click(function(){
        $(".ver8").slideToggle();
    });
    $(".btm9").click(function(){
        $(".ver9").slideToggle();
    });
    $(".btm10").click(function(){
        $(".ver10").slideToggle();
    });
    $(".btm11").click(function(){
        $(".ver11").slideToggle();
    });
    $(".btm12").click(function(){
        $(".ver12").slideToggle();
    });
    $(".btm13").click(function(){
        $(".ver13").slideToggle();
    });
    $(".btm14").click(function(){
        $(".ver14").slideToggle();
    });
    $(".btm15").click(function(){
        $(".ver15").slideToggle();
   });
});    
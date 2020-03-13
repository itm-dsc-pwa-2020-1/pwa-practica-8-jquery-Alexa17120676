

  $(document).ready(function(){
    $("#slider").click(function(){
      slider();
    });
  });

  $(document).ready(function(){
    $("#externo").click(function(){
      externo();
    });
  });

  $(document).ready(function(){
    $("#peticion").click(function(){
      $("#div1").load("demo.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
    });
  });

  $(document).ready(function(){
    $("#efectos").click(function(){
      $("div").animate({left:'15em'});
    });
  });

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });



   function menu(){
       alert("frhfurhfuhruh");
   }

   function slider(){
    alert("545");
}

function externo(){
    alert("565");
}

function peticion(){
    alert("13");
}

function efectos(){
    
}





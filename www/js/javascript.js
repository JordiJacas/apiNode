function accesApi() {
  var name = $("#name").val();
  var password = $("#password").val();

    $.ajax({
      method: "GET",
      url: "https://tranquil-tundra-63090.herokuapp.com/db/api/login/"+name+"/"+password,
      dataType: "json",
    }).done(function (msg) {
      console.log(msg);
      if(msg.status == "OK"){
         $('#text').text('Bienvenido ' + msg.username);
      } else {
        $('#text').text('Usuario o contraseña incorrecto');
      }

      $('#text').show();

    }).fail(function (msg) {
      $('#text').text('Comprueva los campos antes de enviar');
      $('#text').show();
    });
}

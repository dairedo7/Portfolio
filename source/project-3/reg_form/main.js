$("#sendMail").on("click", function() {
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var country = $("#country").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#message").val().trim();
  var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email.length < 6) {
  	$("#error").text("Wpisz poprawny email!");
  	return false;
  } else if (name == "") {
    $("#error").text("Wpisz imię!");
  	return false;
  }
  else if (country == "") {
    $("#error").text("Wpisz państwo!");
  	return false;
  }
  else if (phone == "") {
    $("#error").text("Wprowadź numer telefonu!");
  	return false;
  }
    else if (message == "") {
    $("#error").text("Napisz szczegóły zgłoszenia!");
  	return false;
  }
   else if (pattern.test(email) == false){
    $("#error").text("Niepoprawny adres skrzyńki pocztowej!");
    return false;
}
   else if (isNaN(phone) || phone.length <= 8 ) {
    $("#error").text("Niepoprawny numer telefonu!");
    return false;
   }

  $("#error").text("");

  $.ajax({
  	url: 'mail.php',
  	type: 'POST',
  	cache: false,
  	data: { 'name': name, 'email' : email, 'country' : country, 'phone' : phone, 'message' : message },
  	dataType: 'html',
    beforeSend: function () {
    	$("#sendMail").prop("disabled", true);
    },
    success: function(data) {
    	if(!data)
    		alert("Wystąpił błąd. Wiadomość nie została wysłana");
    	else
    		alert("Zgłoszenie zostało zarejestrowane!");
    		$("#reg__form").trigger("reset");
    	$("#sendMail").prop("disabled", false);
    }
  })
});
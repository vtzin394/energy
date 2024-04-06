var el = document.querySelector("#text");
var text = "O energético para qualquer ocasião..."
var interval = 50;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, text, interval);



  // SCRIPT DA AREA DE LOGIN // 



document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Aqui você pode adicionar a lógica de autenticação
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Exemplo de autenticação simples (verificação de email e senha)
  if (email === "example@example.com" && password === "senha123") {
      alert("Login bem-sucedido!");
      // Redirecionar para outra página, por exemplo
      // window.location.href = "dashboard.html";
  } else {
      alert("Credenciais inválidas. Tente novamente.");
  }
});
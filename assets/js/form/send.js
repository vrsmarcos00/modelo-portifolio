var form = document.getElementById("formulario");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Mensagem enviada com sucesso!";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! ocorreu um erro, tente novamente"
    });
}
form.addEventListener("submit", handleSubmit)
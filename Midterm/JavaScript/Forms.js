
function getForm() {
    let formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    suggestionText: document.getElementById('suggestion').value
    };
    alert("Thanks " + formData.name + "! We'll review your suggestion, and email you at " + formData.email + " if we decide to add your suggestion to our menu.").display;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
          });
    console.log(formData);
}


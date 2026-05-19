
function calculatePrice() {
    let service = document.querySelector('input[name="service"]:checked');
    let session = document.querySelector('input[name="session"]:checked');

    let total = 0;

    if (service) total += parseInt(service.value);
    if (session) total += parseInt(session.value);

    document.getElementById("total").innerText = "R" + total;
}

function sendWhatsApp() {
    let service = document.querySelector('input[name="service"]:checked');
    let session = document.querySelector('input[name="session"]:checked');
    let name = document.getElementById("name").value;
    let details = document.getElementById("details").value;

    let price = document.getElementById("total").innerText;

    let message =
` NEW BOOKING REQUEST

Name: ${name}
Service: ${service ? service.parentElement.innerText : "Not selected"}
Session: ${session ? session.parentElement.innerText : "Not selected"}

Project Details:
${details}

Estimated Price: ${price}`;

    let url = "https://wa.me/27700000000?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
// Extract flight details from URL parameters
var urlParams = new URLSearchParams(window.location.search);
var airline = decodeURIComponent(urlParams.get("airline"));
var departure = decodeURIComponent(urlParams.get("departure"));
var departCountry = decodeURIComponent(urlParams.get("departCountry"));
var arrival = decodeURIComponent(urlParams.get("arrival"));
var landCountry = decodeURIComponent(urlParams.get("landCountry"));
var duration = decodeURIComponent(urlParams.get("duration"));
var price = decodeURIComponent(urlParams.get("price"));

// Display flight details
var flightDetails = document.getElementById("flightDetails");
flightDetails.innerHTML = `
    <h3>Flight Details</h3>
    <p><strong>Airline:</strong> ${airline}</p>
    <p><strong>Departure:</strong> ${departure} (${departCountry})</p>
    <p><strong>Arrival:</strong> ${arrival} (${landCountry})</p>
    <p><strong>Duration:</strong> ${duration} hours</p>
    <p><strong>Price:</strong> ${price}$</p>
`;

// Handle payment form submission
sumbitBtn = document.getElementById("paymentForm")
sumbitBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Payment successful.Thank you for booking with us");
  window.location.href =
    "../index.html"; // Redirect to home page after payment
});
fetch("../header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("body").insertAdjacentHTML("afterbegin", data);

  })
  .catch((error) => console.error("Error loading header:", error));
fetch("../footer/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading footer:", error));

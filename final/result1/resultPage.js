document.addEventListener("DOMContentLoaded", function () {
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('../footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

    var filters = document.getElementsByClassName("filter");
    for (var i = 0; i < filters.length; i++) {
        filters[i].addEventListener("click", function () {
            var filter = this.getAttribute('data-filter');
            filterCountries(filter);
        });
    }

    filterCountries('all');

    updateCountryContent();

    var params = new URLSearchParams(location.search);
    var fromCountry = params.get("from");
    var toCountry = params.get("to");
    var takeoffDate = params.get("takeoff");
    var returnDate = params.get("return");

    document.getElementById("fromThisCountry").textContent = fromCountry;
    document.getElementById("toThisCountry").textContent = toCountry;
    document.getElementById("dateOftakeoff").textContent = takeoffDate;
    document.getElementById("dateOfreturn").textContent = returnDate;

    var viewButtons = document.getElementsByClassName("view");
    for (var i = 0; i < viewButtons.length; i++) {
        viewButtons[i].addEventListener("click", function () {
            const toCountry = this.closest('.maincountry').querySelector('.nameofcountry').textContent;
            location.assign(`../booking/booking.html?from=${encodeURIComponent(fromCountry)}&to=${encodeURIComponent(toCountry)}`);
        });
    }
});

// Function to filter countries
function filterCountries(filter) {
    var countries = document.getElementsByClassName("maincountry");
    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        var countryFilters = country.getAttribute('data-filter').split(' ');
        if (filter === 'all' || countryFilters.includes(filter)) {
            country.style.display = 'block';
        } else {
            country.style.display = 'none';
        }
    }
}

// Function to update country content
function updateCountryContent() {
    var params = new URLSearchParams(location.search);
    var destinationCountry = params.get("to").toLowerCase().trim();
    var countriesToUpdate = ["italy", "spain", "turkey", "morocco", "brazil"];

    if (countriesToUpdate.includes(destinationCountry)) {
        var countries = document.getElementsByClassName("maincountry");
        for (var i = 0; i < countries.length; i++) {
            var countryName = countries[i].querySelector('.nameofcountry').textContent.toLowerCase();
            if (destinationCountry === "italy") {
                if (countryName === "edinburgh") {
                    updateCountryDetails(countries[i], "Rome", "Rome.jpg");
                } else if (countryName === "liverpool") {
                    updateCountryDetails(countries[i], "Milan", "Milan.jpg");
                } else if (countryName === "london") {
                    updateCountryDetails(countries[i], "Venice", "Venice.jpg");
                } else if (countryName === "manchester") {
                    updateCountryDetails(countries[i], "Amalfi", "Amalfi.jpg");
                } else if (countryName === "birmingham") {
                    updateCountryDetails(countries[i], "Florence", "Florence.jpg");
                }
            } else if (destinationCountry === "spain") {
                if (countryName === "edinburgh") {
                    updateCountryDetails(countries[i], "Barcelona", "Barcelona.jpeg");
                } else if (countryName === "liverpool") {
                    updateCountryDetails(countries[i], "Madrid", "Madrid.jpg");
                } else if (countryName === "london") {
                    updateCountryDetails(countries[i], "Ibiza", "Ibiza.jpg");
                } else if (countryName === "manchester") {
                    updateCountryDetails(countries[i], "Granada", "Granada.jpeg");
                } else if (countryName === "birmingham") {
                    updateCountryDetails(countries[i], "Seville", "Seville.jpg");
                }
            } else if (destinationCountry === "turkey") {
                if (countryName === "edinburgh") {
                    updateCountryDetails(countries[i], "Istanbul", "Istanbul.jpg");
                } else if (countryName === "liverpool") {
                    updateCountryDetails(countries[i], "Cappadocia", "Cappadocia.jpg");
                } else if (countryName === "london") {
                    updateCountryDetails(countries[i], "Bodrum", "Bodrum.jpg");
                } else if (countryName === "manchester") {
                    updateCountryDetails(countries[i], "Izmir", "Izmir.jpg");
                } else if (countryName === "birmingham") {
                    updateCountryDetails(countries[i], "Ankara", "Ankara.jpg");
                }
            } else if (destinationCountry === "morocco") {
                if (countryName === "edinburgh") {
                    updateCountryDetails(countries[i], "Marrakesh", "Marrakesh.png");
                } else if (countryName === "liverpool") {
                    updateCountryDetails(countries[i], "Casablanca", "Casablanca.jpg");
                } else if (countryName === "london") {
                    updateCountryDetails(countries[i], "Rabat", "Rabat.jpeg");
                } else if (countryName === "manchester") {
                    updateCountryDetails(countries[i], "Fes", "Fes.jpeg");
                } else if (countryName === "birmingham") {
                    updateCountryDetails(countries[i], "Agadir", "Agadir.jpg");
                }
            } else if (destinationCountry === "brazil") {
                if (countryName === "edinburgh") {
                    updateCountryDetails(countries[i], "Rio de Janeiro", "RiodeJaneiro.jpg");
                } else if (countryName === "liverpool") {
                    updateCountryDetails(countries[i], "São Paulo", "SãoPaulo.png");
                } else if (countryName === "london") {
                    updateCountryDetails(countries[i], "Salvador", "Salvador.jpg");
                } else if (countryName === "manchester") {
                    updateCountryDetails(countries[i], "Brasília", "Brasília.jpg");
                } else if (countryName === "birmingham") {
                    updateCountryDetails(countries[i], "Fernando de Noronha", "FernandodeNoronha.jpg");
                }
            }
        }
    } else {
        var defaultViews = document.getElementsByClassName("display");
        for (var i = 0; i < defaultViews.length; i++) {
            if (destinationCountry === "uk" || destinationCountry === "united kingdom") {
                defaultViews[i].style.display = "flex";
            } else {
                defaultViews[i].style.display = "none";
            }
        }
    }
}

// Helper function to update country details
function updateCountryDetails(countryElement, name, imageSrc) {
    var nameElement = countryElement.querySelector('.nameofcountry');
    var imageElement = countryElement.querySelector('.country');

    if (nameElement) nameElement.textContent = name;
    if (imageElement) imageElement.src = imageSrc;
}

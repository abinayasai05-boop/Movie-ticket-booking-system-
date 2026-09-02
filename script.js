// Create Seats Automatically

const seatContainer = document.getElementById("seatContainer");

for(let i = 1; i <= 25; i++){

    const seat = document.createElement("div");

    seat.classList.add("seat");

    seat.innerText = i;

    seat.addEventListener("click", () => {

        seat.classList.toggle("selected");

    });

    seatContainer.appendChild(seat);
}

// Open Booking Section

function bookMovie(movie){

    document.getElementById("bookingSection").style.display = "block";

    document.getElementById("movieTitle").innerText =
    "Booking For: " + movie;

    document.getElementById("summary").innerHTML = "";

    // Remove old seat selections

    document.querySelectorAll(".seat").forEach(seat => {

        seat.classList.remove("selected");

    });

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

// Confirm Booking

function confirmBooking(){

    const selectedSeats =
    document.querySelectorAll(".seat.selected");

    const count = selectedSeats.length;

    if(count === 0){

        alert("Please select at least one seat");

        return;
    }

    const total = count * 200;

    document.getElementById("summary").innerHTML =

    `
    <h3>✅ Booking Confirmed</h3>
    <p>Tickets: ${count}</p>
    <p>Total Amount: ₹${total}</p>
    `;

}

// Search Movies

document.getElementById("search")
.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const cards =
    document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const title =
        card.querySelector("h2")
        .innerText.toLowerCase();

        if(title.includes(value)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});
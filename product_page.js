const futureBooking = document.getElementById("Future")
const futureBookingCalender = document.getElementById("FutureCalender")

futureBooking.addEventListener("click", handleFurtherBooking)

function handleFurtherBooking(e) {
    const v = e.target.checked
    if(v) {
        futureBookingCalender.classList.remove("hidden")
    } else {
        futureBooking.classList.add("hidden")
    }
}
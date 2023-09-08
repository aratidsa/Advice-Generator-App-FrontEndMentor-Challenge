
// Variables
const dice = document.querySelector(".dice")
const adviceNum = document.getElementById("advice-number")
const adviceText = document.querySelector(".advice-text")

// Run the showAdviceQuote function when the page is loaded
window.onload = showAdviceQuote

// Eventlistener for dice button
dice.addEventListener("click", function(){ 
    showAdviceQuote()
})

// showAdviceQuote function to show random quote from API
async function showAdviceQuote() {
    try {
        //wait for the fetch request to complete, and then we check if the response is okay
        const response = await fetch("https://api.adviceslip.com/advice")

        //If it's not okay, we throw an error.
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`)
        }
        
        //parse the JSON response and store it in the data variable.
        const data = await response.json()

        //access the id and advice properties of the advice object from the data variable.
        const advice = data.slip
        
        adviceNum.textContent = advice.id
        adviceText.textContent = advice.advice
    } 
    //If any errors occur during the process catch them and display an alert with the error message.
    catch (error) {
        alert(`Error: ${error.message}`);
    }
}


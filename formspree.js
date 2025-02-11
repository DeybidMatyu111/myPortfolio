document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Collect form data
    const responseMessage = document.getElementById("responseMessage");

    try {
        const response = await fetch("https://formspree.io/f/xdkkjvdo", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });

        if (response.ok) {
            responseMessage.textContent = "Your message is successfully sent.";
            responseMessage.style.color = "#A4D4F4";
            this.reset(); // Clear form fields
        } else {
            const errorData = await response.json();
            responseMessage.textContent = errorData.errors
                ? errorData.errors.map((err) => err.message).join(", ")
                : "Oops! Something went wrong.";
            responseMessage.style.color = "#D4AF37";
        }
    } catch (error) {
        responseMessage.textContent = "Error: " + error.message;
        responseMessage.style.color = "red";
    }

    // ⏳ Make the message disappear after 5 seconds (5000ms)
    setTimeout(() => {
        responseMessage.textContent = "";
    }, 5000);
});
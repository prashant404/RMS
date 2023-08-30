document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".addStu");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Simulate adding data to the database (replace with actual database operation)
        await simulateDatabaseInsert();

        // Show notification
        notification.style.display = "block";

        // Hide notification after 3 seconds
        setTimeout(function () {
            notification.style.display = "none";
        }, 3000);
    });

    async function simulateDatabaseInsert() {
        // Simulate API call or database insertion
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }
});

const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const command = button.dataset.command;

        try {

            await navigator.clipboard.writeText(command);

            const originalText = button.textContent;

            button.textContent = "Copied ✓";

            setTimeout(() => {
                button.textContent = originalText;
            }, 1500);

        } catch (error) {

            console.error("Unable to copy command:", error);

        }

    });

});

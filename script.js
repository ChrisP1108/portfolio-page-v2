// Set Angle Styling Based On Screen Width

    const html = document.querySelector("html");

    function setAngle() {
        if (window.innerWidth < 1400 && window.innerWidth >= 768) {
            html.style.setProperty("--angle", `${window.innerWidth / 43.75}deg`);
        } else if (window.innerWidth < 768) {
            html.style.setProperty("--angle", `${window.innerWidth / 160}deg`);
        } else if (window.innerWidth >= 1400) {
            html.style.setProperty("--angle", `32deg`);
        }
    }

    window.addEventListener("load", setAngle);
    window.addEventListener("resize", setAngle);

// Set Angled Text

    const angledContainers = document.querySelectorAll(".angled-container");

    angledContainers.forEach(container => {
        const textNodes = container.querySelectorAll(".angled-text");
        textNodes.forEach(text => {
            const wordSplit = text.innerHTML.split(" ");
            const addedDivs = wordSplit.map(word => 
                `<div>${word}</div>`
            );
            text.innerHTML = addedDivs.join("");
            });
    });
const container = document.querySelector(".container");

function createGrid(width,height) {
    container.replaceChildren()
    for (let i = 0; i < height;i++) {
        const divH = document.createElement("div");
        divH.classList.add("divH")
        container.append(divH);
            for (let i = 0; i < width; i++) {
                const divV = document.createElement("div");
                divV.classList.add("divV")
                divH.append(divV);
            };
    };
};

createGrid(16,16)

let hoverHandler = null;

function replaceHoverHandler(newHandler) {
    if (hoverHandler) {
        document.removeEventListener("mouseover", hoverHandler);
    }

    hoverHandler = newHandler;
    document.addEventListener("mouseover", hoverHandler);
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("newGrid")) {
        const gridWidth = Number(prompt("Enter the width:"));
        const gridHeight = Number(prompt("Enter the height:"));
        if (
            !Number.isInteger(gridWidth) || !Number.isInteger(gridHeight)
            || gridHeight === 0 || gridWidth === 0 
        ) {
            let errorDiv = document.querySelector("#error");
            if (!errorDiv) {
                errorDiv = document.createElement("div");
                errorDiv.id = "error"
                document.body.append(errorDiv);
            }           
            container.replaceChildren()       
            errorDiv.textContent = "Please enter a number that is not 0.";
            return; 
        }
        document.querySelector("#error")?.remove();
        createGrid(gridWidth,gridHeight);
    } else if (event.target.classList.contains("RandomColor")) {
        const randomColor =
            "#" + Math.floor(Math.random() * 0x1000000)
                .toString(16)
                .padStart(6, "0");

        replaceHoverHandler((event) => {
            if (event.target.classList.contains("divV")) {
                event.target.style.backgroundColor = randomColor;
            }
        });

    } else if (event.target.classList.contains("Plum")) {
        replaceHoverHandler((event) => {
            if (event.target.classList.contains("divV")) {
                event.target.style.backgroundColor = "#51427a";
            }
        });
    }
});

const container = document.querySelector(".container");

for (let i = 0; i < 16;i++) {
    const divH = document.createElement("div");
    divH.classList.add("divH")
    container.append(divH);
        for (let i = 0; i < 16; i++) {
            const divV = document.createElement("div");
            divV.classList.add("divV")
            divH.append(divV);
        };
};




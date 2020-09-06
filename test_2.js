const button = document.getElementsByClassName("btn")[0];
const header = document.querySelector(".header");

button.addEventListener('click', () => {
    if (header.classList) {
        header.classList.toggle("hidden");
    } else {
        // For IE9
        let classes = header.className.split(" ");
        let i = classes.indexOf("hidden");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("hidden");
        header.className = classes.join(" ");
    }
});

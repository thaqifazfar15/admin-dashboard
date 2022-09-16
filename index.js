// interactive color-label

const colorLabels = document.querySelectorAll(".color-label")

colorLabels.forEach(label => {
    label.addEventListener("click", function () {
        isLabelHide(label) ? showLabel(label) : hideLabel(label);
    })
});

let isLabelHide = (e) => {

    if (e.style.width == "3.3%") {
        return true
    }
    return false
};

let showLabel = (e) => {
    e.style.transitionDuration = "0.5s"
    e.style.width = "100%";
    e.style.borderRadius = "12px"
    
};

let hideLabel = (e) => {
    e.style.transitionDuration = "0.5s"
    e.style.width = "3.3%";
    e.style.borderRadius = "12px 0 0 12px"
};
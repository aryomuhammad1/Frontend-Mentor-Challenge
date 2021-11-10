// BUTTONS
const btnBackProject = document.querySelector(".btn-back");
const btnPledge = document.querySelectorAll(".btn-pledge");
const btnThanks = document.querySelector(".btn-thanks");
const btnClose = document.querySelector(".btn-close");
const btnContinue = document.querySelectorAll(".btn-continue");
// ELEMENTS
const allModal = document.querySelectorAll(".modal");
const modalPledge = document.querySelector(".modal-pledge");
const modalThanks = document.querySelector(".modal-thanks");
const overlay = document.querySelector(".overlay");
const modalPledgeChild = modalPledge.children;
const btnRadio = document.querySelectorAll(".pledge--radio");

// FUNCTIONS
const openPledgeModal = function(index = false) {
    modalPledge.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const openThanks = function(e) {
    e.preventDefault();
    closeModal();
    modalThanks.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function() {
    allModal.forEach((el) => {
        !el.classList.contains("hidden") ? el.classList.add("hidden") : "";
    });
    overlay.classList.add("hidden");
};

//EVENTS
btnBackProject.addEventListener("click", openPledgeModal);
btnThanks.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && !modalPledge.classList.contains(".hidden"))
        closeModal();
});
for (let i = 2; i < modalPledgeChild.length - 1; i++) {
    modalPledgeChild[i]
        .querySelector(".pledge--radio")
        .addEventListener("change", function() {
            let selectedPledge = modalPledge.querySelector(".selected");
            selectedPledge ? selectedPledge.classList.remove("selected") : "";
            modalPledgeChild[i].classList.add("selected");
        });
}
for (let i = 0; i < btnContinue.length - 1; i++) {
    btnContinue[i].addEventListener("click", openThanks);
}
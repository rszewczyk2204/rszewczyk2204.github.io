'use strict';

const elementToggleFunc = function (elem) {
    console.log("toggling elem", elem);
    elem.classList.toggle("active");
}

const sidebar = document.querySelector("[data-sidebar]")
const sidebarBtn = document.querySelector("[data-sidebar-btn]")

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
        pages.forEach((page, i) => {
            if (this.innerHTML.toLowerCase() === page.dataset.page) {
                page.classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        });
    });
});


const filterItems = document.querySelectorAll("[data-filter-item]");

const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

const filterFunc = function (selectedValue) {
    filterItems.forEach((filterItem) => {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    });
};

let lastClickedBtn = filterBtn[0];

filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

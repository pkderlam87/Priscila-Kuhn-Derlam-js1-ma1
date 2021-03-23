const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
const cat = {
    complain: function () {
        console.log("Meow!");
    }
};
cat.complain();

//Question 2
let update = `Updated heading`;
const heading = document.querySelector("h3");
heading.innerHTML = update;

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className = "subheading";

//Question 5 
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//Question 7 
function pets(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
pets(cats);

//Question 8
const catContainer = document.querySelector(".cat-container");
let html = "";
function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {
        let catName = cats[i].name;
        let catAge = "Age unknown";
        if (cats[i].age) {
            catAge = cats[i].age;
        }
        html += `<div>
        <h5>${catName}</h5>
        <p>${catAge}</p>
        </div>`
    }
    return html;
}
createCats(cats);
catContainer.innerHTML = html;
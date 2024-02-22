let section = document.querySelector(".sect3");
let input = document.getElementById("search");
let parentsect = document.querySelector(".parentsect");

fetch(`./search.json`)
  .then(response => response.json())
  .then(data => htmlRenderer(data));

function htmlRenderer(data) {
  input.addEventListener("input", function () {
    let searchText = input.value.trim().toLowerCase();
    let cont1infos = parentsect.querySelectorAll(".cont1info");

    cont1infos.forEach(cont1info => {
      let gamename = cont1info.querySelector(".gamename").textContent.toLowerCase();
      if (gamename.includes(searchText)) {
        cont1info.style.display = "flex";
      } else {
        cont1info.style.display = "none";
      }
    });
  });
}

let barsicon = document.querySelector(".fa-bars");
let sect1 = document.querySelector(".sect1");

barsicon.addEventListener("click", () => {
  sect1.style.display = "none";
});

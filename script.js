let gridContainer = document.querySelector('.grid');
let count = 0;
for(let i=1;i<17;i++){
    for(let j=1;j<17;j++){
        let div = document.createElement("div");
        div.classList.add("grids");
        count +=1;
        div.innerText= count;
        gridContainer.appendChild(div);
        console.log('added!!')
    }
}



var grids = document.querySelectorAll('.grids');
var Grids = Array.from(grids)
// Add a mouseover event listener
Grids.forEach(function(grid){
    grid.addEventListener("mouseover", function() {
        // Your event handling code here
        grid.style.backgroundColor = 'blue';
    });
});

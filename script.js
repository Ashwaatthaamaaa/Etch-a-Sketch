let gridContainer = document.querySelector('.grid');
function gridMaker(size){
    let count = 0;
    for(let i=1;i<=size;i++){
        for(let j=1;j<=size;j++){
            let div = document.createElement("div");
            div.classList.add("grids");
            count +=1;
            div.innerText= count;
            gridContainer.appendChild(div);
            //console.log('added!!')
            let divs = document.querySelectorAll(".grids");
            let divArray = Array.from(divs);
            var flexBasisValue = (100/size);
            flexBasisValue = String(flexBasisValue) + "%";
            //console.log(flexBasisValue);
            divArray.forEach(function(div){
        
                div.style.flexBasis= flexBasisValue;
            })
            pen();
        }
    }
};

gridMaker(16);


let change = document.querySelector(".btn");
change.addEventListener('click',(event) => {
    let newSize = Number(prompt("Number of Squares?"));
    let divs = document.querySelectorAll(".grids");
    let divArray = Array.from(divs);
    divArray.forEach(function(div){
        div.parentNode.removeChild(div);
    })
    gridMaker(newSize);
})



function pen(){
    var grids = document.querySelectorAll('.grids');
    var Grids = Array.from(grids)
// Add a mouseover event listener
    Grids.forEach(function(grid){
        grid.addEventListener("mouseover", function() {
            // Your event handling code here
            grid.style.backgroundColor = 'blue';
        });
    });
}

let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

for(list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        
        // here we allow it to drag over the second element over the right box 
        rightBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })

        // here we add the drop event 
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            // after appending the selected element we clear the selected 
            selected = null;
        })




        // The code for the  dragover for the left box below

        // here we allow it to drag over the second element over the right box 
        leftBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })

        // here we add the drop event 
        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            // after appending the selected element we clear the selected 
            selected = null;
        })
    })
}
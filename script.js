function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into the table element
    table.innerHTML = grid;
    // Add click event to grid cells once the table grid has been created
    addClickEventForCells();
}
// gets values for height & width from user & pass them to makeGrid()
function submitForm() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}
// call click events for all of the cells in the grid
function addClickEventForCells() {
    // return color chosen by user
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}
document.getElementById('sizePicker').onsubmit = function () {
    submitForm();
};

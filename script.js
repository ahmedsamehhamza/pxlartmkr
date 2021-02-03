$(document).ready(function() {
    $('#sizePicker').submit(function makeGrid(grid) {
//removes the grid when you submit again
        $('table tr').remove();
//This uses the intered number to make row
        var rows = $('#inputHeight').val();
//This uses the intered number to make columns
        var cols = $('#inputWidth').val();
//This is for loop code
        for (var i = 1; i <= rows; i++) {
            $('table').append('<tr></tr>');
            for (var j = 1; j <= cols; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }

        grid.preventDefault();

        $('.cells').click(function(event) {
          //paint the cell with the choosed color
            var paint = $('#colorPicker').val();
            $(event.target).css('background-color', paint)

        });
    });
});

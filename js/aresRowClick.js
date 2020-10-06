/*Clicking on a row of a table finds the first link 
 * inside of that row and navigates to the link's reference.
*/
$(document).ready(function() {
    $('.instructor-table, .student-table').find('tbody > tr > td').click(function() {
        var cell = $(this);
        var parentRow = cell.parent();
        if (parentRow.find('* > a.row-click').length && !(cell.find('input').length || cell.find('textarea').length) ) {
            window.location = parentRow.find('* > a.row-click').attr('href');
        }
    });
});
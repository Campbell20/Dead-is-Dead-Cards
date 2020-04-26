$(document).ready( function () {
    $('#personnel-table').DataTable(
        {
            "searching": false,
            "info": false,
            "paging": false
        }
    );
    $('#supplies-table').DataTable(
        {
            "info": false,
            "paging": false
        }
    );
} );
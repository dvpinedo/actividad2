$(document).ready(function() {
    var lastId = 3;

    addDefaultUser("Juan", "Pérez", "juan@gmail.com", "3101234567", "Bogotá");
    addDefaultUser("María", "Gómez", "maria@gmail.com", "3209876543", "Medellín");
    addDefaultUser("Pedro", "López", "pedro@gmail.com", "3155555555", "Cali");

    $('#create-user-form').submit(function(event) {
        event.preventDefault();

        if ($('#create-user-form')[0].checkValidity()) {
            var nombre = $('#nombre').val();
            var apellido = $('#apellido').val();
            var email = $('#email').val();
            var telefono = $('#telefono').val();
            var ciudad = $('#ciudad').val();

            lastId++;
            var id = lastId;

            $('#user-table tbody').append('<tr><td>' + id + '</td><td>' + nombre + '</td><td>' + apellido + '</td><td>' + email + '</td><td>' + telefono + '</td><td>' + ciudad );

            $('#create-user-form')[0].reset();
        } else {
            $('#create-user-form')[0].reportValidity();
        }
    });

    function addDefaultUser(nombre, apellido, email, telefono, ciudad) {
        lastId++;
        var id = lastId;

        $('#user-table tbody').append('<tr><td>' + id + '</td><td>' + nombre + '</td><td>' + apellido + '</td><td>' + email + '</td><td>' + telefono + '</td><td>' + ciudad );
    }
});

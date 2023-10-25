function RegEx() {
    var email = document.getElementById('txtEmail');
    var full_name = document.getElementById('fn');
    var id = document.getElementById('cin');
    var contact = document.getElementById('phone');
    var filter_email = /^[A-Za-z0-9.]+@([a-z]+.)+[a-z]{2,3}$/;
    var filter_name = /^[A-Za-z\s]+$/;
    var filter_id = /^[A-Z]{1,2}[0-9]+$/;
    var filter_contact = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!filter_email.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    }
    if (!filter_name.test(full_name.value)) {
        alert('Please provide a valid full name');
        full_name.focus();
        return false;
    }
    if (!filter_id.test(id.value)) {
        alert('Please provide a valid cin');
        id.focus();
        return false;
    }
    if (!filter_contact.test(contact.value)) {
        alert('Please provide a valid phone number');
        contact.focus();
        return false;
    }
    
    return true;
}
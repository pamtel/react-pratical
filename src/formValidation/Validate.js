const Validate = (person) => {
    let errors = {};
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!person.firstName.trim()){
        errors.firstName = "Name is required";
    }else if (person.firstName.length < 3) {
        errors.firstName = "Names must be at least 3 characters";
    } else if (!person.firstName.match(/^[A-Za-z]+$/)) {
        errors.firstName = "Names must not contain a number or special character";
    }

    if (!person.email.trim()) {
        errors.email = "Email is required";
    }else if (!reg.test(person.email)) {
        errors.email = "Email format is not valid";
    }

    if (!person.password.trim()) {
        errors.password = "password is required";
    }else if (person.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    if (!person.password2.trim()) {
        errors.password2 = "Password is required";
    }else if (person.password2.length < 6) {
        errors.password2 = "Password must be at least 6 characters long";
    }else if (person.password2 !== person.password) {
        errors.password2 = "Password do not match";
    }


    return errors;
}

export default Validate
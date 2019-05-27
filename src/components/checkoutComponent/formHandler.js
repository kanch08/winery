const initialValues = {
    username: "",
    email: "",
    city: "",
    address: "",
    zipcode: "",

}

const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Email Field cannot be blank!!!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validateName = (value) => {
    let error;
    if (!value) {
        error = 'Name field cannot be blank!!!';
    }
    return error;

}

const validateZip=(value)=>{
    let error;
    if (!value){
        error='Pincode cannot be blank!!!';
    }
    else if (value.length>6){
        error='Invalid pincode!!!'
    }
    return error;
}

//validators for shipping fields
const validateShippingEmail = (value) => {
    let error;
    if (!value) {
        error = 'Email Field cannot be blank!!!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validateShippingName = (value) => {
    let error;
    if (!value) {
        error = 'Name field cannot be blank!!!';
    }
    return error;

}

const validateShippingZip=(value)=>{
    let error;
    if (!value){
        error='Pincode cannot be blank!!!';
    }
    else if (value.length>6){
        error='Invalid pincode!!!'
    }
    return error;
}

export {
    initialValues,validateName,validateEmail,validateZip,validateShippingEmail,validateShippingName,validateShippingZip
}
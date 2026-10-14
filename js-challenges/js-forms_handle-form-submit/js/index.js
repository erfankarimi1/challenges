console.clear();

const form = document.querySelector('[data-js="form"]');
 
form.addEventListener("submit" , (event) => {
    event.preventDefault();

    const formElement = event.target;

    const formdata = new FormData(formElement);
    const data = Object.fromEntries(formdata);
    console.log(data);
    console.log(`The age-badness-sum of ${data.firstName} is ${Number(data.age) + Number(data.badness)}`)

    formElement.reset();
    formElement.elemets.firstName.focus();

});

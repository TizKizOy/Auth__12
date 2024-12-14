function resetForm()
{
    document.getElementById("signInForm").reset();
    document.getElementById("signUpForm").reset();
}

function openForm() {
    document.getElementById("first-form").style.display = "block";
    document.getElementById("second-form").style.display = "none";
}

function openFormAndReset() {
    document.getElementById("first-form").style.display = "block";
    document.getElementById("second-form").style.display = "none";
    resetForm();
}

function closeForm() {
    document.getElementById("first-form").style.display = "none";
    document.getElementById("second-form").style.display = "block";
}

function closeFormAndReset() {
    document.getElementById("first-form").style.display = "none";
    document.getElementById("second-form").style.display = "block";
    resetForm();
}

function closeTwoForm(){
    document.getElementById("first-form").style.display = "none";
    document.getElementById("second-form").style.display = "none";
}

function logOut()
{
    window.location.href = "index.html";
    resetForm();
}

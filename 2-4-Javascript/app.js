const form = document.getElementById("form");
const email = document.getElementById("email");
const nrp = document.getElementById("nrp");
const nama = document.getElementById("nama");
const alamat = document.getElementById("alamat");

let isFormValid = 1;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    if (isFormValid == 1) {
        Swal.fire(
            'Form Berhasil Disubmit'
        )
    } else {
        isFormValid = 1;
    }
});

function checkInputs() {
    //get input
    const nrpValue = nrp.value.trim();
    const emailValue = email.value.trim();
    const namaValue = nama.value.trim();
    const alamatValue = alamat.value.trim();
    if (nrpValue === "") {
        setErrorFor(nrp, "NRP tidak boleh kosong");
    } else {
        setSuccessFor(nrp);
    }
    if (namaValue === "") {
        setErrorFor(nama, "Nama tidak boleh kosong");
    } else {
        setSuccessFor(nama);
    }
    if (alamatValue === "") {
        setErrorFor(alamat, "Alamat tidak boleh kosong");
    } else {
        setSuccessFor(alamat);
    }
    if (emailValue === "") {
        setErrorFor(email, "Email tidak boleh kosong");
    } else if (!emailValue) {
        setErrorFor(email, "Email tidak valid");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    isFormValid = 0;
    if (isFormValid == 0) {
        console.log(message);
    }
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

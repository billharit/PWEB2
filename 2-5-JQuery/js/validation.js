$(document).ready(function() {
    $('#formValid').validate({
        rules: {
            nrp: {
                digits: true,
                minlength: 14,
                maxlength: 14
            },

            umur: {
                digits: true,
                range: [0, 100]
            },

            email: {
                email: true
            },

            password2: {
                equalTo: "#password1"
            }
        },

        messages: {
            nama: {
                required: "Nama wajib diisi"
            },

            nrp: {
                required: "NRP wajib diisi",
                minlength: "NRP harus 14 digit",
                maxlength: "NRP harus 14 digit"
            },

            Alamat: {
                required: "Alamat wajib diisi"
            },
            
            tanggal: {
                required: "Tanggal lahir wajib diisi",
            },

            umur: {
                required: "Umur wajib diisi"
            },

            email: {
                required: "Email wajib diisi",
                email: "Format email tidak valid"
            },

            password1: {
                required: "Password wajib diisi"
            },

            password2: {
                required: "Harap mengkonfirmasi password",
                equalTo: "Password tidak sama"
            }
        }
    });
});
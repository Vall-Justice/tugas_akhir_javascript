function buat_login() {
   // menghapus tombol awal
   let x = document.getElementById("X");
   x.remove();
   
   // mengambil div kotak login
   let kotak_login = document.querySelector(".kotak_login")
   
   // menambahkan element di kotak login
   let paragraf = document.createElement("p");
   paragraf.className = "tulisan_login";
   paragraf.innerHTML = "Silahkan Mendaftar";
   kotak_login.appendChild(paragraf);
   
   // elemeng Form
   let form = document.createElement("form");
   kotak_login.appendChild(form);
   
  
   // input namaUser
   let namaUser = document.createElement("label");
   namaUser.innerHTML = "Nama User"
   let inputNamaUser = document.createElement("input");
   inputNamaUser.type = "text";
   inputNamaUser.className = "form_login";
   inputNamaUser.placeholder = "Nama User ..";
   namaUser.appendChild(inputNamaUser);
   form.appendChild(namaUser);
   
   // input Nomor Handphone
   let handphone = document.createElement("label");
   handphone.innerHTML = "Nomor Handphone"
   let inputTeleponUser = document.createElement("input");
   inputTeleponUser.type = "tel";
   inputTeleponUser.className = "form_login";
   inputTeleponUser.placeholder = "Nomor Handphone.";
   handphone.appendChild(inputTeleponUser);
   form.appendChild(handphone);
   
   // input username
   let username = document.createElement("label");
   username.innerHTML = "Username"
   let inputUsername = document.createElement("input");
   inputUsername.type = "text";
   inputUsername.className = "form_login";
   inputUsername.placeholder = "Username atau email ..";
   username.appendChild(inputUsername);
   form.appendChild(username);
   
   // input namaUser
   let password = document.createElement("label");
   password.innerHTML = "Password"
   let inputPassword = document.createElement("input");
   inputPassword.type = "password";
   inputPassword.className = "form_login";
   inputPassword.placeholder = "Password ..";
   password.appendChild(inputPassword);
   form.appendChild(password);
   
   let submit = document.createElement("input");
   submit.value = "DAFTAR SEKARANG";
   submit.type = "submit";
   submit.className = "tombol_login";
   form.appendChild(submit);
}

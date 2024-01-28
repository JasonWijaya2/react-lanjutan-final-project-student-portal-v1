# Student Portal - Using ChakraUI and Deploying in Firebase

## Final Project

### NOTES

-   Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
-   Dilarang mengganti nama function yang diberikan.
-   Wajib menjalankan `npm install` atau `pnpm install` sebelum mengerjakan project.
    \*\*\*- Kerjakan pada file `index.js`, `Footer.jsx`, `App.js`, `Navbar.jsx`, `Home.jsx`, `Student.jsx`, `AddStudent.jsx`, `EditStudent.jsx` dan `NotFound.jsx`

### Description

> Pastikan kalian sudah selesai membuat final project React Dasar, jika belum silahkan lihat kembali dan selesaikan!

Pada _final project_ ini kalian diminta untuk _update_ aplikasi _web_ _Student Portal_ yang sudah kalian buat sebagai _final project_ React Dasar (**Diperbolehkan menggunakan kode yang sudah dibuat di _assignment_ sebelumnya**). Yang perlu kalian lakukan adalah menggunakan ChakraUI component di aplikasi dan melakukan deployment ke Firebase, update minimal meliputi:

-   Halaman _home_:
    -   Menggunakan Button Component dari ChakraUI
-   Halaman _student_.
    -   Menggunakan Select Component dari ChakraUI
    -   Menggunakan Table Components dari ChakraUI
-   Halaman menambahkan data _student_
    -   Menggunakan Button Component dari ChakraUI
    -   Menggunakan minimal satu Input Component dari ChakraUI
-   Halaman meng-_edit_ data _student_
    -   Menggunakan Button Component dari ChakraUI
    -   Menggunakan minimal satu Input Component dari ChakraUI
-   _navigation bar_
    -   Menggunakan Link Component dari ChakraUI
-   Halaman _not found_:
    -   Menggunakan Button Component dari ChakraUI

Sama seperti final project React Dasar, kalian diberikan juga sebuah file `json-server` dengan nama `students-db.json` dalam folder `/server` sebagai _server_ kalian.

> Server dapat di jalankan menggunakan command `npm run start:server` dan akan berjalan pada `http://localhost:3001/`.

#### Footer

Tambahkan halaman footer di semua halaman mulai dari `Home`, `Student`, `AddStudent`, `EditStudent`, kecuali `Not Found`, kerjakan pada file `Footer.jsx` dengan ketentuan sebagai berikut:

-   Wajib menggunakan satu komponen Box dengan `className="footer"`
-   Tambahkan **Nama** dan **CAMP ID** yang kalian miliki di dalam komponen Box dengan format berikut ini:

    -   `Nama` dan `CAMP ID` harus ada dalam tag tersendiri:

        ```html
        <p className="studentName">Djarot Purnomo</p>
        -
        <p className="studentId">FE001</p>
        ```

    -   Dalam contoh diatas, Nama dan CAMP ID, masing-masing dibungkus dalam tag paragraph `<p>`

> Silahkan lakukan styling dengan kreatifitas yang kalian miliki.

#### Firebase Deployment

-   Pada `Task.js` masukan url firebase, nama serta CAMP ID kalian dalam bentuk `string`. Pastikan nama serta CAMP ID yang kalian masukan **sesuai** dengan yang kalian simpan pada `Footer.jsx`.

-   Lakukan deployment ke Firebase

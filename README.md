Perlu konfigurasi vite.config.js

Step 1:
Mempelajari componen, dengan membaut folder components

Step 2:
Membuat file untuk run komponen run.jsx

Step 3:
Membuat file komponennya yaitu komponen 1.jsx

Step 4:
Mmebuat file Container.jsx untuk komponen dalam komponen

Step 5:
Membuat file css tiap komponen, disini komponen1,css

Step 6:
Sebelum komponen bisa running perlu membuat html nya, makanya ada components.

Step 7:
Untuk komponen bisa jalan, dibantu oleh index,html ataupun app.jsx

Step 8:
File components.html untuk sementara sebagai file tester, dan nntinya bisa dipakai di app.jsx

Step 9:
File todolist untuk mempraktekan if else yaitu salah satu conditional, ada juga operasi AND

Step 10:
File table untuk mempraktekan pure component, yaitu komponen yang tidak bisa diubah

Step 11: (Urgent SIDE EFFECT /EFEK SAMPING)
File untuk ditaro ada di event handler untuk aksi ketika berinteraksi dengan komponen, atau begantung dengan API

Step 12: (Urgent side effect)
File event object untuk parameter

Step 13:(Urgent side effect)
File event propagation

Step 14:(Urgent Hooks)
digunakan di component terdapat state,context, ref , effect, performance

Step 15:State berfungsi memori spesific di komponwn 
Untuk mengingat, implementasi nya dengan useState berada di file CounterTrue.jsx, selain itu state private dan nempel di kode yg menggunakannya jadi misalkan ada komponen yg menggunaman nama yang sama yaitu "CounterTrue" maka akan tetap running berbeda

Pemahaman tambah terkait .render:
Befungsi untuk menampilkan UI sesuai dengan style, kemudian re-render ada ketika ada perubahan data state atau props
 
 Step 16: di file contactlatihan

Mempelajari useImmer yang dgunakan untuk nested object yang emang memiliki banyak data kompleks , satu level diatas useState, untuk itu perlu install 

"npm install use-immer"

Step 17: Array di state
ada di folder task, dan di file task, yang digunakan untuk menambah tugas

Step 18: Sharing state 
berfungsi untuk componen yg berbagi state,
ada di folder task, dan di file TaskForm. 

Step 19: Mempertahankan State (hook)
ada di file ConterApp

Step 20: mempelajari reducer (hook)
ada di file note , berfungsi untuk menyimpan logic dan memiliki 2 parameter yaitu state saat ini dan action object

Step 21: bisa menggunakan immer dengan reducer
bisa edit data draft daripada buat data baru

Step 22:Hook kedua yaitu context
ada di file profile, ngirim informasi ke dalam banyak kompoenn , gausah pake props, jadi bisa di context "createContext" 

Step 23: integrasi context dan state
ada di file profile juga terutama profileApp dengan ProfileForm

Step 24: context dan reducer
penggunaan ada di file note

Step 25: hook ketiga ref hooks
berfungsi untuk mempercepat tanpa render ulang tapi penggunaannya untuk data yang tidak ditampilkan di layar supaya sistem tidak berat, fungsinya useRef(), akan ada perubahan di file button/alertbutton. Ada juga di folder timer

Step 26: manipulasi DOM dengan ref
implementasi di folder guestbook secara otomatis

Step 27: effect hooks untuk menangani event handler dan juga ada effect dependecy.
ada di file product, kemudian ada tambahan file products.json di folder public

Step 28: empty dependecy
ada di folder product2, especially at ProductList2.jsx

Step 29: situasi tertentu jangan gunakan effect
1. jangan gunakan untuk insisialisasi aplikais
2.hanay untuk interaksi external system, non reaact , network
3. jangan mengubah effect untuk mengubah data di server, kecuali untuk memanggl data dari server.
4. gunakna event handler jika ingin ubah data di sercver

Step 30: Memoization
optimasi untuk mempercepat data sementara, useMemo.

Step 31:Custom hooks
Berada di folder online.html Hooks menggunakan function use, contoh membuat hooks mendeteksi apakah sedang online atau offline

keren banget cui real time kenceng abis reactjs

referensi:
https://react.dev/reference/react
programmer zaman now

roadmap:
ReactJS Router
ReactJS Redux
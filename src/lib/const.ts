const SEARCH_ENDPOINT = (query: string) => { return `http://localhost:8000/api/retriever/search?query=${query}` }
 
const MOCK_RETRIEVAL_RESPONSE = [
  {
    "title": "ayam betutu daun singkong",
    "text": "1) Blender bumbu halus lalu tumis masukan royko,gula,lada,ketumbar,kunyit bubuk. setelah harum masukan ayam tambah air lalu ungkep\r\n2) Sambil menunggu ayam,rebus daun singkong\r\n3) Setelah ayam dirasa hampir matang masukan bumbu rajang, lalu masukan daun singkong kemudian ungkep kembali,korelsi rasa,setelah ayam dirasa matang dan bumbu meresap angkat dan sajikan",
  },
  {
    "title": "ayam betutu",
    "text": "1) Cuci bersih ayam, kemudian lumuri dengan jeruk nipis. Sisihkan kurleb 10menit lalu cuci bersih\r\n2) Haluskan bawang merah, bawang putih, cabe, kunyit, kemiri, kencur, dan jahe\r\n3) Tumis bumbu halus sampai wangi, masukan serai, daun jeruk. Kemudian masukan ayam td. Beri air, tambahkan gula, garam, penyedap. Masak sampai matang\r\n4) Hidangkan selagi panas. Selamat mencoba",
  },
  {
    "title": "ayam betutu",
    "text": "1) Tumis bumbu halus dan bumbu iris sampai harum dan matang.\r\n2) Masukkan ayam, aduk rata diamkan sebentar saja.\r\n3) Tambahkan air hingga ayam terrendam semua, bumbui dengan garam gula. Jika rasa sudah pas, ungkep dengan api kecil sampai airnya tersisa sedikit. Siap dihidangkan.",
  },
  {
    "title": "ayam betutu daun kemangi",
    "text": "1) Cuci bersih daging ayam kasih jeruk nipis, diamkan 10 menit\r\n2) Iris batang serai tipis2 dan daun jeruk nipis di belah mnjdi dua bagian, batangnya buang\r\n3) Tumis bumbu yg di haluskan sampe harum. Masukan daun jeruk, daun salam, serai aduk rata.\r\n4) Cuci kembali daging ayam smpe bersih lalu masukan aduk smpai rata.\r\n5) Masukan air sampe ke rendam daging ayamnya (mungkin 500ml air) sampe mendidih. Lalu kasih garam+penyedap rasa, gula pasir, kecap. Aduk2 smpai rata.\r\n6) Diamkan 5 menit lalu aduk kmbli supaya bumbu meresap, jngn lpa koreksi rasanya ya. Kemudian masukan daun kemanginya.\r\n7) Setelah airnya menyusut, tadaaaaaaa berarti ayam betutu daun kemanginya udah matang\r\n8) Selamat mencoba ya",
  },
  {
    "title": "ayam betutu super pedas",
    "text": "1) Tumis bumbu yang dihaluskan dan bumbu yg dirajang sampai matang dan harum.\r\n2) Masukan ayam ayam yang sudah dicuci bersih,aduk rata.masukan garam,gula,penyedap rasa (bila suka) aduk kembali sampai rata.\r\n3) Tambahkan air sampai benar-benar ayam terendam semua.masak dengan api kecil sampai ayam empuk dan bumbu meresap\r\n4) Tes rasa.kemudian angkat",
  },
  {
    "title": "ayam betutu",
    "text": "1) Tumis bumbu halus dan yg d iris sampe wangi\r\n2) Masukkan ayam, beri air, kecilkan api tutup wajan masak sampai bumbu benar2 meresap.",
  },
  {
    "title": "ayam betutu",
    "text": "1) Haluskan bawang putih, kunyit, jahe, lengkuas, kencur, ketumbar, merica, terasi, dan 3-5 biji cabai rawit (sisanya diutuhkan saja). Lalu dilanjutkan dengan mengulek kasar bawang merah dan sereh yang sudah dirajang halus\r\n2) Panaskan minyak, tumis bumbu beserta daun salam dan sisa cabai rawit. Masak hingga bumbu matang dan tidak berbau langu\r\n3) Tambahkan air, setelah mendidih masukkan ayam. Tambahkan gula, garam, penyedap rasa. Masak dengan api kecil hingga ayam empuk dan bumbu meresap\r\n4) Ayam betutu siap disajikan",
  },
  {
    "title": "ayam betutu",
    "text": "1) Haluskan bahan bumbu halus, rajang bahan bumbu rajang (saya tidak dirajang tapi pakai cooper/blender daging).\r\n2) Setelah bumbu halus dan bumbu rajang siap, tumis kedua bumbu sampai harum dan matang.\r\n3) Setelah bumbu matang masukan ayam, beri tambahan gula, garam serta penyedap serta beri air sampai terendam. Ungkep ayam menggunakan api kecil agar bumbu meresap kedalam daging.\r\n4) Tunggu sampai matang dan empuk, sisakan sedikit kuah bumbu (cemek-cemek) agar lebih terasa. Angkat lalu sajikan\r\n5) NB : saya ungkep selama 1 jam dengan api kecil smbil sesekali dibalik agar bumbu meresap merata.",
  }
]

const MOCK_LLM_ANSWER = "Retrieval-Augmented Generation (RAG) enhances traditional language models by combining generative capabilities with real-time knowledge retrieval. It dynamically accesses external databases for accurate, up-to-date answers without frequent retraining. RAG is also more explainable, providing source references, and remains lightweight by offloading knowledge storage to a retriever. These features make it adaptable, scalable, and ideal for tasks requiring trustworthy, domain-specific responses."

export { SEARCH_ENDPOINT, MOCK_RETRIEVAL_RESPONSE, MOCK_LLM_ANSWER }
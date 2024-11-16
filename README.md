# VOCA Task

## Deskripsi

Proyek ini adalah aplikasi berbasis web yang memungkinkan pengguna untuk mengelola tugas mereka dengan mudah. Aplikasi ini mencakup fitur login, manajemen tugas, dan pengeditan profil. Desainnya mengacu pada [Figma File](https://www.figma.com/design/eHHj1Cw9DEi6Ky2drkdPD1/Voca-Task?node-id=0-1&t=sHLgL56IvpXRa8Gm-1) dengan fungsionalitas yang jelas dan interface yang responsif.

## Fitur Utama

1. **Login Page**

   - Formulir untuk email dan password
   - Tombol "Sign In" untuk masuk

2. **Task Page**

   - **Main Section**
     - Formulir untuk menambahkan tugas baru
     - Daftar tugas dengan tombol "Done" dan "Delete"
     - Tugas yang sudah selesai ditampilkan di bagian terpisah
     - Penghitungan jumlah tugas
   - **Profile Section**
     - Pesan "Welcome ${Name}"
     - Menampilkan avatar pengguna
     - Tombol untuk mengedit profil
     - Tombol untuk keluar

3. **Edit Profile Page**
   - Tampilkan dan ubah avatar
   - Input untuk URL profil, nama, email, dan password
   - Tombol "Submit" untuk menyimpan perubahan
   - Tombol "Back to Task Page" untuk kembali ke halaman utama

## Teknologi

- **Frontend:** React + Tailwind CSS
- **Backend:** [Indraahmadfirdaus - Voca Task BE](https://github.com/indraahmadfirdaus/vocasia-voca-task-be)
- **Routing:** React Router
- **State Management:** React Local State

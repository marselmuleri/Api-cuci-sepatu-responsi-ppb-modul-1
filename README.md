# API Cuci Sepatu (Responsi Modul 1 - Praktikum PPB)

## Deskripsi Umum
REST API sederhana untuk layanan daftar barang cuci sepatu. API ini memungkinkan operasi CRUD untuk item sepatu yang sedang dicuci. Data disimpan di Supabase (Postgres) dan API di-deploy di Vercel.

## Tujuan & Fitur Utama
- Implementasi RESTful API menggunakan Node.js + Express.
- CRUD untuk data sepatu: Create, Read, Update, Delete.
- Filter berdasarkan status: `GET /api/items?status=Selesai`.
- Penyimpanan data di Supabase.
- Deploy publik di Vercel.

## Struktur Data (tabel `items`)
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | uuid | primary key |
| name | text | nama sepatu / label |
| owner_name | text | nama pemilik |
| phone | text | nomor telepon |
| pickup_date | date | tanggal pengambilan |
| status | text | contoh: Menunggu, Proses, Selesai |
| price | numeric | harga layanan |
| notes | text | catatan tambahan |
| created_at | timestamp | waktu dibuat |

## Endpoints
Base URL: `https://<nama-deploy>.vercel.app/api/items`

### GET /api/items
Ambil semua item (opsional: ?status=Selesai untuk filter).

### GET /api/items/:id
Ambil satu item berdasarkan ID.

### POST /api/items
Buat item baru.

### PUT /api/items/:id
Update data item.

### DELETE /api/items/:id
Hapus item.

## Contoh Request & Response

### POST /api/items
Request:
```json
{
  "name": "Sneakers Putih",
  "owner_name": "Andi",
  "phone": "081234567890",
  "pickup_date": "2025-10-25",
  "status": "Menunggu",
  "price": 50000,
  "notes": "Permintaan khusus: gunakan sabun A"
}
```
Response (201):
```json
{
  "id": "generated-uuid",
  "name": "Sneakers Putih",
  "owner_name": "Andi",
  "phone": "081234567890",
  "pickup_date": "2025-10-25",
  "status": "Menunggu",
  "price": "50000.00",
  "notes": "Permintaan khusus: gunakan sabun A",
  "created_at": "2025-10-23T..."
}
```

## Langkah Instalasi & Menjalankan Secara Lokal
1. Clone repo:
   ```bash
   git clone https://github.com/<username>/<repo>.git
   cd <repo>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Buat project di Supabase dan jalankan SQL tabel `items` (lihat di modul atau README).
4. Salin `.env.example` menjadi `.env` dan isi variabel sesuai kredensial Supabase.
5. Jalankan server lokal:
   ```bash
   npm run dev
   ```
6. Akses di `http://localhost:3000/api/items`.

## Deploy (Vercel)
1. Push repo ke GitHub.
2. Login ke Vercel → Import Project → pilih repo.
3. Tambahkan Environment Variables: `SUPABASE_URL` dan `SUPABASE_KEY`.
4. Klik Deploy.
5. Test endpoint publik: `https://<nama-proyek>.vercel.app/api/items`.

## Output Wajib
- 📦 Link GitHub Repository
- 🌐 Link Deploy (Vercel)

## Lisensi
Dibuat untuk keperluan Responsi Modul 1 Praktikum PPB.

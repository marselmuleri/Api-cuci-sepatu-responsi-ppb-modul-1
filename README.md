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
Base URL: `https://responsimodulprakppb1.vercel.app/`

1. GET /api/items
Mengambil semua item (atau filter dengan ?status=Selesai).

Response Body (200 OK):

``` JSON

[
    {
        "id": "5fdc577a-709e-4159-a85d-a6fb0b08969d",
        "name": "Converse Hitam",
        "owner_name": "Dimas",
        "phone": "081298765432",
        "pickup_date": "2025-10-26",
        "status": "Menunggu",
        "price": 60000,
        "notes": "Tambahkan parfum sepatu",
        "created_at": "2025-10-23T08:11:22.230935+00:00"
    },
    {
        "id": "c78d934d-2a40-461c-884d-f4deb1e3c057",
        "name": "Sepatu Olahraga",
        "owner_name": "Citra",
        "phone": "083456789012",
        "pickup_date": null,
        "status": "Selesai",
        "price": 40000,
        "notes": "Dicuci kering",
        "created_at": "2025-10-23T06:21:32.204421+00:00"
    }
]
2. GET /api/items/:id
Mengambil satu item berdasarkan ID.

Response Body (200 OK):

JSON

{
    "id": "c78d934d-2a40-461c-884d-f4deb1e3c057",
    "name": "Sepatu Olahraga",
    "owner_name": "Citra",
    "phone": "083456789012",
    "pickup_date": null,
    "status": "Selesai",
    "price": 40000,
    "notes": "Dicuci kering",
    "created_at": "2025-10-23T06:21:32.204421+00:00"
}
3. POST /api/items
Membuat item baru.

Request Body:

JSON

{
    "name": "Converse Hitam",
    "owner_name": "Dimas",
    "phone": "081298765432",
    "pickup_date": "2025-10-26",
    "status": "Menunggu",
    "price": 60000,
    "notes": "Tambahkan parfum sepatu"
}
Response Body (201 Created):

```JSON

{
    "id": "6118c058-9e56-4efb-aa81-9e77acf41aae",
    "name": "Converse Hitam",
    "owner_name": "Dimas",
    "phone": "081298765432",
    "pickup_date": "2025-10-26",
    "status": "Menunggu",
    "price": 60000,
    "notes": "Tambahkan parfum sepatu",
    "created_at": "2025-10-23T08:14:48.784822+00:00"
}
4. PUT /api/items/:id
Update data item (misal mengubah status).

Request Body:

JSON

{
    "status": "Selesai",
    "notes": "Sudah lunas. Siap diambil."
}
Response Body (200 OK):

JSON

{
    "id": "6118c058-9e56-4efb-aa81-9e77acf41aae",
    "name": "Converse Hitam",
    "owner_name": "Dimas",
    "phone": "081298765432",
    "pickup_date": "2025-10-26",
    "status": "Selesai",
    "price": 60000,
    "notes": "Sudah lunas. Siap diambil.",
    "created_at": "2025-10-23T08:14:48.784822+00:00"
}
5. DELETE /api/items/:id
Hapus item.

Response Body (200 OK):

JSON

{
    "message": "Deleted successfully"
}

## Lisensi
Dibuat untuk keperluan Responsi Modul 1 Praktikum PPB.

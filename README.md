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

### GET /api/items
Ambil semua item (opsional: ?status=Selesai untuk filter).

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
        "id": "39cc3933-0a8c-4a07-bc1c-6f39e4faabb4",
        "name": "Sneakers Putih",
        "owner_name": "Andi",
        "phone": "081234567890",
        "pickup_date": "2025-10-25",
        "status": "Menunggu",
        "price": 50000,
        "notes": "Cuci dan pewarnaan",
        "created_at": "2025-10-23T06:21:32.204421+00:00"
    },
    {
        "id": "9a839ee3-f267-4e74-abb3-86c4e2845abf",
        "name": "Boot Kulit",
        "owner_name": "Budi",
        "phone": "082345678901",
        "pickup_date": "2025-10-24",
        "status": "Proses",
        "price": 75000,
        "notes": "Poles saja",
        "created_at": "2025-10-23T06:21:32.204421+00:00"
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

### GET /api/items/:id
Ambil satu item berdasarkan ID.

[
    {
        "id": "0cbf0b64-121a-4c08-b04e-6ddb41ff0b12",
        "name": "Converse Hitam",
        "owner_name": "Dimas",
        "phone": "081298765432",
        "pickup_date": "2025-10-26",
        "status": "Selesai",
        "price": 60000,
        "notes": "Tambahkan parfum sepatu",
        "created_at": "2025-10-23T08:14:27.438129+00:00"
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

### POST /api/items
Buat item baru.

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

### PUT /api/items/:id
Update data item.

{
    "id": "0cbf0b64-121a-4c08-b04e-6ddb41ff0b12",
    "name": "Converse Hitam",
    "owner_name": "Dimas",
    "phone": "081298765432",
    "pickup_date": "2025-10-26",
    "status": "Selesai",
    "price": 60000,
    "notes": "Tambahkan parfum sepatu",
    "created_at": "2025-10-23T08:14:27.438129+00:00"
}

### DELETE /api/items/:id
Hapus item.

{
    "message": "Deleted successfully"
}

## Lisensi
Dibuat untuk keperluan Responsi Modul 1 Praktikum PPB.

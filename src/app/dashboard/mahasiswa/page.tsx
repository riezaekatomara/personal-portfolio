"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/../../lib/supabase";
import AddMahasiswaForm from "./AddMahasiswaForm";
import EditMahasiswaForm from "./EditMahasiswaForm";

type Mahasiswa = {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  angkatan: number;
  ipk: number;
};

export default function MahasiswaPage() {
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Mahasiswa | null>(null);

  const fetchData = async () => {
    const { data, error } = await supabase.from("mahasiswa").select("*");
    if (!error && data) setData(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus data ini?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("mahasiswa").delete().eq("id", id);
    if (!error) fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>

      {/* Form Add / Edit */}
      {editing ? (
        <EditMahasiswaForm
          mahasiswa={editing}
          onSuccess={() => {
            setEditing(null);
            fetchData();
          }}
        />
      ) : (
        <AddMahasiswaForm onSuccess={fetchData} />
      )}

      {/* Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border mt-6">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">NIM</th>
              <th className="p-2 border">Jurusan</th>
              <th className="p-2 border">Angkatan</th>
              <th className="p-2 border">IPK</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mhs) => (
              <tr key={mhs.id} className="hover:bg-gray-50">
                <td className="p-2 border">{mhs.nama}</td>
                <td className="p-2 border">{mhs.nim}</td>
                <td className="p-2 border">{mhs.jurusan}</td>
                <td className="p-2 border">{mhs.angkatan}</td>
                <td className="p-2 border">{mhs.ipk}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => setEditing(mhs)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(mhs.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded ml-2"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

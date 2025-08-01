"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/../../lib/supabase";
import AddMataKuliahForm from "./AddMataKuliahForm";
import EditMataKuliahForm from "./EditMataKuliahForm";

type MataKuliah = {
  kode_mk: string;
  nama_mk: string;
  sks: number;
  semester: number;
};

export default function MataKuliahPage() {
  const [data, setData] = useState<MataKuliah[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<MataKuliah | null>(null);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("mata_kuliah").select("*");
    if (error) {
      console.error("Gagal fetch:", error);
    } else {
      setData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (mk: MataKuliah) => {
    setEditing(mk);
  };

  const handleDelete = async (kodeMK: string) => {
    const confirmDelete = confirm("Yakin ingin menghapus mata kuliah ini?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("mata_kuliah")
      .delete()
      .eq("kode_mk", kodeMK);

    if (error) {
      alert("Gagal menghapus");
      console.error("Delete error:", error);
    } else {
      fetchData();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Mata Kuliah</h1>

      {editing ? (
        <EditMataKuliahForm
          mataKuliah={editing}
          onSuccess={() => {
            setEditing(null);
            fetchData();
          }}
        />
      ) : (
        <AddMataKuliahForm onSuccess={fetchData} />
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border mt-6">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Kode MK</th>
              <th className="p-2 border">Nama MK</th>
              <th className="p-2 border">SKS</th>
              <th className="p-2 border">Semester</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mk) => (
              <tr key={mk.kode_mk} className="hover:bg-gray-50">
                <td className="p-2 border">{mk.kode_mk}</td>
                <td className="p-2 border">{mk.nama_mk}</td>
                <td className="p-2 border">{mk.sks}</td>
                <td className="p-2 border">{mk.semester}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(mk)}
                    className="px-2 py-1 mr-2 text-sm bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(mk.kode_mk)}
                    className="px-2 py-1 text-sm bg-red-600 text-white rounded"
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

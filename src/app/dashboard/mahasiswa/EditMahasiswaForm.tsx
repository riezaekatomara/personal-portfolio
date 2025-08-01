"use client";

import { useState } from "react";
import { supabase } from "@/../../lib/supabase";

type Mahasiswa = {
  id: number;
  nama: string;
  nim: string;
  jurusan: string;
  angkatan: number;
  ipk: number;
};

type Props = {
  mahasiswa: Mahasiswa;
  onSuccess: () => void;
};

export default function EditMahasiswaForm({ mahasiswa, onSuccess }: Props) {
  const [form, setForm] = useState({
    nama: mahasiswa.nama,
    nim: mahasiswa.nim,
    jurusan: mahasiswa.jurusan,
    angkatan: mahasiswa.angkatan.toString(),
    ipk: mahasiswa.ipk.toString(),
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (
      !form.nama ||
      !form.nim ||
      !form.jurusan ||
      !form.angkatan ||
      !form.ipk
    ) {
      return "Semua field harus diisi.";
    }
    if (
      isNaN(Number(form.angkatan)) ||
      Number(form.angkatan) < 2015 ||
      Number(form.angkatan) > new Date().getFullYear()
    ) {
      return "Angkatan tidak valid.";
    }
    if (
      isNaN(Number(form.ipk)) ||
      Number(form.ipk) < 0 ||
      Number(form.ipk) > 4
    ) {
      return "IPK harus antara 0.00 sampai 4.00.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const { error } = await supabase
      .from("mahasiswa")
      .update({
        nama: form.nama,
        nim: form.nim,
        jurusan: form.jurusan,
        angkatan: Number(form.angkatan),
        ipk: Number(form.ipk),
      })
      .eq("id", mahasiswa.id);

    if (error) {
      setError("Gagal mengupdate data.");
    } else {
      setError("");
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        value={form.nama}
        onChange={(e) => setForm({ ...form, nama: e.target.value })}
        className="border p-2 w-full"
        placeholder="Nama"
        required
      />
      <input
        value={form.nim}
        onChange={(e) => setForm({ ...form, nim: e.target.value })}
        className="border p-2 w-full"
        placeholder="NIM"
        required
      />
      <input
        value={form.jurusan}
        onChange={(e) => setForm({ ...form, jurusan: e.target.value })}
        className="border p-2 w-full"
        placeholder="Jurusan"
        required
      />
      <input
        value={form.angkatan}
        type="number"
        onChange={(e) => setForm({ ...form, angkatan: e.target.value })}
        className="border p-2 w-full"
        placeholder="Angkatan"
        required
      />
      <input
        value={form.ipk}
        type="number"
        step="0.01"
        onChange={(e) => setForm({ ...form, ipk: e.target.value })}
        className="border p-2 w-full"
        placeholder="IPK"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Simpan Perubahan
      </button>
    </form>
  );
}

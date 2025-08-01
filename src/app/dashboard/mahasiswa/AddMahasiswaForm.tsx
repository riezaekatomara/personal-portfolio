"use client";

import { useState } from "react";
import { supabase } from "@/../../lib/supabase";

type Props = {
  onSuccess: () => void;
};

export default function AddMahasiswaForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    nama: "",
    nim: "",
    jurusan: "",
    angkatan: "",
    ipk: "",
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
      return "Semua field harus diisi";
    }
    if (
      isNaN(Number(form.angkatan)) ||
      Number(form.angkatan) < 2015 ||
      Number(form.angkatan) > new Date().getFullYear()
    ) {
      return "Angkatan tidak valid";
    }
    if (
      isNaN(Number(form.ipk)) ||
      Number(form.ipk) < 0 ||
      Number(form.ipk) > 4
    ) {
      return "IPK harus antara 0.00 sampai 4.00";
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

    const { error } = await supabase.from("mahasiswa").insert([
      {
        nama: form.nama,
        nim: form.nim,
        jurusan: form.jurusan,
        angkatan: Number(form.angkatan),
        ipk: Number(form.ipk),
      },
    ]);

    if (!error) {
      setForm({
        nama: "",
        nim: "",
        jurusan: "",
        angkatan: "",
        ipk: "",
      });
      setError("");
      onSuccess();
    } else {
      setError("Gagal menyimpan ke database.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        placeholder="Nama"
        value={form.nama}
        onChange={(e) => setForm({ ...form, nama: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        placeholder="NIM"
        value={form.nim}
        onChange={(e) => setForm({ ...form, nim: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        placeholder="Jurusan"
        value={form.jurusan}
        onChange={(e) => setForm({ ...form, jurusan: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        placeholder="Angkatan"
        type="number"
        value={form.angkatan}
        onChange={(e) => setForm({ ...form, angkatan: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <input
        placeholder="IPK"
        type="number"
        step="0.01"
        value={form.ipk}
        onChange={(e) => setForm({ ...form, ipk: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Tambah Mahasiswa
      </button>
    </form>
  );
}

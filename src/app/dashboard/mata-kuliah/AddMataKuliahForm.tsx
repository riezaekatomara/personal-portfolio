"use client";

import { useState } from "react";
import { supabase } from "@/../../lib/supabase";

type Props = {
  onSuccess: () => void;
};

export default function AddMataKuliahForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    kode_mk: "",
    nama_mk: "",
    sks: "",
    semester: "",
  });
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.kode_mk || !form.nama_mk || !form.sks || !form.semester) {
      return "Semua field wajib diisi.";
    }
    if (
      isNaN(Number(form.sks)) ||
      Number(form.sks) <= 0 ||
      Number(form.sks) > 6
    ) {
      return "SKS harus antara 1–6.";
    }
    if (
      isNaN(Number(form.semester)) ||
      Number(form.semester) <= 0 ||
      Number(form.semester) > 14
    ) {
      return "Semester harus antara 1–14.";
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

    const { error } = await supabase.from("mata_kuliah").insert({
      kode_mk: form.kode_mk,
      nama_mk: form.nama_mk,
      sks: Number(form.sks),
      semester: Number(form.semester),
    });

    if (error) {
      setError("Gagal menambahkan data.");
    } else {
      setForm({ kode_mk: "", nama_mk: "", sks: "", semester: "" });
      setError("");
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        value={form.kode_mk}
        onChange={(e) => setForm({ ...form, kode_mk: e.target.value })}
        className="border p-2 w-full"
        placeholder="Kode MK"
        required
      />
      <input
        value={form.nama_mk}
        onChange={(e) => setForm({ ...form, nama_mk: e.target.value })}
        className="border p-2 w-full"
        placeholder="Nama MK"
        required
      />
      <input
        value={form.sks}
        onChange={(e) => setForm({ ...form, sks: e.target.value })}
        className="border p-2 w-full"
        placeholder="SKS"
        type="number"
        required
      />
      <input
        value={form.semester}
        onChange={(e) => setForm({ ...form, semester: e.target.value })}
        className="border p-2 w-full"
        placeholder="Semester"
        type="number"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Tambah
      </button>
    </form>
  );
}

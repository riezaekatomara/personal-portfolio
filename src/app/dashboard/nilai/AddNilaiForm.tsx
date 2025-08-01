"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../../../lib/supabase";
import { toast } from "react-hot-toast";

const schema = z.object({
  nim: z.string().min(1, "NIM wajib diisi"),
  kode_mk: z.string().min(1, "Kode MK wajib diisi"),
  nilai_angka: z.number().min(0, "Minimal 0").max(100, "Maksimal 100"),
});

type FormData = z.infer<typeof schema>;

type Props = {
  onSuccess: () => void;
};

function konversiNilai(nilai: number): string {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 65) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

export default function AddNilaiForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const nilai_huruf = konversiNilai(data.nilai_angka);
    const { error } = await supabase
      .from("nilai")
      .insert([{ ...data, nilai_huruf }]);

    if (error) {
      toast.error("Gagal menambahkan data");
    } else {
      toast.success("Data berhasil ditambahkan");
      reset();
      onSuccess();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-blue-50 border border-blue-300 shadow rounded p-4 mb-6"
    >
      <h2 className="text-lg font-semibold mb-4 text-blue-700">Tambah Nilai</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">NIM</label>
        <input
          {...register("nim")}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.nim && (
          <p className="text-red-500 text-sm mt-1">{errors.nim.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Kode MK</label>
        <input
          {...register("kode_mk")}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.kode_mk && (
          <p className="text-red-500 text-sm mt-1">{errors.kode_mk.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Nilai Angka</label>
        <input
          type="number"
          {...register("nilai_angka", { valueAsNumber: true })}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.nilai_angka && (
          <p className="text-red-500 text-sm mt-1">
            {errors.nilai_angka.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Simpan
      </button>
    </form>
  );
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import AddNilaiForm from "./AddNilaiForm";
import EditNilaiForm from "./EditNilaiForm";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Nilai = {
  id: number;
  nim: string;
  kode_mk: string;
  nilai_angka: number;
  nilai_huruf: string;
};

export default function Page() {
  const [data, setData] = useState<Nilai[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Nilai | null>(null);
  const [search, setSearch] = useState("");
  const [filterNim, setFilterNim] = useState("");
  const [filterMK, setFilterMK] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("nilai").select("*");
    if (error) {
      console.error("Gagal fetch data:", error);
    } else {
      setData(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Yakin ingin menghapus data ini?");
    if (!confirm) return;
    const { error } = await supabase.from("nilai").delete().eq("id", id);
    if (!error) fetchData();
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Nilai");
    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "data_nilai.xlsx");
  };

  const exportToPDF = async () => {
    const table = document.getElementById("nilai-table");
    if (!table) return;
    const canvas = await html2canvas(table);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
    pdf.save("data_nilai.pdf");
  };

  const uniqueNIM = Array.from(new Set(data.map((d) => d.nim)));
  const uniqueMK = Array.from(new Set(data.map((d) => d.kode_mk)));

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.nim.toLowerCase().includes(search.toLowerCase()) ||
      item.kode_mk.toLowerCase().includes(search.toLowerCase());
    const matchNIM = filterNim ? item.nim === filterNim : true;
    const matchMK = filterMK ? item.kode_mk === filterMK : true;
    return matchSearch && matchNIM && matchMK;
  });

  const chartData = ["A", "B", "C", "D", "E"].map((huruf) => ({
    huruf,
    jumlah: data.filter((d) => d.nilai_huruf.toUpperCase() === huruf).length,
  }));

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset ke halaman pertama saat filter/search berubah
  }, [search, filterNim, filterMK]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Manajemen Nilai Mahasiswa</h1>

      {editing ? (
        <EditNilaiForm
          nilai={editing}
          onSuccess={() => {
            setEditing(null);
            fetchData();
          }}
        />
      ) : (
        <AddNilaiForm onSuccess={fetchData} />
      )}

      <div className="my-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Cari NIM atau Kode MK..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />

        <div className="flex gap-2 w-full md:w-auto">
          <select
            className="border px-3 py-2 rounded"
            value={filterNim}
            onChange={(e) => setFilterNim(e.target.value)}
          >
            <option value="">Filter NIM</option>
            {uniqueNIM.map((nim) => (
              <option key={nim} value={nim}>
                {nim}
              </option>
            ))}
          </select>

          <select
            className="border px-3 py-2 rounded"
            value={filterMK}
            onChange={(e) => setFilterMK(e.target.value)}
          >
            <option value="">Filter MK</option>
            {uniqueMK.map((mk) => (
              <option key={mk} value={mk}>
                {mk}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={exportToExcel}
            className="w-32 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-center"
          >
            Export Excel
          </button>
          <button
            onClick={exportToPDF}
            className="w-32 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-center"
          >
            Export PDF
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-gray-500">Memuat data...</div>
      ) : (
        <>
          <table
            id="nilai-table"
            className="w-full border border-gray-300 mb-6"
          >
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">NIM</th>
                <th className="border p-2">Kode MK</th>
                <th className="border p-2">Nilai Angka</th>
                <th className="border p-2">Nilai Huruf</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 p-4">
                    Tidak ada data ditemukan.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2">{item.nim}</td>
                    <td className="border p-2">{item.kode_mk}</td>
                    <td className="border p-2">{item.nilai_angka}</td>
                    <td className="border p-2">{item.nilai_huruf}</td>
                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => setEditing(item)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <h2 className="text-lg font-semibold mb-2">Distribusi Nilai Huruf</h2>
      <div className="bg-white border rounded p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="huruf" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

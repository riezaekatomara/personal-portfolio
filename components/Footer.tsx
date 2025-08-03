export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200/50 py-4 mt-8 text-center text-sm text-gray-500 transition-all duration-300">
      <p className="hover:text-blue-600 transition-colors duration-200">
        © {new Date().getFullYear()} Rieza Eka Tomara. All rights reserved.
      </p>
    </footer>
  );
}

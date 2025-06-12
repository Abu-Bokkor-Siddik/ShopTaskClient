export default function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button className="px-3 py-1 rounded bg-green-600 text-white">1</button>
      <button className="px-3 py-1 rounded bg-gray-200">2</button>
      <button className="px-3 py-1 rounded bg-gray-200">3</button>
      <span className="px-3 py-1">...</span>
      <button className="px-3 py-1 rounded bg-gray-200">21</button>
    </div>
  );
}


// src/pages/Scores.tsx
export default function Trending() {
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live Scores Preview */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">⚽ Latest Scores</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Lakers vs Warriors</span>
              <span className="text-blue-400">102 - 98</span>
            </li>
            <li className="flex justify-between">
              <span>Arsenal vs Chelsea</span>
              <span className="text-blue-400">2 - 1</span>
            </li>
          </ul>
        </div>

        {/* Latest News Preview */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">📰 Top Headlines</h2>
          <ul className="list-disc pl-5 space-y-2 text-blue-300">
            <li>LeBron hints at potential retirement after this season</li>
            <li>Messi expected to start next MLS game after recovery</li>
            <li>Patrick Mahomes: “We’re not done yet.”</li>
          </ul>
        </div>
      </div>

      {/* Call to Action / Personalized Section */}
      <div className="mt-8 bg-gray-700 p-6 rounded-lg shadow-md">
        <h3 className="text-xl mb-2">Your Favorite Teams</h3>
        <p className="text-gray-300">Add your favorite teams to get personalized updates!</p>
      </div>
    </div>
  );
}
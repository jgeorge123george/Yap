// src/pages/News.tsx

export default function News() {
  const sampleArticles = [
    {
      title: "🏀 Celtics Win NBA Championship in Game 7 Thriller",
      description: "In a nail-biting finish, the Boston Celtics clinched the NBA title with a last-second shot by Jayson Tatum.",
      source: "ESPN",
      publishedAt: "2025-06-11",
    },
    {
      title: "⚽ Mbappé Joins Real Madrid in Record-Breaking Deal",
      description: "Kylian Mbappé has officially signed with Real Madrid in one of the most expensive transfers in football history.",
      source: "BBC Sport",
      publishedAt: "2025-06-10",
    },
    {
      title: "🏈 NFL Preseason: Top 5 Rookies to Watch",
      description: "With preseason games starting, here's our pick of the top rookies who could make an impact this season.",
      source: "Bleacher Report",
      publishedAt: "2025-06-09",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📰 Latest Sports News</h1>
      <div className="space-y-6">
        {sampleArticles.map((article, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-300 mb-2">{article.description}</p>
            <div className="text-sm text-gray-400">
              Source: {article.source} | Published: {article.publishedAt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">
            診断中...
          </h2>

          <p className="text-base text-gray-600">
            あなたの投資タイプを<br />
            分析しています
          </p>
        </div>
      </div>
    </div>
  );
}

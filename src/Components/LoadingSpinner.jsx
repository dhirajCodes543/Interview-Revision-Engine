function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

        <p className="text-sm font-medium text-gray-600">
          Loading your data...
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
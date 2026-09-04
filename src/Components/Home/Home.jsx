import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

  const data = useSelector(state => state.subjects)

  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-2xl text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          Interview Preparation
        </span>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Ready to begin your preparation?
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Organize your subjects, prepare important questions and track your
          interview preparation.
        </p>

        <div className="mt-10">
          {data.length>0 ? (
            <Link
              to="/prepare"
              className="inline-flex items-center rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md"
            >
              Continue Preparing
              <span className="ml-2">→</span>
            </Link>
          ) : (
            <Link
              to="/prepare"
              className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Start Preparing
              <span className="ml-2">→</span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
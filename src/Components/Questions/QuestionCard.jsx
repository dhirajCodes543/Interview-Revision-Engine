import { useState } from "react";

function QuestionCard({ question, onSubmitAnswer }) {
  const [showAnswerField, setShowAnswerField] = useState(false);
  const [showPreviousAnswers, setShowPreviousAnswers] = useState(false);
  const [answer, setAnswer] = useState("");

  const previousAnswers = question.ans || [];

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedAnswer = answer.trim();

    if (!trimmedAnswer) return;

    onSubmitAnswer(question, trimmedAnswer);

    setAnswer("");
    setShowAnswerField(false);
  };

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          Interview Question
        </p>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            question.isAttempted
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {question.isAttempted ? "Attempted" : "Not Attempted"}
        </span>
      </div>

      <h2 className="mt-4 text-lg font-semibold leading-7 text-gray-900">
        {question.question}
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {!showAnswerField && (
          <button
            type="button"
            onClick={() => setShowAnswerField(true)}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {question.isAttempted
              ? "Attempt Again"
              : "Attempt This Question"}
          </button>
        )}

        {previousAnswers.length > 0 && (
          <button
            type="button"
            onClick={() =>
              setShowPreviousAnswers((previous) => !previous)
            }
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            {showPreviousAnswers
              ? "Hide Previous Answers"
              : `Show Previous Answers (${previousAnswers.length})`}
          </button>
        )}
      </div>

      {showAnswerField && (
        <form onSubmit={handleSubmit} className="mt-6">
          <label
            htmlFor={`answer-${question.id}`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Your answer
          </label>

          <textarea
            id={`answer-${question.id}`}
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Write your answer here..."
            rows="5"
            autoFocus
            className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              disabled={!answer.trim()}
              className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              Submit Answer
            </button>

            <button
              type="button"
              onClick={() => {
                setShowAnswerField(false);
                setAnswer("");
              }}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {showPreviousAnswers && (
        <div className="mt-6 border-t border-gray-200 pt-5">
          <h3 className="text-sm font-semibold text-gray-800">
            Previous Answers
          </h3>

          <div className="mt-3 space-y-3">
            {previousAnswers.map((previousAnswer, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Attempt {index + 1}
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-700">
                  {previousAnswer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default QuestionCard;
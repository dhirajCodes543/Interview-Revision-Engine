import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestions } from "../../Features/userDataSlice";
import QuestionCard from "./QuestionCard";

function Session() {
  const { topicId } = useParams();
  const dispatch = useDispatch();

  const topics = useSelector((state) => state.topics);
  const questions = useSelector((state) => state.questions);

  const selectedTopic = topics.find(
    (topic) => topic.id === topicId
  );

  const selectedQuestions = questions.filter(
    (question) => question.topicId === topicId
  );

  const handleSubmitAnswer = (question, answer) => {
    const updatedQuestion = {
      ...question,
      isAttempted: true,
      ans: [...(question.ans || []), answer],
    };

    dispatch(updateQuestions(updatedQuestion));
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Preparation Session
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {selectedTopic?.name || "Topic"}
          </h1>

          <p className="mt-2 text-gray-600">
            Attempt each question and save your answer for future revision.
          </p>
        </div>

        {selectedQuestions.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="font-medium text-gray-700">
              No questions found for this topic
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Add some questions before starting the session.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5">
            {selectedQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onSubmitAnswer={handleSubmitAnswer}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Session;
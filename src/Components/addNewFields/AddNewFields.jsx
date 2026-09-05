import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubs,addTopics,addQuestion } from "../../Features/userDataSlice";

function AddNewFields() {
  const dispatch = useDispatch();

  const subjects = useSelector((state) => state.subjects);
  const topics = useSelector((state) => state.topics);

  const [fieldType, setFieldType] = useState("");

  const [newSubject, setNewSubject] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [selectedTopicId, setSelectedTopicId] = useState("");

  const addNewField = (event) => {
    event.preventDefault();

    if (fieldType === "subject") {
      if (!newSubject.trim()) return;

      const subjectData = {
        id: crypto.randomUUID(),
        name: newSubject.trim(),
      };

      dispatch(addSubs(subjectData));
      setNewSubject("");
    }

    if (fieldType === "topic") {
      if (!newTopic.trim() || !selectedSubjectId) return;

      const topicData = {
        id: crypto.randomUUID(),
        name: newTopic.trim(),
        subjectId: selectedSubjectId,
      };

      dispatch(addTopics(topicData));

      setNewTopic("");
      setSelectedSubjectId("");
    }

    if (fieldType === "question") {
      if (!newQuestion.trim() || !selectedTopicId) return;

      const questionData = {
        id: crypto.randomUUID(),
        question: newQuestion.trim(),
        topicId: selectedTopicId,
        isAttempted:false,
        ans:[]
      };

      dispatch(addQuestion(questionData));

      setNewQuestion("");
      setSelectedTopicId("");
    }
  };

  const optionClass = (type) =>
    `rounded-xl border px-5 py-3 text-sm font-semibold transition ${
      fieldType === type
        ? "border-blue-600 bg-blue-600 text-white"
        : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600"
    }`;

  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Add New Preparation Data
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Choose what you want to add.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setFieldType("subject")}
          className={optionClass("subject")}
        >
          Add Subject
        </button>

        <button
          type="button"
          onClick={() => setFieldType("topic")}
          className={optionClass("topic")}
        >
          Add Topic
        </button>

        <button
          type="button"
          onClick={() => setFieldType("question")}
          className={optionClass("question")}
        >
          Add Question
        </button>
      </div>

      {fieldType && (
        <form
          onSubmit={addNewField}
          className="mt-7 rounded-xl bg-gray-50 p-5"
        >
          {fieldType === "subject" && (
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Subject name
              </label>

              <input
                id="subject"
                type="text"
                value={newSubject}
                onChange={(event) => setNewSubject(event.target.value)}
                placeholder="For example: DBMS"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          )}

          {fieldType === "topic" && (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="topic-subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Choose a subject
                </label>

                <select
                  id="topic-subject"
                  value={selectedSubjectId}
                  onChange={(event) =>
                    setSelectedSubjectId(event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select subject</option>

                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  ))}
                </select>

                {subjects.length === 0 && (
                  <p className="mt-2 text-sm text-red-500">
                    Add a subject before adding a topic.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Topic name
                </label>

                <input
                  id="topic"
                  type="text"
                  value={newTopic}
                  onChange={(event) => setNewTopic(event.target.value)}
                  placeholder="For example: Indexing"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          )}

          {fieldType === "question" && (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="question-topic"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Choose a topic
                </label>

                <select
                  id="question-topic"
                  value={selectedTopicId}
                  onChange={(event) =>
                    setSelectedTopicId(event.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select topic</option>

                  {topics.map((topic) => {
                    const parentSubject = subjects.find(
                      (subject) => subject.id === topic.subjectId
                    );

                    return (
                      <option key={topic.id} value={topic.id}>
                        {topic.name}
                        {parentSubject
                          ? ` — ${parentSubject.name}`
                          : ""}
                      </option>
                    );
                  })}
                </select>

                {topics.length === 0 && (
                  <p className="mt-2 text-sm text-red-500">
                    Add a topic before adding a question.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="question"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Question
                </label>

                <textarea
                  id="question"
                  value={newQuestion}
                  onChange={(event) =>
                    setNewQuestion(event.target.value)
                  }
                  placeholder="Enter your interview question"
                  rows="4"
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add {fieldType}
          </button>
        </form>
      )}
    </section>
  );
}

export default AddNewFields;
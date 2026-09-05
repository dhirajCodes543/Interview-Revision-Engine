import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PrevSavedData() {
    const subjects = useSelector((state) => state.subjects);
    const topics = useSelector((state) => state.topics);

    const [selectedSubjectId, setSelectedSubjectId] = useState(null);

    const selectedSubject = subjects.find(
        (subject) => subject.id === selectedSubjectId
    );

    const selectedTopics = topics.filter(
        (topic) => topic.subjectId === selectedSubjectId
    );

    return (

        <>
            <div>
                <h1 className="text-3xl font-bold text-gray-900">
                    Your Preparation
                </h1>

                <p className="mt-2 text-gray-600">
                    Select a subject to view all the topics saved inside it.
                </p>
            </div>

            <section className="mt-8">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">
                    Subjects
                </h2>

                {subjects.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
                        <p className="font-medium text-gray-700">
                            No subjects added yet
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Add your first subject using the section below.
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-3">
                        {subjects.map((subject) => (
                            <button
                                key={subject.id}
                                type="button"
                                onClick={() => setSelectedSubjectId(subject.id)}
                                className={`rounded-xl border px-5 py-3 font-medium transition ${selectedSubjectId === subject.id
                                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600"
                                    }`}
                            >
                                {subject.name}
                            </button>
                        ))}
                    </div>
                )}
            </section>

            {selectedSubject && (
                <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="border-b border-gray-100 pb-4">
                        <p className="text-sm font-medium text-blue-600">
                            Selected subject
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-gray-900">
                            {selectedSubject.name}
                        </h2>
                    </div>

                    <div className="mt-5">
                        <h3 className="font-semibold text-gray-800">
                            Topics ({selectedTopics.length})
                        </h3>

                        {selectedTopics.length === 0 ? (
                            <div className="mt-4 rounded-xl bg-gray-50 p-6 text-center">
                                <p className="text-gray-600">
                                    No topics have been added to this subject.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {selectedTopics.map((topic, index) => (
                                    <Link
                                        key={topic.id}
                                        to={`/session/${topic.id}`}
                                        className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-blue-300 hover:bg-blue-50"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                            Topic {index + 1}
                                        </p>

                                        <p className="mt-1 font-medium text-gray-800">
                                            {topic.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>

    );
}

export default PrevSavedData;
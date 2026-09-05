import PrevSavedData from "../prevSavedData/prevSavedData";
import AddNewFields from "../addNewFields/AddNewFields";

export default function AddOrViewFields() {

    return (
        <>
            <main className="min-h-screen bg-gray-50 px-5 py-10">
                <div className="mx-auto max-w-5xl">
                    <PrevSavedData />
                    <AddNewFields />
                </div>
            </main>
        </>
    );
}
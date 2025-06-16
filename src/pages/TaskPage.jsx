import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="mb-4 flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-400 text-white p-2 rounded-md absolute left-0 top-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="bg-slate-200 p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

import TaskCardList from "@/components/task/TaskCardList";
import TaskForm from "@/components/task/TaskForm";

export default function Home() {
  return (
    <section className="w-full">
      <div className="h-screen flex items-start justify-center p-4">
        <TaskForm />
        <TaskCardList />
      </div>
    </section>
  );
}

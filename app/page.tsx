import { UserLists } from "@/app/features/userLists";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <UserLists />
      </div>
    </div>
  );
}

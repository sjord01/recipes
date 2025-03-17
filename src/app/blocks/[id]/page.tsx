import { db } from "@/database";
import { notFound } from "next/navigation";

interface BlockShowPageProps {
  params: {
    id: string;
  };
}

export default async function BlockShowPage({ params }: BlockShowPageProps) {
  const blockId = await params;
  const block = await db.block.findUnique({
    where: {
      id: parseInt(blockId.id),
    },
  });
  if (!block) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{block.title}</h1>
        <div className="flex gap-4">
          <button className="p-2 border rounded">Edit</button>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{block.code}</code>
      </pre>
    </div>
  );
}

import { db } from "@/database";
import { notFound } from "next/navigation";
import { deleteBlock, updateBlock } from "@/blockactions";

interface BlockShowPageProps {
  params: {
    id: string;
  };
}

export default async function BlockShowPage({ params }: BlockShowPageProps) {
  const blockId = parseInt(params.id);  // Ensure the id is correctly parsed
  const block = await db.block.findUnique({
    where: {
      id: blockId,
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
            <form action={deleteBlock}>
              <input type="hidden" name="id" value={blockId} />
              <button type="submit" className="p-2 border rounded bg-red-500 text-white hover:bg-red-700">
                Delete
              </button>
            </form>
          </div>
        </div>
        <form action={updateBlock}>
          <input type="hidden" name="id" value={blockId} />
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
                type="text"
                name="title"
                id="title"
                defaultValue={block.title}
                className="mt-1 p-2 border rounded w-full"
                required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              Code
            </label>
            <textarea
                name="code"
                id="code"
                defaultValue={block.code}
                className="mt-1 p-2 border rounded w-full"
                required
            />
          </div>
          <button
              type="submit"
              className="rounded p-2 bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
          >
            Update
          </button>
        </form>
      </div>
  );
}
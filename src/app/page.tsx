import { db } from "@/database";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  return (
    <div>
      <div className="flex m-2 justify-between">
        <h1>Blocks</h1>
        <Link href="/blocks/create">Create</Link>
      </div>
      <div className="flex flex-col gap-2">
        {blocks.map((block) => (
          <Link
            key={block.id}
            href={`/blocks/${block.id}`}
            className="flex justify-between items-center p-2 border rounded"
          >
            {block.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

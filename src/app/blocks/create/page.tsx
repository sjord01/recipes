import { createBlock } from "@/blockactions";

export default function BlockCreatePage() {

  return (
      <form action={createBlock}>
        <h3 className="font-bold m-3">Create a Block</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
                type="text"
                name="title"
                className="border rounded p-2 w-full"
                id="title"
            />
          </div>

          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
                name="code"
                className="border rounded p-2 w-full"
                id="code"
            />
          </div>

          <button
              type="submit"
              className="rounded p-2 bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
  );
}
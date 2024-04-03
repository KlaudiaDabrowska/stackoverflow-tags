import TagsTable from "@/components/TagsTable";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <TagsTable />
    </Suspense>
  );
}

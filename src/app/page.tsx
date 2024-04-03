import TagsTable from "@/components/Table/TagsTable";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <TagsTable />
    </Suspense>
  );
}

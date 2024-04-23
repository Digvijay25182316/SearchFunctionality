import data from "@/Counselors.json";
import Seva from "@/components/FormComponent";
import Search from "@/components/Search";
export default function Home({
  searchParams,
}: {
  searchParams: { search: string | number };
}) {
  const results = data.filter((item: any) => {
    for (const key in item) {
      const value = item[key];

      if (typeof value === "string") {
        if (
          value
            .toLowerCase()
            .includes(searchParams.search?.toString().toLowerCase())
        ) {
          return true;
        }
      } else if (typeof value === "number") {
        if (
          value
            .toString()
            .toLowerCase()
            .includes(searchParams.search?.toString().toLowerCase())
        ) {
          return true;
        }
      }
    }
    return false;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col items-center">
        <Seva data={results.length > 0 ? results : data} />
      </div>
    </main>
  );
}

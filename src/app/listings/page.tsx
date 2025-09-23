"use client";

const placeholderListings = [
  {
    id: "1",
    title: "Calculus: Early Transcendentals",
    price: "$45",
    status: "Available",
  },
  {
    id: "2",
    title: "Introduction to Algorithms",
    price: "$60",
    status: "Reserved",
  },
  {
    id: "3",
    title: "Organic Chemistry",
    price: "$40",
    status: "Available",
  },
];

export default function ListingsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Current listings</h1>
        <p className="text-slate-600">
          Replace this placeholder data with content from your Supabase tables.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {placeholderListings.map((listing) => (
          <li
            key={listing.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {listing.title}
            </h2>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
              <span>{listing.price}</span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                {listing.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

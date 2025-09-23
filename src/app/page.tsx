import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-start gap-6 rounded-2xl bg-white p-10 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        Marketplace
      </p>
      <h1 className="text-4xl font-bold text-slate-900">
        Find and share textbooks with your campus community
      </h1>
      <p className="max-w-2xl text-lg text-slate-600">
        This starter project pairs Next.js, Tailwind CSS, and Supabase so you can
        move quickly when building a simple listing experience.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/listings"
          className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
        >
          Browse listings
        </Link>
        <Link
          href="/listings/new"
          className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
        >
          Post a listing
        </Link>
      </div>
    </section>
  );
}

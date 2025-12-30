// app/page.tsx

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-900 to-black text-white px-6">
      <section className="max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/15 text-red-500 text-2xl">
          ⚙️
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-3">
          Website Under Maintenance
        </h1>

        {/* Divider */}
        <div className="mx-auto mb-6 h-0.5 w-14 bg-red-600/70" />

        {/* Copy */}
        <p className="text-sm leading-relaxed text-gray-300">
          We’re currently performing maintenance and internal updates.
          <br />
          The website will be available once this process is complete.
        </p>
      </section>
    </main>
  );
}

import SettingsForm from "@/components/SettingsForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account and application preferences.",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-12 sm:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500/40 focus:ring-offset-2 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-offset-black"
        >
          ← Back to home
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Settings
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Update your profile details and preferences.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
          <SettingsForm />
        </section>
      </main>
    </div>
  );
}

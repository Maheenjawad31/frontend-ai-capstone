import Link from "next/link";
import SettingsForm from "@/components/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="min-h-full bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Back to home
          </Link>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Settings
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Manage your profile, preferences, and notification settings.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <SettingsForm
            initialValues={{
              displayName: "Jane Doe",
              email: "jane@example.com",
              username: "janedoe",
              bio: "Frontend developer building with React and Next.js.",
            }}
          />
        </div>
      </main>
    </div>
  );
}

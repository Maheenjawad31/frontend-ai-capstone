"use client";

import { FormEvent, useState } from "react";

export type SettingsFormValues = {
  displayName: string;
  email: string;
  username: string;
  language: string;
  theme: "system" | "light" | "dark";
  emailNotifications: boolean;
  marketingEmails: boolean;
  bio: string;
};

const defaultValues: SettingsFormValues = {
  displayName: "",
  email: "",
  username: "",
  language: "en",
  theme: "system",
  emailNotifications: true,
  marketingEmails: false,
  bio: "",
};

type SettingsFormProps = {
  initialValues?: Partial<SettingsFormValues>;
  onSubmit?: (values: SettingsFormValues) => void | Promise<void>;
};

export default function SettingsForm({
  initialValues,
  onSubmit,
}: SettingsFormProps) {
  const [values, setValues] = useState<SettingsFormValues>({
    ...defaultValues,
    ...initialValues,
  });
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );

  const updateField = <K extends keyof SettingsFormValues>(
    field: K,
    value: SettingsFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");

    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setValues({ ...defaultValues, ...initialValues });
    setStatus("idle");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Profile
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Basic information visible on your account.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Display name
            </span>
            <input
              type="text"
              name="displayName"
              value={values.displayName}
              onChange={(event) =>
                updateField("displayName", event.target.value)
              }
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Username
            </span>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={(event) => updateField("username", event.target.value)}
              placeholder="janedoe"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
            />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="jane@example.com"
            required
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Bio
          </span>
          <textarea
            name="bio"
            value={values.bio}
            onChange={(event) => updateField("bio", event.target.value)}
            rows={4}
            placeholder="Tell us a little about yourself."
            className="w-full resize-y rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
          />
        </label>
      </section>

      <section className="space-y-4 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Preferences
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Customize how the app looks and behaves.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Language
            </span>
            <select
              name="language"
              value={values.language}
              onChange={(event) => updateField("language", event.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Theme
            </span>
            <select
              name="theme"
              value={values.theme}
              onChange={(event) =>
                updateField(
                  "theme",
                  event.target.value as SettingsFormValues["theme"],
                )
              }
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
      </section>

      <section className="space-y-4 border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div>
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Notifications
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Choose what updates you receive.
          </p>
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={values.emailNotifications}
              onChange={(event) =>
                updateField("emailNotifications", event.target.checked)
              }
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-950"
            />
            <span>
              <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Email notifications
              </span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400">
                Receive alerts about account activity and security updates.
              </span>
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <input
              type="checkbox"
              name="marketingEmails"
              checked={values.marketingEmails}
              onChange={(event) =>
                updateField("marketingEmails", event.target.checked)
              }
              className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-950"
            />
            <span>
              <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Marketing emails
              </span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400">
                Get product news, tips, and feature announcements.
              </span>
            </span>
          </label>
        </div>
      </section>

      <div className="flex flex-col-reverse gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {status === "saved" && "Settings saved successfully."}
          {status === "error" && "Something went wrong. Please try again."}
          {status === "saving" && "Saving changes..."}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={status === "saving"}
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
          >
            {status === "saving" ? "Saving..." : "Save changes"}
          </button>
        </div>
      </div>
    </form>
  );
}

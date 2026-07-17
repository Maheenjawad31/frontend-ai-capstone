"use client";

import { FormEvent, useId, useState } from "react";
import {
  defaultSettingsFormData,
  SettingsFormData,
  SettingsFormErrors,
  ThemePreference,
} from "@/types/settings";

const BIO_MAX_LENGTH = 200;

const themeOptions: { value: ThemePreference; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function validateForm(data: SettingsFormData): SettingsFormErrors {
  const errors: SettingsFormErrors = {};

  if (!data.displayName.trim()) {
    errors.displayName = "Display name is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.bio.length > BIO_MAX_LENGTH) {
    errors.bio = `Bio must be ${BIO_MAX_LENGTH} characters or fewer.`;
  }

  return errors;
}

type SettingsFormProps = {
  initialValues?: Partial<SettingsFormData>;
  onSubmit?: (data: SettingsFormData) => void;
};

export default function SettingsForm({
  initialValues,
  onSubmit,
}: SettingsFormProps) {
  const formId = useId();
  const displayNameId = `${formId}-display-name`;
  const emailId = `${formId}-email`;
  const bioId = `${formId}-bio`;
  const themeId = `${formId}-theme`;
  const notificationsId = `${formId}-notifications`;

  const [formData, setFormData] = useState<SettingsFormData>({
    ...defaultSettingsFormData,
    ...initialValues,
  });
  const [errors, setErrors] = useState<SettingsFormErrors>({});
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  function clearFieldError(field: keyof SettingsFormErrors) {
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function updateField<K extends keyof SettingsFormData>(
    field: K,
    value: SettingsFormData[K],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));
    setSubmitMessage(null);

    if (field === "displayName") {
      clearFieldError("displayName");
    } else if (field === "email") {
      clearFieldError("email");
    } else if (field === "bio") {
      clearFieldError("bio");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitMessage(null);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit?.(formData);
    setSubmitMessage("Settings saved successfully.");
  }

  const inputClassName =
    "mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition-colors placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400";

  const errorClassName = "mt-1 text-sm text-red-600 dark:text-red-400";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="User settings"
    >
      <div>
        <label
          htmlFor={displayNameId}
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          Display name
        </label>
        <input
          id={displayNameId}
          name="displayName"
          type="text"
          required
          autoComplete="name"
          value={formData.displayName}
          onChange={(event) => updateField("displayName", event.target.value)}
          aria-invalid={errors.displayName ? true : undefined}
          aria-describedby={
            errors.displayName ? `${displayNameId}-error` : undefined
          }
          className={inputClassName}
        />
        {errors.displayName ? (
          <p
            id={`${displayNameId}-error`}
            role="alert"
            className={errorClassName}
          >
            {errors.displayName}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={emailId}
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${emailId}-error` : undefined}
          className={inputClassName}
        />
        {errors.email ? (
          <p id={`${emailId}-error`} role="alert" className={errorClassName}>
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={bioId}
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          Bio
        </label>
        <textarea
          id={bioId}
          name="bio"
          rows={4}
          maxLength={BIO_MAX_LENGTH + 1}
          value={formData.bio}
          onChange={(event) => updateField("bio", event.target.value)}
          aria-invalid={errors.bio ? true : undefined}
          aria-describedby={`${bioId}-hint${errors.bio ? ` ${bioId}-error` : ""}`}
          className={inputClassName}
        />
        <p
          id={`${bioId}-hint`}
          className="mt-1 text-xs text-zinc-500 dark:text-zinc-400"
        >
          {formData.bio.length}/{BIO_MAX_LENGTH} characters
        </p>
        {errors.bio ? (
          <p id={`${bioId}-error`} role="alert" className={errorClassName}>
            {errors.bio}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={themeId}
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          Theme preference
        </label>
        <select
          id={themeId}
          name="themePreference"
          value={formData.themePreference}
          onChange={(event) =>
            updateField("themePreference", event.target.value as ThemePreference)
          }
          className={inputClassName}
        >
          {themeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          id={notificationsId}
          name="emailNotifications"
          type="checkbox"
          checked={formData.emailNotifications}
          onChange={(event) =>
            updateField("emailNotifications", event.target.checked)
          }
          className="mt-1 size-4 rounded border-zinc-300 text-zinc-900 focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-600 dark:bg-zinc-950"
        />
        <div>
          <label
            htmlFor={notificationsId}
            className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            Email notifications
          </label>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Receive updates and activity alerts by email.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] focus:outline-none focus:ring-2 focus:ring-zinc-500/40 focus:ring-offset-2 dark:hover:bg-[#ccc] dark:focus:ring-offset-zinc-950"
        >
          Save settings
        </button>
        {submitMessage ? (
          <p
            role="status"
            aria-live="polite"
            className="text-sm text-green-700 dark:text-green-400"
          >
            {submitMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}

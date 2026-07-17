export type ThemePreference = "light" | "dark" | "system";

export type SettingsFormData = {
  displayName: string;
  email: string;
  bio: string;
  themePreference: ThemePreference;
  emailNotifications: boolean;
};

export type SettingsFormErrors = Partial<
  Record<keyof Pick<SettingsFormData, "displayName" | "email" | "bio">, string>
>;

export const defaultSettingsFormData: SettingsFormData = {
  displayName: "",
  email: "",
  bio: "",
  themePreference: "system",
  emailNotifications: true,
};

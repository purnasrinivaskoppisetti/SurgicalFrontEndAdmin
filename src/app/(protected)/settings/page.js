"use client";

import Settings from "@/components/settings/DeliverySettings";
import useSettings from "@/hooks/settings/useSettings";

export default function SettingsPage() {
  const {
    settings,
    loading,
    handleUpdateSettings,
  } = useSettings();Remove-Item .next -Recurse -Force

  return (
    <Settings
      settings={settings}
      loading={loading}
      handleUpdateSettings={
        handleUpdateSettings
      }
    />
  );
}
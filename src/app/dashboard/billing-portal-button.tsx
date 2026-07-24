"use client";

import { useState } from "react";

export function BillingPortalButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function openPortal() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/stripe/portal", { method: "POST" });
      const result = (await response.json()) as {
        portalUrl?: string;
        error?: string;
      };

      if (!response.ok || !result.portalUrl) {
        throw new Error(result.error ?? "Não foi possível abrir o portal.");
      }

      window.location.assign(result.portalUrl);
    } catch (portalError) {
      setError(
        portalError instanceof Error
          ? portalError.message
          : "Erro inesperado ao abrir o portal."
      );
      setLoading(false);
    }
  }

  return (
    <div className="form-stack">
      <button className="button" type="button" onClick={openPortal} disabled={loading}>
        {loading ? "Abrindo..." : "Gerenciar assinatura"}
      </button>
      {error ? <p role="alert">{error}</p> : null}
    </div>
  );
}

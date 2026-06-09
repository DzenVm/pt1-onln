"use client";

import { useEffect, useState } from "react";

// Nome do cookie/registo onde guardamos o consentimento.
const STORAGE_KEY = "sortuga_consent_v1";
const COOKIE_NAME = "sortuga_consent";
const ONE_YEAR = 60 * 60 * 24 * 365;

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
};

function saveConsent(consent: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* localStorage indisponível — seguimos só com o cookie */
  }
  // Também gravamos um cookie de 1.ª parte (local, sem terceiros).
  document.cookie =
    `${COOKIE_NAME}=${encodeURIComponent(
      `${consent.analytics ? 1 : 0}${consent.marketing ? 1 : 0}`
    )}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function persist(a: boolean, m: boolean) {
    saveConsent({
      necessary: true,
      analytics: a,
      marketing: m,
      date: new Date().toISOString(),
    });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cookie"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <h4>🍪 Nós valorizamos a sua privacidade</h4>
      <p>
        Utilizamos cookies próprios para garantir o funcionamento do site e,
        com o seu consentimento, para medir o tráfego e melhorar o conteúdo.
        Pode aceitar tudo, recusar os opcionais ou personalizar as suas escolhas.
        Consulte a nossa{" "}
        <a href="/cookies" style={{ color: "var(--brand-2)" }}>
          política de cookies
        </a>
        .
      </p>

      {showPrefs && (
        <div className="cookie-prefs">
          <div className="cookie-row">
            <input type="checkbox" checked readOnly aria-label="Cookies necessários" />
            <div>
              <label>Necessários</label>
              <small>
                Essenciais para o funcionamento do site. Sempre ativos.
              </small>
            </div>
          </div>
          <div className="cookie-row">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              aria-label="Cookies de análise"
            />
            <div>
              <label>Análise</label>
              <small>Ajudam-nos a perceber como o site é utilizado.</small>
            </div>
          </div>
          <div className="cookie-row">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              aria-label="Cookies de marketing"
            />
            <div>
              <label>Marketing</label>
              <small>Permitem mostrar conteúdo e ofertas relevantes.</small>
            </div>
          </div>
        </div>
      )}

      <div className="cookie-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => persist(true, true)}
        >
          Aceitar tudo
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => persist(false, false)}
        >
          Recusar opcionais
        </button>
        {showPrefs ? (
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => persist(analytics, marketing)}
          >
            Guardar escolhas
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setShowPrefs(true)}
          >
            Personalizar
          </button>
        )}
      </div>
    </div>
  );
}

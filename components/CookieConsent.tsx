"use client";

import { useEffect, useState } from "react";

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
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
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
      className="lz-cookie"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <h4>🍪 Respeitamos a sua privacidade</h4>
      <p>
        Usamos cookies próprios para o funcionamento do site e, com o seu
        consentimento, para medir o tráfego. Saiba mais na{" "}
        <a href="/cookies">política de cookies</a>.
      </p>

      {showPrefs && (
        <div className="lz-cookie-prefs">
          <div className="lz-cookie-row">
            <input type="checkbox" checked readOnly aria-label="Cookies necessários" />
            <div>
              <label>Necessários</label>
              <small>Essenciais ao funcionamento do site. Sempre ativos.</small>
            </div>
          </div>
          <div className="lz-cookie-row">
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
          <div className="lz-cookie-row">
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

      <div className="lz-cookie-actions">
        <button
          type="button"
          className="lz-btn lz-btn--primary"
          onClick={() => persist(true, true)}
        >
          Aceitar tudo
        </button>
        <button
          type="button"
          className="lz-btn lz-btn--ghost"
          onClick={() => persist(false, false)}
        >
          Recusar opcionais
        </button>
        {showPrefs ? (
          <button
            type="button"
            className="lz-btn lz-btn--ghost"
            onClick={() => persist(analytics, marketing)}
          >
            Guardar escolhas
          </button>
        ) : (
          <button
            type="button"
            className="lz-btn lz-btn--ghost"
            onClick={() => setShowPrefs(true)}
          >
            Personalizar
          </button>
        )}
      </div>
    </div>
  );
}

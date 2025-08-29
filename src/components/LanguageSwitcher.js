import React from "react";

const btnStyle = {
  position: "fixed",
  right: "14px",
  bottom: "14px",
  zIndex: 9999,
  display: "flex",
  gap: "6px"
};

const pill = active => ({
  padding: "8px 10px",
  borderRadius: "16px",
  border: "1px solid #ddd",
  background: active ? "#111" : "#fff",
  color: active ? "#fff" : "#111",
  cursor: "pointer",
  fontSize: "12px",
  lineHeight: 1
});

export default function LanguageSwitcher() {
  let current = "en";
  try {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("lang");
      current = saved === "az" ? "az" : "en";
    }
  } catch (_) {}

  const setLang = lang => {
    try {
      window.localStorage.setItem("lang", lang);
      window.location.reload();
    } catch (_) {}
  };

  return (
    <div style={btnStyle} aria-label="Language switcher">
      <button style={pill(current === "az")} onClick={() => setLang("az")}>
        AZ
      </button>
      <button style={pill(current === "en")} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );
}

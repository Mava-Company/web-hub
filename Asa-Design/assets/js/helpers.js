// =====================
// FORMAT DATE
// =====================
export function formatDate(date) {
  if (!date) return "-";

  // Firestore Timestamp
  if (typeof date === "object" && date.toDate) {
    date = date.toDate();
  }

  const d = new Date(date);

  if (isNaN(d.getTime())) return "-";

  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// =====================
// COPY TO CLIPBOARD
// =====================
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Copy failed:", err);
    return false;
  }
}


// =====================
// GENERATE ORDER NUMBER UI
// =====================
export function formatOrderNumber(num) {
  return `#${num}`;
}


// =====================
// SIMPLE LOADER CONTROL
// =====================
export function showLoader(el) {
  if (el) el.classList.remove("hidden");
}

export function hideLoader(el) {
  if (el) el.classList.add("hidden");
}
const entries = [
  {
    file: "/lore-content/tail-of-the-stray/races/Vulpin.md",
    title: "Vulpin",
    story: "Tail of the Stray",
    category: "Races"
  },
  {
    file: "/lore-content/tail-of-the-stray/races/Vulpin2.md",
    title: "Vulpin2",
    story: "Tail of the Stray",
    category: "Races"
  }
  // Add more entries here...
];

async function loadLoreList() {
  const storyFilter = document.getElementById("story").value;
  const categoryFilter = document.getElementById("category").value;
  const container = document.getElementById("lore-list");
  container.innerHTML = "";

  const filtered = entries.filter(e =>
    (storyFilter === "all" || e.story === storyFilter) &&
    (categoryFilter === "all" || e.category === categoryFilter)
  );

  for (const entry of filtered) {
    try {
      const res = await fetch(entry.file);
      const text = await res.text();
      const html = marked.parse(text);

      const div = document.createElement("div");
      div.className = "lore-entry";
      div.innerHTML = `
        <h2>${entry.title}</h2>
        <div class="meta">${entry.story} | ${entry.category}</div>
        ${html}`;
      container.appendChild(div);
    } catch (e) {
      console.error(`Failed to load ${entry.title}:`, e);
      container.innerHTML += `<p>Failed to load ${entry.title}</p>`;
    }
  }
}

// ✅ Make the function available globally
window.loadLoreList = loadLoreList;

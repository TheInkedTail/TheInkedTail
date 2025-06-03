const entries = [
  {
    file: "lore-content/tail-of-the-stray/races/vulpin.md",
    title: "Vulpin",
    story: "Tail of the Stray",
    category: "Races"
  },
  {
    file: "lore-content/tail-of-the-stray/races/vulpin2.md",
    title: "Vulpin2",
    story: "Tail of the Stray",
    category: "Races"
  }
  // Add more entries as needed
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
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const html = marked.parse(text);

      const div = document.createElement("div");
      div.className = "lore-entry";
      div.innerHTML = `
        <h2>${entry.title}</h2>
        <div class="meta">${entry.story} | ${entry.category}</div>
        ${html}
      `;
      container.appendChild(div);
    } catch (e) {
      console.error(`Failed to load ${entry.title}:`, e);
      const errorDiv = document.createElement("div");
      errorDiv.className = "lore-entry";
      errorDiv.innerHTML = `<h2>${entry.title}</h2><p>Failed to load this entry.</p>`;
      container.appendChild(errorDiv);
    }
  }
}

window.loadLoreList = loadLoreList;

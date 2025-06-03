async function loadLoreList() {
  const story = document.getElementById("story").value;
  const category = document.getElementById("category").value;
  const listDiv = document.getElementById("lore-list");
  const outputDiv = document.getElementById("lore-output");

  listDiv.innerHTML = "Loading entries...";
  outputDiv.innerHTML = "";

  try {
    // Fake file listing – manually define entries for now
    // In the future you could automate this with a JSON index
    const files = {
      "Tail-of-the-Stray": {
        "Races": ["Vulpin.md"],
        "Locations": ["silverden.md", "test.md"],
        "Deities": []
      }
    };

    const entries = files[story][category];

    if (!entries.length) {
      listDiv.innerHTML = "<p>No entries found.</p>";
      return;
    }

    listDiv.innerHTML = entries.map(file => {
      const name = file.replace(".md", "");
      return `<button onclick="loadLore('${story}', '${category}', '${file}')">${name}</button>`;
    }).join("<br>");
  } catch (err) {
    listDiv.innerHTML = "Error loading list.";
    console.error(err);
  }
}

async function loadLore(story, category, file) {
  const outputDiv = document.getElementById("lore-output");
  outputDiv.innerHTML = "Loading content...";

  const path = `lore-content/${story}/${category}/${file}`;
  try {
    const res = await fetch(path);
    const md = await res.text();
    outputDiv.innerHTML = marked(md);
  } catch (err) {
    outputDiv.innerHTML = "Error loading content.";
    console.error(err);
  }
}

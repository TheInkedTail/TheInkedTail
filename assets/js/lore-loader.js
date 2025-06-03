<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lore | The Inked Tail</title>
  <style>
    :root {
      --bg-color: #2b2d31;
      --header-bg: #1e1f22;
      --accent-color: #4de37d;
      --text-color: #dcddde;
      --muted-color: #b9bbbe;
      --card-bg: #313338;
      --footer-bg: #1e1f22;
      --hover-bg: #3e4147;
      --font-stack: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-stack);
      background-color: var(--bg-color);
      color: var(--text-color);
      line-height: 1.6;
    }

    .navbar {
      background-color: var(--header-bg);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      padding: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s ease;
    }

    .navbar a:hover {
      color: var(--accent-color);
    }

    header {
      background-color: var(--header-bg);
      padding: 2rem 1rem;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--accent-color);
    }

    header p {
      font-size: 1.1rem;
      color: var(--muted-color);
    }

    main {
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
      justify-content: center;
    }

    .filters select {
      padding: 0.5rem;
      background-color: var(--card-bg);
      color: var(--text-color);
      border: 1px solid var(--hover-bg);
      border-radius: 5px;
    }

    .lore-entry {
      background-color: var(--card-bg);
      padding: 1.5rem;
      margin-bottom: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    .lore-entry h2 {
      color: var(--accent-color);
      margin-bottom: 0.5rem;
    }

    .lore-entry .meta {
      font-size: 0.9rem;
      color: var(--muted-color);
      margin-bottom: 1rem;
    }

    footer {
      background-color: var(--footer-bg);
      color: var(--muted-color);
      text-align: center;
      padding: 1.5rem 1rem;
      font-size: 0.9rem;
      margin-top: 3rem;
    }
  </style>
</head>

<body>
  <!-- Navbar -->
  <nav class="navbar">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="schedule.html">Schedule</a>
    <a href="contact.html">Contact</a>
    <a href="lore.html">Lore</a>
    <a href="https://www.royalroad.com/profile/708964" target="_blank">Royal Road</a>
    <a href="https://x.com/TheInkedTail" target="_blank">X</a>
  </nav>

  <!-- Header -->
  <header>
    <h1>Lore Archive</h1>
    <p>Explore the people, places, and pantheons of every story.</p>
  </header>

  <!-- Filters -->
  <main>
    <div class="filters">
      <select id="storyFilter">
        <option value="all">All Stories</option>
        <option value="Tail of the Stray">Tail of the Stray</option>
      </select>

      <select id="categoryFilter">
        <option value="all">All Categories</option>
        <option value="Locations">Locations</option>
        <option value="Races">Races</option>
        <option value="Deities">Deities</option>
      </select>
    </div>

    <div id="lore-container"></div>
  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Michael Garcia. All rights reserved.</p>
  </footer>

  <!-- Include marked.js -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

  <!-- Load and Filter Lore -->
  <script>
    const entries = [
      {
        file: "content/lore/Vulpin.md",
        title: "Vulpin",
        story: "Tail of the Stray",
        category: "Locations"
      },
      {
        file: "content/lore/Lupinfolk.md",
        title: "Lupinfolk",
        story: "Tail of the Stray",
        category: "Races"
      }
      // Add more entries here...
    ];

    async function renderLore() {
      const storyFilter = document.getElementById("storyFilter").value;
      const categoryFilter = document.getElementById("categoryFilter").value;
      const container = document.getElementById("lore-container");
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
        }
      }
    }

    document.getElementById("storyFilter").addEventListener("change", renderLore);
    document.getElementById("categoryFilter").addEventListener("change", renderLore);

    window.addEventListener("DOMContentLoaded", renderLore);
  </script>
</body>
</html>

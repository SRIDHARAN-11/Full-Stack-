const events = [
    {
    title: "AI for Beginners",
    speaker: "Dr. John Mathew",
    time: "2026-02-10T10:00:00",
    category: "Workshop",
},
    {
    title: "Future of Web Dev",
    speaker: "Sarah Lee",
    time: "2026-02-10T14:00:00",
    category: "Keynote",
    },
    {
    title: "Cloud Security Insights",
    speaker: "Michael Davis",
    time: "2026-02-10T11:30:00",
    category: "Panel",
    },
    {
    title: "Building Scalable Apps",
    speaker: "Priya Sharma",
    time: "2026-02-10T15:30:00",
    category: "Workshop",
    }
];

const container = document.getElementById("eventContainer");
const searchInput = document.getElementById("searchInput");

function renderEvents(eventList) {
    container.innerHTML = "";
    eventList.forEach(ev => {
    const card = document.createElement("div");
    card.className ="event-card glass rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all";
    card.innerHTML = `
        <div class="p-4">
        <h3 class="text-xl font-semibold dark:text-white">${ev.title}</h3>
        <p class="text-gray-700 dark:text-gray-300"><strong>Speaker:</strong> ${ev.speaker}</p>
        <p class="text-gray-700 dark:text-gray-300"><strong>Time:</strong> ${new Date(ev.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p class="text-gray-700 dark:text-gray-300"><strong>Category:</strong> ${ev.category}</p>
        </div>
    `;

    container.appendChild(card);
    setTimeout(() => card.classList.add("show"), 50);
    });
}

renderEvents(events);
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
    const cat = btn.dataset.category;

    if (cat === "All") renderEvents(events);
    else renderEvents(events.filter(e => e.category === cat));
    });
});

document.querySelectorAll(".time-btn").forEach(btn => {
    btn.addEventListener("click", () => {
    const t = btn.dataset.time;

    renderEvents(
        events.filter(e => {
        const hour = new Date(e.time).getHours();
        return t === "Morning" ? hour < 12 : hour >= 12;
        })
    );
    });
});

searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();

    renderEvents(
    events.filter(ev =>
        ev.title.toLowerCase().includes(q) ||
        ev.speaker.toLowerCase().includes(q)||
        ev.category.toLowerCase().includes(q)
    )
    );
});

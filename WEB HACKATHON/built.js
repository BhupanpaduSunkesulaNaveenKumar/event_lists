// Sample Event Data (this can be extended or stored in a JSON file)
const events = [
    {
        id: 1,
        title: "Music Festival 2024",
        date: "2024-12-31",
        time: "6:00 PM",
        location: "Central Park",
        description: "Join us for an amazing evening of live music from local and international artists!",
        category: "Music",
        imageUrl: "assets/event-image.jpg"
    },
    {
        id: 2,
        title: "Tech Conference",
        date: "2024-12-15",
        time: "9:00 AM",
        location: "Convention Center",
        description: "A gathering of the brightest minds in the tech world. Discussions, panels, and networking!",
        category: "Technology",
        imageUrl: "C:\Users\rohit\Downloads\music.jpg"
    },
    {
        id: 3,
        title: "Food Truck Festival",
        date: "2024-12-10",
        time: "12:00 PM",
        location: "City Square",
        description: "Experience the best food trucks in town with a variety of delicious foods.",
        category: "Food",
        imageUrl: "assets/event-image.jpg"
    },
    {
        id: 4,
        title: "Art Exhibition",
        date: "2024-12-20",
        time: "10:00 AM",
        location: "Gallery 101",
        description: "Explore stunning works of art from local and international artists at the annual art exhibition.",
        category: "Art",
        imageUrl: "assets/art-exhibition.jpg"
    },
    {
        id: 5,
        title: "Christmas Market 2024",
        date: "2024-12-18",
        time: "11:00 AM",
        location: "Town Square",
        description: "Celebrate the holiday season with festive stalls, holiday gifts, delicious food, and Christmas cheer!",
        category: "Holiday",
        imageUrl: "assets/christmas-market.jpg"
    }
];

// Render events on the homepage
function renderEvents(events) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('col-md-4', 'mb-4');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}">
            <div class="p-3">
                <h5>${event.title}</h5>
                <p>${event.date} | ${event.location}</p>
                <p>${event.category}</p>
                <a href="event-detail.html?id=${event.id}" class="btn btn-primary">View Details</a>
            </div>
        `;
        eventList.appendChild(eventCard);
        const nextButton = document.getElementById('next-button');
        if (nextButton) {
            nextButton.addEventListener('click', () => {
            const nextEventId = eventId + 1 > events.length ? 1 : eventId + 1;
            window.location.href = `event-detail.html?id=${nextEventId}`;
        });
      }
    });
    // Next button functionality
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', () => {
        const nextEventId = eventId + 1 > events.length ? 1 : eventId + 1;
        window.location.href = `event-detail.html?id=${nextEventId}`;
    });
  }
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.category.toLowerCase().includes(searchTerm)
    );
    renderEvents(filteredEvents);
});

//

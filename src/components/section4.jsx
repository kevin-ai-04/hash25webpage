import React from "react";
import "./section4.css";

const events = [
  {
    title: "THE GREEN PITCH",
    time: "10:00 AM - 3:00 PM",
    prize: "₹7000",
    description:
      "Idea Presentation. Present your innovative tech ideas to judges in a fast-paced pitch environment.",
    cta: "REGISTER",
    bgImage: "/GreenPitch.png",
    link: "https://qr.codes/JrzyC2",
  },
  {
    title: "CAPTURE THE FLAG",
    time: "10:00 AM - 4:00 PM",
    prize: "₹8000",
    description:
      "Cybersecurity Puzzle. Solve cybersecurity challenges and find hidden flags.",
    cta: "REGISTER",
    bgImage: "/CTF.png",
    link: "https://qr.codes/1WALQi",
  },
  {
    title: "FUTSAL",
    time: "9:45 AM - 1:00 PM",
    prize: "₹2500",
    description:
      "3V3 Teams. For football fans, it’s time to shine—pass, play, and dominate the game!",
    cta: "REGISTER",
    bgImage: "/futsal.png",
    link: "https://qr.codes/fpyROu",
  },
  {
    title: "BLIND CODE",
    time: "10:00 AM - 1:00 PM",
    prize: "₹7000",
    description:
      "Coding challenge. Replicate a web page relying purely on logic and memory.",
    cta: "REGISTER",
    bgImage: "/blind-code.png",
    link: "https://qr.codes/zmfZIW",
  },
  {
    title: "IPL Auction",
    time: "10:00 AM",
    prize: "₹7000",
    description:
      "Think Fast. Bid Smart. Rule the Auction!",
    cta: "REGISTER",
    bgImage: "/IPL_Auction.png",
    link: "https://qr.link/jeEy3n",
  },
  {
    title: "DEFINE",
    time: "9:00 AM 08 Mar - 4:30 PM 09 Mar",
    prize: "₹2.5 Lakhs",
    description:
      "Transforming Tomorrow, Today",
    cta: "REGISTER",
    bgImage: "/define.png",
    link: "https://define25-mu.vercel.app/",
  },
];
const EventSection = () => {
  return (
    <section className="event-section" id="section4">
      <h2 className="heading">
        EVENT <span className="highlight">SPOTLIGHT</span>
      </h2>

      <div className="events-container">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-card"
            style={{ backgroundImage: `url(${event.bgImage})` }}
          >
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <div className="event-time">{event.time}</div>
              <p className="event-description">{event.description}</p>
              <a href={event.link} className="event-cta-link" target="_blank" rel="noopener noreferrer">
                <button className="event-cta">
                  {event.cta}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;

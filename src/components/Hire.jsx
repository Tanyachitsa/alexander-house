export default function Hire() {
  return (
    <section>
      <div
        className="container text-center"
        style={{ paddingTop: "80px", paddingBottom: "100px" }}
      >
        <div className="row">
          <div className="col">
            <img
              src="/src/Media/wedding.jpg"
              alt="image of an outdoor wedding"
              style={{ height: "300px", paddingLeft: "40px" }}
            />
          </div>
          <div className="col">
            <h1
              style={{
                fontStyle: "italic",
                textDecoration: "underline",
              }}
            >
              Weddings
            </h1>
            <p style={{ fontSize: "23px" }}>
              Celebrate your special day in timeless style with a wedding at
              Alexander House. From elegant receptions to unforgettable
              ceremonies, our team works closely with you to create a truly
              bespoke and memorable occasion in a stunning, intimate setting.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center homepage">
        <div className="row">
          <div className="col">
            <h1
              style={{
                fontStyle: "italic",
                textDecoration: "underline",
              }}
            >
              Private room
            </h1>
            <p style={{ fontSize: "23px" }}>
              Enjoy exclusive access to beautifully appointed private rooms,
              ideal for intimate dinners, celebrations, or discreet gatherings.
              Each space is designed with comfort, style, and privacy in mind,
              complete with tailored service to elevate your experience.
            </p>
          </div>
          <div className="col">
            <img
              src="/src/Media/Privateroom.jpg"
              alt="image of a private meeting room"
              style={{ height: "300px", paddingLeft: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className="container text-center homepage">
        <div className="row">
          <div className="col">
            <img
              className="business-room"
              src="/src/Media/business.jpg"
              alt="meeting room with large table"
              style={{ height: "300px", paddingLeft: "40px" }}
            />
          </div>
          <div className="col">
            <h1
              style={{
                fontStyle: "italic",
                textDecoration: "underline",
              }}
            >
              Meeting & Business events
            </h1>
            <p style={{ fontSize: "23px" }}>
              Host impactful meetings in our fully equipped, design-forward
              meeting rooms. With seamless tech, natural light, and refined
              surroundings, our spaces are perfect for creative brainstorming,
              board meetings, and everything in between.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginLeft: "250px",
          marginRight: "250px",
          marginTop: "100px",
          marginBottom: "80px",
        }}
      >
        Reserve Your Space Booking your event at Alexander House is seamless and
        personal. Whether you're hiring a private room, meeting space, or
        planning a wedding, our reservations team is here to guide you every
        step of the way. Simply contact us to check availability, discuss your
        vision, and tailor the experience to your needs.
      </p>
      <h4 style={{ textAlign: "center" }}>Alexander House Reservations</h4>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginLeft: "250px",
          marginRight: "250px",
          marginBottom: "200px",
        }}
      >
        Phone: +44 (0)20 7946 1234 <br /> Email:
        reservations@alexanderhouse.co.uk <br /> Address: 42 Langdon Street,
        Shoreditch, London E2 7QB <br /> Hours: Monday to Saturday, 9:00am –
        6:00pm
      </p>
    </section>
  );
}

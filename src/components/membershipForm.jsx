export default function MembershipForm() {
  return (
    <div className="membershipForm">
      <form>
        <label htmlFor="firstName" style={{ marginBottom: "20px" }}>
          First Name <br />
          <input type="text" name="firstName" placeholder="Jane" required />
        </label>
        <br />
        <label htmlFor="secondName" style={{ marginBottom: "20px" }}>
          Last Name <br />
          <input type="text" name="secondName" placeholder="Doe" required />
        </label>
        <br />
        <label htmlFor="email" style={{ marginBottom: "20px" }}>
          Email <br />
          <input
            type="email"
            name="email"
            placeholder="janedoe@gmail.com"
            required
          />
          <br />
          <label htmlFor="password">
            Create a password <br />
            <input type="password" name="password" required />
          </label>
        </label>
        <br />
        <label htmlFor="" style={{ marginBottom: "20px" }}>
          Contact Number: <br />
          <input
            type="tel"
            name="contactNumber"
            pattern="[0-9]{10,15}"
            placeholder="07711223344"
            required
          />
        </label>

        <fieldset style={{ marginTop: "80px" }}>
          <legend>Which membership best suits you?</legend>

          <select
            class="form-select"
            aria-label="memebrship select option"
            required
          >
            <option selected value="">
              Select one of the options
            </option>
            <option value="fullMembership">Full Membership</option>
            <option value="under35">Under 35s</option>
            <option value="staysMembership">Stays Membership</option>
            <option value="corporateMembership">Corporate Membership</option>
          </select>
        </fieldset>

        <br />
        <button
          className="button-submit"
          style={{
            borderRadius: "10px",
            padding: "7px",
            margin: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

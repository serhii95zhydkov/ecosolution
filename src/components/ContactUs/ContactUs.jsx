const ContactUs = () => {
  return (
    <section>
      <div>
        <h2>Contact us</h2>
        <ul>
          <li>
            <span>Phone:</span>
            <a href="tel:+380981234567">38 (098) 12 34 567</a>
            <a href="tel:+380981234567">38 (093) 12 34 567</a>
          </li>
          <li>
            <span>E-mail:</span>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          </li>
          <li>
            <span>Address:</span>
            <a
              href="https://maps.app.goo.gl/ch5Zc6Nrzai3HErQ6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </li>
          <li>
            <span>Social Networks:</span>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
        </ul>
        <form>
          <label>
            <span>Full Name:</span>
            <input name="Full Name" placeholder="John Rosie" />
          </label>
          <label>
            <span>E-mail:</span>
            <input name="E-mail" placeholder="johnrosie@gmail.com" />
          </label>
          <label>
            <span>Phone:</span>
            <input name="Phone" placeholder="380961234567" />
          </label>
          <label>
            <span>Message:</span>
            <textarea name="Message" placeholder="My message" />
          </label>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

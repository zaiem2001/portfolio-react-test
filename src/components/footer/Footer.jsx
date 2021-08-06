import "./footer.css";

export default function Footer() {
  const date = new Date();
  const name = "Zaiem";

  let currYear = date.getFullYear();

  return (
    <div className="footer">
      <h4 className="desc">Made With 🔥 in India</h4>
      <h1>
        copyright © {name} <span>{currYear}</span>
      </h1>
      <ul>
        <li>
          <a href="https://www.instagram.com/zai3m/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/zaiem2001" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

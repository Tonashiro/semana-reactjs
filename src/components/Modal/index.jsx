// Libs
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Styles
import { Container, Items, Link } from "./styles";

// Images
import { FiX, FiClipboard } from "react-icons/fi";

const Modal = ({ closeModal, content }) => {
  if (process.browser) {
    AOS.init();
  }

  async function copyLink() {
    await navigator.clipboard.writeText(content.link)
    alert("Link copiado")
  }

  return (
    <Container data-aos="fade-up">
      <Items>
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </Items>
      <span>{content.long_url}</span>
      <Link onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#FFF" />
      </Link>
    </Container>
  );
};

export default Modal;

// Libs
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { saveLink } from "../../services/storeLinks"
// Styles
import { Container, LinkContainer, Link } from "./styles";

// Images
import { FiLink } from "react-icons/fi";

// Components
import Menu from "../Menu";
import Modal from "../Modal";

export const EncurtaLink = ({ api }) => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  if (process.browser) {
    AOS.init();
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  async function handleClick() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true);
      saveLink("encurtaLink", response.data);
      setLink("");

    }
    catch{
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
  }

  return (
    <Container>
      <div data-aos="zoom-in">
        <img src="/logo.png" alt="Encurta Link logo" />
        <h1>Encurta Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <LinkContainer>
        <Link>
          <FiLink size={24} color="#FFF" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={(e) => handlePressEnter(e)}
          />
        </Link>
        <button onClick={handleClick}>Encurtar Link</button>
      </LinkContainer>
      <Menu />
      {showModal && <Modal closeModal={() => setShowModal(false)} content={data}/>}
    </Container>
  );
};

export default EncurtaLink;

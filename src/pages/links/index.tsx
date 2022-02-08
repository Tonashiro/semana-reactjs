// Libs
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getLink, deleteLink } from "../../services/storeLinks";

// Styles
import { Container, Header, LinkContainer, Delete } from "./styles";

// Components
import Modal from "@components/Modal";

// Images
import { FiLink, FiArrowLeft, FiTrash } from "react-icons/fi";

interface LinkProps {
  id: number;
  url: string;
  long_url: string;
}

const Links = () => {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLink("encurtaLink");

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }
    getLinks();
  }, []);

  function handleOpenLink(link: object) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id: number) {
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <Container>
      <div>
        <Header>
          <Link href="/" passHref>
            <FiArrowLeft size={38} color="#FFF" />
          </Link>
          <h1>Meus Links</h1>
        </Header>
        {emptyList && (
          <LinkContainer>
            <h2>Sua lista está vazia...</h2>
          </LinkContainer>
        )}
        {myLinks.map((link: LinkProps) => (
          <LinkContainer key={link.id}>
            <button onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color="#FFF" />
              {link.long_url}
            </button>
            <Delete onClick={() => handleDelete(link.id)}>
              <FiTrash size={24} color="#FF5454" />
            </Delete>
          </LinkContainer>
        ))}
      </div>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} content={data} />
      )}
    </Container>
  );
};

export default Links;

// Buscar links salvos
export async function getLink(key) {
  const myLinks = await localStorage.getItem(key)

  let links = JSON.parse(myLinks) || [];

  return links;
}

// Salvar link no storage
export async function saveLink(key, newLink) {
  let linkStored = await getLink(key);

  // Validação de ID para não ter duplicidade
  const hasLink = linkStored.some(link => link.id === newLink.id)

  if(hasLink) {
    console.log("Esse link já está cadastrado!");
    return;
  }
  
  linkStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linkStored));
  console.log("Link salvo!");
}

// Deletar link salvo
export async function deleteLink(links, id) {
  let myLinks = links.filter(item => {
    return(item.id !== id)
  })

  localStorage.setItem("encurtaLink", JSON.stringify(myLinks));

  return myLinks;
}
const getElementsByClassName = (className) => {
  const nodes = [];

  function findNodes(node) {
    //base
    //if element has classes and the array of classes includes the className
    if (node.classList && node.classList.value.indexOf(className) > -1) {
      nodes.push(node);
    }

    //recursive function
    node.childNodes.forEach((child) => {
      findNodes(child);
    });
  }
  findNodes(document.body);
  return nodes;
};

module.exports = { getElementsByClassName };

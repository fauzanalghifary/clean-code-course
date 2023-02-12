// ======================
// BAD
// ======================

function renderContent(renderInformation) {
  const element = renderInformation.element;
  if (element === "script" || element === "SCRIPT") {
    throw new Error("Invalid element.");
  }

  let partialOpeningTag = "<" + element;

  const attributes = renderInformation.attributes;

  for (const attribute of attributes) {
    partialOpeningTag =
      partialOpeningTag + " " + attribute.name + '="' + attribute.value + '"';
  }

  const openingTag = partialOpeningTag + ">";

  const closingTag = "</" + element + ">";
  const content = renderInformation.content;

  const template = openingTag + content + closingTag;

  const rootElement = renderInformation.root;

  rootElement.innerHTML = template;
}

function renderContent(renderInformation) {
  const element = renderInformation.element;
  if (element === "script" || element === "SCRIPT") {
    throw new Error("Invalid element.");
  }

  let partialOpeningTag = "<" + element;

  const attributes = renderInformation.attributes;

  for (const attribute of attributes) {
    partialOpeningTag =
      partialOpeningTag + " " + attribute.name + '="' + attribute.value + '"';
  }

  const openingTag = partialOpeningTag + ">";

  const closingTag = "</" + element + ">";
  const content = renderInformation.content;

  const template = openingTag + content + closingTag;

  const rootElement = renderInformation.root;

  rootElement.innerHTML = template;
}

// ======================
// GOOD
// ======================

function renderContent(renderInformation) {
  const element = renderInformation.element;
  const rootElement = renderInformation.root;

  validateElementType(element);

  const content = createRenderableContent(renderInformation);

  renderOnRoot(rootElement, content);
}

function validateElementType(element) {
  if (element === "script" || element === "SCRIPT") {
    throw new Error("Invalid element.");
  }
}

function createRenderableContent(renderInformation) {
  const tags = createTags(
    renderInformation.element,
    renderInformation.attributes
  );
  const template = tags.opening + renderInformation.content + tags.closing;
  return template;
}

function renderOnRoot(root, template) {
  root.innerHTML = template;
}

function createTags(element, attributes) {
  const attributeList = generateAttributesList(attributes);
  const openingTag = buildTag({
    element: element,
    attributes: attributeList,
    isOpening: true,
  });
  const closingTag = buildTag({
    element: element,
    isOpening: false,
  });

  return { opening: openingTag, closing: closingTag };
}

function generateAttributesList(attributes) {
  let attributeList = "";
  for (const attribute of attributes) {
    attributeList = `${attributeList} ${attribute.name}="${attribute.value}"`;
  }

  return attributeList;
}

function buildTag(tagInformation) {
  const element = tagInformation.element;
  const attributes = tagInformation.attributes;
  const isOpeningTag = tagInformation.isOpening;

  let tag;
  if (isOpeningTag) {
    tag = "<" + element + attributes + ">";
  } else {
    tag = "</" + element + ">";
  }

  return tag;
}

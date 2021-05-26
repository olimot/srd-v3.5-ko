import createEvaluateAllFunction from './util/createEvaluateAllFunction';

const collectAnchors = async () => {
  const evaluate = createEvaluateAllFunction({ inDir: './public/raw-html', saveChanges: true });

  await evaluate(() => {
    const changeTagName = (element: Element, tagName: string, dropAttribute?: boolean) => {
      const newElement = document.createElement(tagName);
      newElement.innerHTML = element.innerHTML;
      if (!dropAttribute)
        for (let i = 0; i < element.attributes.length; i += 1)
          newElement.setAttribute(element.attributes[i].name, element.attributes[i].value);
      element.parentElement?.insertBefore(newElement, element);
      element.remove();
      return newElement as Element;
    };

    document.querySelectorAll('span[style="font-style: italic"]').forEach((span) => changeTagName(span, 'i', true));
    document.querySelectorAll('span[style="font-weight: 700"]').forEach((span) => changeTagName(span, 'b', true));
  });
};

export default collectAnchors;

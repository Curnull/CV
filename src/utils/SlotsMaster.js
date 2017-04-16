import customHtml from '../components/slots/CustomHtmlSlot';

const list = {
  customHtml: {
    component: customHtml
  }
};

export default (name) => {
  const item = list[name] || list[name[0].toLowerCase() + name.substr(1)];
  return item ? item.component : item;
};

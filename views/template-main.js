exports.build = function(title, pagetitle, content) {  
  return ['<!doctype html>',
  '<html lang="en">nn<meta charset="utf-8">n<title>{title}</title>',
  
  '<h1>{pagetitle}</h1>',
  '<div id="content">{content}</div>nn']
  .join('n')
  .replace(/{title}/g, title)
  .replace(/{pagetitle}/g, pagetitle)
  .replace(/{content}/g, content);
};
copy(JSON.parse(document.body.textContent).filter(e => e.id != null & e.status == 'Pending')
.map(e => { return { 'id': e.id, 'status': e.status} }))
// filter out the smaller json from a big json array response.
// copy ( copy content to clipboard)

console.table(contextToParse, 'contentField1', 'contentField2')
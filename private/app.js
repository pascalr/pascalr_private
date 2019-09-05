// &#128193;
// TODO: Make a model to simplify the passing of a model
// Here I need Filename(name: string, type: boolean)

$.getJSON('http://localhost:3000/files', function(data) {
  const items = data.map(function(elem) {
    const val = '<li><a href="../data/'+encodeURIComponent(elem)+'">🔎</a> <a href="../data/'+encodeURIComponent(elem)+'?contentType=text">📖</a> <a href="edit/'+encodeURIComponent(elem)+'">✏️</a> &nbsp; &#x1f4c4;<span class="size">174 bytes</span><input type="text" name="filename" onfocus="this.oldValue = this.value;" onchange="filenameChanged(this);this.oldValue = this.value;" size="64" value="'+elem+'" class="nothing"/></li>'
    return val
  })
  $("#root").html(items.join(''))
});


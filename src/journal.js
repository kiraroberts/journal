function JournalEntry() {
  this.entry = [];
}
function Entry(name,title, body) {
  this.name = name;
  this.title = title;
  this.body = body;
}
JournalEntry.prototype.addEntry = function(Entry) {
  this.entry.push(Entry);
}
Entry.prototype.numberOfWords = function() {
  console.log(bodyInput.split(' '));
}

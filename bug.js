The Firebase SDK might throw an error if you try to access a property of a document snapshot before the `snapshot.exists` property is checked. This happens when you query a collection and expect a document that doesn't exist.
```javascript
db.collection('myCollection').doc('myDoc').get().then(snapshot => {
  console.log(snapshot.data().myField); // Error if document doesn't exist
});
```
# Firebase Snapshot Existence Check
This example demonstrates an uncommon error in Firebase when accessing properties of a document snapshot before checking if the document exists using `snapshot.exists`.  Improper handling can lead to unexpected errors and application crashes.

## Bug Description
Accessing properties of a Firebase document snapshot (e.g., `snapshot.data().myField`) before verifying `snapshot.exists` will throw an error if the document does not exist in the database. This is because attempting to access a property of `null` or `undefined` (when the document doesn't exist) results in a runtime error.

## Solution
Always check the `snapshot.exists` property before accessing any data from the snapshot.  This ensures that you only attempt to access properties when a document actually exists, preventing runtime errors.

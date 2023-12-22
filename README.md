# Sample HTTP Application

The app-child has the following code added to the head of the index.html page:
```html
<script src="http://localhost:3000/js/my-lib.js"></script>
```
This references the `my-lib.js` file from app-parent such that the necessary hooks for app-parent to function are loaded into the child.
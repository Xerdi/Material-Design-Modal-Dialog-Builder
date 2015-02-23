# Material-Design-Modal-Dialog-Builder
Create dialogs in a nutshell

## Dependencies
[Bootstrap material design](http://fezvrasta.github.io/bootstrap-material-design/)

## Put this in your ```<head>```
```html
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
<link href="material/css/ripples.min.css" rel="stylesheet">
<link href="material/css/material-wfont.min.css" rel="stylesheet">
```
## Put this at the bottom of your ```<body>```
```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

<script src="material/js/ripples.min.js"></script>
<script src="material/js/material.min.js"></script>

<script src="js/modal.js"></script>
```
# Usage
## How to hook a dialog

```javascript
var modal = new Modal({
  title: "A modal example!",
  body: document.createTextNode("This is an example of an HTML DOM element added to the body of the modal."),
  success: "success button text",
  process: function () {
    //some ajax functions
    modal.close();
  }
});

$('#my-button').click(function() {
  modal.show();
});
```

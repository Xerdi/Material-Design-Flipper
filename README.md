# Material-Design-Flipper
Animated cards in bootstrap material design.

## Dependencies
[Bootstrap material design](http://fezvrasta.github.io/bootstrap-material-design/)


## Put this in your ```<head>```
```html
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
<link href="material/css/ripples.min.css" rel="stylesheet">
<link href="material/css/material-wfont.min.css" rel="stylesheet">

<link href="css/flipper.css" rel="stylesheet">
```
## Put this at the bottom of your ```<body>```
```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

<script src="material/js/ripples.min.js"></script>
<script src="material/js/material.min.js"></script>

<script src="js/flipper.js"></script>
```

# Usage
## How to make the cards

```html
<div class="row" id="example-row">
  <!-- Note the "full-card" class which stands for only one card. Add multiple "full-card" for more cards.  -->
  <div class="col-xs-12 col-md-4 full-card">
    <!-- This will be the card that is active. Note that there should only be one card active. -->
    <div class="flip-card active-card">
      <div class="card label-info">
        <!-- The <h6> can also be a <img> which will be centered. -->
        <h6>1</h6>
      </div>
      <!-- This will be the button to trigger an animation. You will have to hook it yourself! -->
      <a href="javascript:void(0)" class="btn btn-primary btn-fab btn-raised icon-material-replay" id="first"></a>
      <div class="well">
        <h1>Card 1</h1>
      </div>
    </div>
    <div class="flip-card">
      <div class="card" style="background-color: #F1BF26;color: white;">
        <h6>2</h6>
      </div>
      <div class="well">
        <h1>Card 2</h1>
      </div>
    </div>
    <div class="flip-card">
      <div class="card alert-success">
        <h6>3</h6>
      </div>
      <div class="well">
        <h1>Card 3</h1>
      </div>
    </div>
  </div>
</div>
```

## How to hook your cards
```javascript
//  Be sure to make a Flipper object first.
var flipper = new Flipper(document.getElementById("example-row"));

$('#first').click(function(e) {
  // make sure you put logical href links for people without javascript
  e.preventDefault();
  flipper.setCards([{
    // there is only one column for this example. add more full cards and then add here dictionaries to switch them.
    cardIndex: "0",
    activeIndex: "1"
  }]);
});

```

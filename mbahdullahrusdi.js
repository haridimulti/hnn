/* Ticker Styling */
.ticker-wrapper.has-js {
    margin: 0;
    padding: 0;
    width: 780px;
    height: 32px;
    display: block;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    background-color:inherit;
    font-size: inherit;
}
.ticker {
    width: 710px;
    height: 23px;
    display: block;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    @media #{$xs}{
        width: 200px;
    }
}
.ticker-title {
padding-top: 9px;
color: #990000;
font-weight: bold;
background-color: #fff;
text-transform: capitalize;
}
.ticker-content {
    margin: 0px;
    /* padding-top: 9px; */
    position: absolute;
    color: #506172;
    font-weight: normal;
    background-color: #fff;
    overflow: hidden;
    white-space: nowrap;
    font-family: "Roboto",sans-serif;
    font-size: 16px;
}
.ticker-content:focus {
 none;
}
.ticker-content a {
text-decoration: none;
color: #1F527B;
}
.ticker-content a:hover {
text-decoration: underline;
color: #0D3059;
}
.ticker-swipe {
padding-top: 9px;
position: absolute;
top: 0px;
background-color: #fff;
display: block;
width: 800px;
height: 23px;
}
.ticker-swipe span {
margin-left: 1px;
background-color: #fff;
border-bottom: 1px solid #1F527B;
height: 12px;
width: 7px;
display: block;
}
.ticker-controls {
padding: 8px 0px 0px 0px;
list-style-type: none;
float: left;
}
.ticker-controls li {
padding: 0px;
margin-left: 5px;
float: left;
cursor: pointer;
height: 16px;
width: 16px;
display: block;
}

.ticker-controls li.jnt-play-pause {
background-image: url('../images/controls.png');
background-position: 32px 16px;
}
.ticker-controls li.jnt-play-pause.over {
background-position: 32px 32px;
}
.ticker-controls li.jnt-play-pause.down {
background-position: 32px 0px;
}
.ticker-controls li.jnt-play-pause.paused {
background-image: url('../images/controls.png');
background-position: 48px 16px;
}
.ticker-controls li.jnt-play-pause.paused.over {
background-position: 48px 32px;
}
.ticker-controls li.jnt-play-pause.paused.down {
background-position: 48px 0px;
}
.ticker-controls li.jnt-prev {
background-image: url('../images/controls.png');
background-position: 0px 16px;
}
.ticker-controls li.jnt-prev.over {
background-position: 0px 32px;
}
.ticker-controls li.jnt-prev.down {
background-position: 0px 0px;
}
.ticker-controls li.jnt-next {
background-image: url('../images/controls.png');
background-position: 16px 16px;
}
.ticker-controls li.jnt-next.over {
background-position: 16px 32px;
}
.ticker-controls li.jnt-next.down {
background-position: 16px 0px;
}
.js-hidden {
display: none;
}
.no-js-news {
padding: 10px 0px 0px 45px;
color: #fff;
}
.left .ticker-swipe {
/*left: 80px;*/
}
.left .ticker-controls, .left .ticker-content, .left .ticker-title, .left .ticker {
float: left;
}
.left .ticker-controls {
padding-left: 6px;
}
.right .ticker-swipe {
/*right: 80px;*/
}
.right .ticker-controls, .right .ticker-content, .right .ticker-title, .right .ticker {
float: right;
}
.right .ticker-controls {
padding-right: 6px;
}

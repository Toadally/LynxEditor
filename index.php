<!DOCTYPE html>
<html lang="en">
<head>
<title>Lynx Editor</title>
<link rel="icon" type="image/png" href="./favicon.png">
<link rel="stylesheet" href="./fa/css/font-awesome.min.css">
<style>

    @import url('https://fonts.googleapis.com/css?family=Inconsolata');
    html {
      font-family: "Inconsolata";
    }
    #editor {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 95vh;
      width: 70vw;
    }
    #sidebar {
      width: 30vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      box-shadow: 5px 0px 5px rgba(0,0,0,0.1);
    }
    #top-selector {
      height: calc(5vh - 1px);
      width: 70vw;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
    }
    #top-selector .tab {
      height: 100%;
      float: left;
    }
    #top-selector span {
      font-size: 15px;
      height: 100%;
      position: relative;
      float: left;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 125ms;
    }
    #top-selector i {
      position: relative;
      float: right;
      top: 75%;
      right: 5%;
      transform: translate(0%, -50%);
      height: 100%;
      display: none;

    }
    .tab {
      transition: 125ms;
    }
    .tab:hover {
      cursor: pointer;
    }
    .active {
      text-decoration: underline;
    }
    .header {
      width: 100%;
      padding-bottom: 10px;
      margin: 0 auto;
      display: block;
      height: 5vh;
    }
    .header img {
      float: left;
      position: relative;
      top: 60%;
      left: 5%;
      transform: translate(0%, -50%);
    }
    .header h5 {
      float: left;
      position: relative;
      top: 35%;
      left: 5%;
      transform: translate(5%, -150%);
      font-size: 18px;
    }
    .filelist {
      height: calc(87vh - 12px);
    }
    .filelist div {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 20px;
      padding-top: 8px;
      padding-bottom: 4px;
      display: table;
    }
    .filelist div a {
      display: table-cell;
      vertical-align: center;
      padding-left: 10%;
    }
    .filelist div:hover {
      cursor: pointer;
    }
    .footer {
      height: 8vh;
      width: 100%;
      display: block;
      border-top: 1px solid white;
    }
</style>
<link rel='stylesheet' href='./css/load.css'>
<div class='spin-back'></div><div class='spinner'></div>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

<div id="editor"></div>
<div id="sidebar">
  <div class="header">
    <img width=40 src="./favicon.png">
    <h5>Lynx Editor</h5>
  </div>
  <div class="filelist">
    <div class="tab"><a><i class="fa fa-file-code-o"></i> index.html</a></div>
    <div class="tab"><a><i class="fa fa-file-code-o"></i> code.html</a></div>
  </div>

  <div class="footer">
  </div>
</div>
<div id="top-selector">
  <div class="tab activeTab"><span class="active">index.html</span><i class="fa fa-times"></i></div>
  <div class="tab"><span>code.html</span><i class="fa fa-times"></i></div>

</div>
<script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="./ace/ace.js" type="text/javascript" charset="utf-8"></script>

<script src="./js/load.js"></script>

<script>
    var theme = "ace-xcode";
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/xcode");
    editor.getSession().setMode("ace/mode/php");


</script>

<script src="./js/index.js" async defer></script>

</body>
</html>

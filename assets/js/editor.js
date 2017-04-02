 
      var delay;
      // Initialize CodeMirror editor with a nice html5 canvas demo.
      var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'javascript',
        styleActiveLine: true,
        lineNumbers: true,
        lineWrapping: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        theme : 'solarized',
        extraKeys: {
          "Tab": "indentMore"
        }
         });
      
      var editorValue= editor.getValue();
      // editor.on("change", function() {
      //   clearTimeout(delay);
      //   delay = setTimeout(updatePreview, 600);
      // });
      
      function updatePreview() {
      var cdn = "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/addons/p5.dom.min.js'></script><script>"
      var endcdn="</script></body></html>"
        var previewFrame = document.getElementById('preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(cdn+editor.getValue()+endcdn);
        preview.close();

              console.log(editor.getValue());

      }
      setTimeout(updatePreview, 600);

var experimentButton = document.getElementById('experimentButton');


experimentButton.addEventListener('click', function(e) {

// save a version
  $.ajax({
    type: "POST",
    url: 'http://localhost:3000/api/experiment',
    data: {
      editorValue: editor.getValue(),

    },
    success: function(data) {
      // THE ID IS NOT THERE!
      // createVersion(data._id);
      // // console.log(JSON.stringify(basicElements[0].getJSON()))
      // console.log(data.id)

    }

  });
});
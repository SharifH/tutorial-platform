 
      var delay;
      // Initialize CodeMirror editor with a nice html5 canvas demo.
      var editorEx = CodeMirror.fromTextArea(document.getElementById('codeEx'), {
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
      // currentValue= JSON.stringify(editor.getValue())
      // console.log(editor)
      editorEx.setSize(700, window.innerHeight)
      // editorEx.setValue(currentValue);
      
      // editor.on("change", function() {
      //   clearTimeout(delay);
      //   delay = setTimeout(updatePreview, 600);
      // });
      
      function updatePreview() {
      var cdn = "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/addons/p5.dom.min.js'></script><script>"
      var endcdn="</script></body></html>"
        var previewFrame = document.getElementById('previewEx');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(cdn+editorEx.getValue()+endcdn);
        preview.close();
      }
      setTimeout(updatePreview, 600);


      $.ajax({
            type: "GET",
            url: 'http://localhost:3000/api/experiment/',
            success: function(data) {
              // console.log(data.editorValue)


              var cdn = "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/addons/p5.dom.min.js'></script><script>"
              var endcdn="</script></body></html>"
              pastcode = cdn + data.editorValue + endcdn;
            
                
                // take the result data and put data.editorValue inside the editor
              var previewFrame = document.getElementById('previewEx');
              var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
              preview.open();
              preview.write(pastcode);
              preview.close();
              editorEx.setValue(data[data.length-1].editorValue);

          }
  });

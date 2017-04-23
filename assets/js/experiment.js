
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
     editorEx.setSize(850, window.innerHeight-100)
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
/*
* DOWNLOADABLE TEXTAREA v1.0.0
*
* by Ian Marshall (ian.js.tutor@gmail.com), 2017
* ======
* Add the "data-downloadable" attribute to the textarea
* you want to download as text. The value of this attribute
* should be the filename and extension you want to use
* for the downloaded text.
*
* For example:
* <textarea data-downloadable="text.txt"></textarea>
*
* Then create a button with the exact same data-downloadable
* attribute. This way, you can have multiple textareas and
* buttons, as long as each pair has a different filename.
*
* For example:
* <button data-downloadable="text.txt">download</button>
*
* NOTE: some filename extensions (.js, .py, .php, etc.)
* may cause browsers to issue a warning, something like
* "This type of file can harm your computer. Do you want
* to keep this file anyway?"
*
* requirements: window and document objects, nothing else
* ======
*/

     ;(function(window, document){
document.addEventListener("DOMContentLoaded", function(){
   //no downloadable textareas?
   if (!document.querySelector("[data-downloadable]")) return;
//APP INIT:
   //iterate through each downloadable textarea/button combination
   [].forEach.call(document.querySelectorAll("button[data-downloadable]"), downloadableInit);
//INIT EACH DOWNLOADABLE:
   function downloadableInit(downloadButton){
       //one textarea for each button, both with matching data-downloadable attributes
       if (document.querySelectorAll("textarea[data-downloadable='" + downloadButton.getAttribute("data-downloadable") + "']").length !== 1) return;
       //add event listener
       downloadButton.addEventListener("click", downloadTextarea);
   }
//EVENT HANDLING:
   function downloadTextarea(e){
     var cdn = "<script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/addons/p5.dom.min.js'></script><script>"
     var endcdn="</script></body></html>"
     var editorValue= editorEx.getValue();
     code = cdn + editorValue + endcdn;
       //get file name from button
       var fileName = e.target.getAttribute("data-downloadable"),
       //get text from matching textarea

   //The textarea is not a normal textarea with codemirror so the value can be downloaded but not the textarea
           // text = document.querySelector("textarea[data-downloadable='" + fileName + "']").value,
         text = code,

       //create blob from text
           textBlob = new Blob([text], {type: "text/plain"}),
       //create link that will only temporarily be attached to document
           tempLink = document.createElement("a");
       //add data to temporary link
       tempLink.download = fileName;
       tempLink.innerHTML = "file download";
       window.URL = window.URL || window.webkitURL;
       tempLink.href = window.URL.createObjectURL(textBlob);
       //temporary link deletes itself on click
       tempLink.onclick = function(e){
           e.target.outerHTML = "";
       }
       //keep temporary link from view
       tempLink.style.display = "none";
       //attach temporary link to DOM
       document.body.appendChild(tempLink);
       //trigger its click event
       tempLink.click();
   }
}); //end DOMContentLoaded handler
})(window, document);

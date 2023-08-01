document.addEventListener('DOMContentLoaded', function() {
  const signaturePad = new signaturePad(document.getElementsById('signaturecanvas'));
  const clearButton = document.getElementsById('clearButton');
  const submitButton = document.getElementsById('submitButton');

clearButton.addEventListener('click',  function() {
  signaturePad.clear();
  submitButton = true;

  
});

signaturePad.onEnd = function(){
   submitButton = false;
};

submitButton = true;
});
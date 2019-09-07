functioncallJsAlert() {
  alert('Objective-C call js to show alert');
  window.webkit.messageHandlers.AppModel.postMessage({ body: 'call js alert in js' });
}
functioncallJsConfirm() {
  if (confirm('confirm', 'Objective-C call js to show confirm')) { document.getElementById('jsParamFuncSpan').innerHTML = 'true'; } else { document.getElementById('jsParamFuncSpan').innerHTML = 'false'; }




  // AppModel是我们所注入的对象
  window.webkit.messageHandlers.AppModel.postMessage({ body: 'call js confirm in js' });
}
functioncallJsInput() {
    varresponse = prompt('Hello', 'Please input your name:');
    document.getElementById('jsParamFuncSpan').innerHTML = response;
     // AppModel是我们所注入的对象
     window.webkit.messageHandlers.AppModel.postMessage({body: response});    }

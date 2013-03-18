 function triggerOpenGate() {
    var g = localStorage["OpenGateUrl"] || '';
    var u = localStorage["OpenGateUser"] || '';
    var p =localStorage["OpenGateSecret"] || '';
    
    //load from gps
    //var lat = position.coords.latitude;//'46.75429';
    //var lon = position.coords.longitude;//'23.59';
    var lat = '46.75429';
    var lon = '23.59';
    
    var gateUrl = 'http://'+g+'/?u='+u+'&p='+p+'&lat='+lat+'&lng='+lon;
    
    $.ajax({
    url: gateUrl,
    }).always(function() {
      //alert('trigger done');
    });
 };
 
 function loadConfig(){
  $('#OpenGateUrl').val(localStorage["OpenGateUrl"] || '');
  $('#OpenGateUser').val(localStorage["OpenGateUser"] || '');
  $('#OpenGateSecret').val(localStorage["OpenGateSecret"] || '');
 };
 
 function saveConfig(){
  localStorage["OpenGateUrl"] = $('#OpenGateUrl').val();
  localStorage["OpenGateUser"] = $('#OpenGateUser').val();
  localStorage["OpenGateSecret"] = $('#OpenGateSecret').val();
 };
 
 $(document).delegate('#OpenGateMainPage', 'pageinit', function(){
    $('#OpenGateButton').click(function(){
         triggerOpenGate();
    });
    
    $('#OpenGateSaveConfig').click(function(){
      saveConfig();
    });
    
    $('#ConfigDialog').click(function(){
      if($("#OpenGateUrl").closest('.ui-dialog').is(':visible')){
        return;
      }
      loadConfig();
    });
 });
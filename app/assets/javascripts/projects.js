/// photo uploading

var tags = tagged;

$(document).ready(function() {

    var parseAPPID = "WaIQr0ALAedB6JhACwDdqAJXN5m0kBizefvqIRMd";
    var parseJSID = "JWFUQveemVMqiwfgLY5GVDrjCF9t3HQpv1wvE0Z1";

    //Initialize Parse
    Parse.initialize(parseAPPID,parseJSID);
    $("#fileUploadBtn").on("click", function(e) {
      e.preventDefault();

        var fileUploadControl = $("#fileUploader")[0];
        if (fileUploadControl.files.length > 0) {
            var file = fileUploadControl.files[0];
            var name = "photo.jpg";

            console.log("here goes nothing...");
            $('#pic').attr('src', "<%= image_path('loader.gif') %>");

            var parseFile = new Parse.File(name, file);
            parseFile.save().then(
                function() {
                    console.log("Woot!");
                    console.log(parseFile.url());
                    $('#url').val(parseFile.url());
                    $('#pic').attr('src', parseFile.url());
                },
                function(error) {
                    console.log("Error");
                    console.dir(error);
            });
        }
    });

  $( ".project-tag" ).on("click", function(event) {
    if (tags.indexOf(event.target.id) !== -1) {
      tags.splice(event.target.id, 1);
      $( this ).toggleClass( "active" );
      console.log(tags);
    }
  });

});

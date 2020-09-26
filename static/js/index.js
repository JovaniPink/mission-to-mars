// Helper function to get the status of the task
function updateProgress(status_url) {
  // send GET request to status URL
  $.getJSON(status_url, function (data) {
    if (data["state"] == "SUCCESS") {
      $('.btn-group-fab').toggleClass('active');
    } else {
      // Rerun in 2 seconds
      setTimeout(function () {
        $('.btn-group-fab').toggleClass('bg-danger');
        updateProgress(status_url);
      }, 2000);
    }
  });
}

// Attach a submit handler to the form
$("#scrape").submit(function (event) {
  // Stop form from submitting normally
  event.preventDefault();

  $.ajax({
    type: "POST",
    url: "/longtask",
    success: function (data, status, request) {
      status_url = request.getResponseHeader("Location");
      updateProgress(status_url);
    },
    error: function () {
      alert("Unexpected error");
    },
  });
});

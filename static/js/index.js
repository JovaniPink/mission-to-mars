// Variables
scrapeButton = $("#scrape");
scrapeSpinner = $("#scrape-spinner");

// Helper function to get the status of the task
function updateProgress(status_url) {
  // send GET request to status URL
  $.getJSON(status_url, function (data) {
    if (data["state"] == "SUCCESS") {
      scrapeButton.text("Updated");
      scrapeSpinner.toggleClass("d-none");
    } else {
      // Rerun in 2 seconds
      setTimeout(function () {
        updateProgress(status_url);
      }, 2000);
    }
  });
}

$("#scrape").on("click", function (e) {
  e.preventDefault();
  $(this).text("Loading");
  scrapeSpinner.toggleClass("d-none");

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

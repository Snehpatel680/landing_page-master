document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(showNext, 3000);



    // app script code

    // function doPost(e) {
    //     // Get the form data
    //     var name = e.parameter.name;
    //     var email = e.parameter.email;
    //     var message = e.parameter.message;
        
    //     // Open the Google Sheet by its ID (replace with your own sheet ID)
    //     var sheet = SpreadsheetApp.openById('id').getSheetByName('name');
        
    //     // Append the data to the sheet
    //     sheet.appendRow([new Date(), name, email, message]);
        
    //     // Prepare a response
    //     return ContentService.createTextOutput(
    //       JSON.stringify({ result: 'Success' })
    //     ).setMimeType(ContentService.MimeType.JSON);
    //   }
      
});
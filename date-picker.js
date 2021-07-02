$(function() {
  $("#date").datepicker({
    minDate: new Date().getHours() >= 19 ? "+2d" : "+1d",
    maxDate: "+7d",
    firstDay: 1,
    inline: true,
    beforeShowDay: function(date) {
      var day = date.getDay();
      switch (new Date().getDay()) {
        case 0:
          return [(day != 0 && day != 1 && day != 6), ''];
        case 1:
          return [(day != 0 && day != 1 && day != 2 && day != 6), ''];
        case 2:
          return [(day != 0 && day != 1 && day != 2 && day != 3 && day != 6), ''];
        case 3:
          return [(day != 0 && day != 1 && day != 2 && day != 3 && day != 4 && day != 6), ''];
        case 4:
          return [(day != 0 && day != 1 && day != 2 && day != 3 && day != 4 && day != 5 && day != 6), ''];
        case 5:
          return [(day != 0 && day != 1 && day != 6), ''];
        case 6:
          return [(day != 0 && day != 1 && day != 6), ''];
      }
    }
  });
});

function showPeopleData(data){
    var resultHtml = '<table><tr><th>User Name</th><th>First Name</th><th>Last Name</th><th>Gender</th><th>Concurrency</th></tr>';
    for (var i = 0; i < data.value.length; i++){
        resultHtml += '<tr><th>' + data.value[i].UserName + '</th>' + 
                    '<th>' + data.value[i].FirstName + '</th>' + 
                    '<th>' + data.value[i].LastName + '</th>' + 
                    '<th>' + data.value[i].Gender + '</th>' +
                    '<th>' + data.value[i].Concurrency + '</th></tr>';
    }
    resultHtml += '</table>';
    $('#result').html(resultHtml);
}

$('#count').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People/$count",
      success: function (data) { 
        $('#result').html('Amount of people: ' + data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#expand').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/TripPinServiceRW/People?$expand=Friends",
    success: function (data) { 
      console.log(data);
      showPeopleData(data);
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  });
});

$('#orderBy').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(wiosxzwweyab1rloxxkc25ft))/TripPinServiceRW/People?$orderby=FirstName",
      success: function (data) { 
        showPeopleData(data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#search').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(wiosxzwweyab1rloxxkc25ft))/TripPinServiceRW/People?$search=Female",
      success: function (data) { 
        showPeopleData(data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#select').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$select=UserName, Gender",
      success: function (data) { 
        showPeopleData(data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#skip').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$skip=2",
      success: function (data) { 
        showPeopleData(data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#top').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$top=4",
      success: function (data) { 
        showPeopleData(data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#filter').on('click', function() {
    $.ajax({
      type: "get",
      async: true,
      url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People/",
      success: function (data) { 
        showPeopleData(data);
      },
      error: function (errorMessage) {
        console.log(errorMessage);
      }
    });
});

$('#filter').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/TripPinServiceRW/People?$filter=Emails/any(s:endswith(s, 'contoso.com'))",
    success: function (data) { 
      showPeopleData(data);
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  });
});

$('#3filters').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$filter=endswith(LastName,'ndy') and startswith(FirstName,'Ro') or  substring(FirstName, 1, 2) eq 'o'",
    success: function (data) { 
      showPeopleData(data);
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  });
});

$('#3strings').on('click', function() {
  $.ajax({
    type: "get",
    async: true,
    url: "https://services.odata.org/V4/(S(wiosxzwweyab1rloxxkc25ft))/TripPinServiceRW/People?$skip=2&$top=5&$orderby=FirstName",
    success: function (data) { 
      showPeopleData(data);
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  });
});








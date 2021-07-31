// JQ Official - Datepicker
$(function(){
    $("#datepicker").datepicker();
});

// JQ Official - Moment JS
let date_today = moment().format("HH");
$("#time-display").text(date_today);

// JQ Custom - Retrieve inputs
let day_form = $('#project-form');
let new_form = $('#project-display');
function submit_form(event) {
    event.preventDefault();

    // JQ Input
    let app_hour = $('input[id="app-hour"]');
    let app_desc = $('input[id="app-desc"]');

    new_form.append('<tr class="form-list">' +
        '<th scope="col">' + app_hour.val() + '</th>' +
        '<th scope="col" contenteditable="true">' + app_desc.val() + '</th>' +
        '<th scope="col">' + '<button class="save_item">💾</button>' + '</th>' +
        '<th scope="col">' + '<button class="remove_item">❌</button>' + '</th>' +
        '</tr>');
}
day_form.on('submit', submit_form);

// DELETE: Predefined & Created
function single_erase(event) {
    $(event.target).parent().parent().remove();
}
new_form.on('click','.remove_item', single_erase);

// RGB By Hour
let hr_by_09HR = moment(($('#by_hour_09').text()), "HA").format("HH");
let hr_by_10HR = moment(($('#by_hour_10').text()), "HA").format("HH");
let hr_by_11HR = moment(($('#by_hour_11').text()), "HA").format("HH");
let hr_by_12HR = moment(($('#by_hour_12').text()), "HA").format("HH");
let hr_by_13HR = moment(($('#by_hour_13').text()), "HA").format("HH");
let hr_by_14HR = moment(($('#by_hour_14').text()), "HA").format("HH");
let hr_by_15HR = moment(($('#by_hour_15').text()), "HA").format("HH");
let hr_by_16HR = moment(($('#by_hour_16').text()), "HA").format("HH");
let hr_by_17HR = moment(($('#by_hour_17').text()), "HA").format("HH");
let hr_by_18HR = moment(($('#by_hour_18').text()), "HA").format("HH");
let hr_by_19HR = moment(($('#by_hour_19').text()), "HA").format("HH");
let hr_by_20HR = moment(($('#by_hour_20').text()), "HA").format("HH");
let hr_by_21HR = moment(($('#by_hour_21').text()), "HA").format("HH");
let hr_by_22HR = moment(($('#by_hour_22').text()), "HA").format("HH");
let hr_present = moment((moment().format('LT')), "HA").format("HH");

function hour_rainbow(hour_set,hour_now){

    let hour_list = [
        '"#by_hour_09"',
        '"#by_hour_10"',
        '"#by_hour_11"',
        '"#by_hour_12"',
        '"#by_hour_13"',
        '"#by_hour_14"',
        '"#by_hour_16"',
        '"#by_hour_17"',
        '"#by_hour_18"',
        '"#by_hour_22"'
    ];

    if (hour_set < hour_now) {
        function edit_row(type_row){
            $(type_row).closest('tr').css('background','#ff0000');
        }
    }
    else if (hour_set === hour_now) {
        function edit_row_2(type_row){
            $(type_row).closest('tr').css('background','#00cb00');
        }
    }
    else {
        function edit_row_3(type_row){
            $(type_row).closest('tr').css('background','#0f0fff');
        }
    }

    for (let i = 0; i <= hour_list.length; i++) {
        edit_row(hour_list[i]);
        edit_row_2(hour_list[i]);
        edit_row_3(hour_list[i]);
    }
}

hour_rainbow(hr_by_18HR,hr_present);


/**let detect_hour_15 = hour_rainbow(hr_by_15HR,hr_present);
 hour_rainbow(detect_hour_15);

 let detect_hour_16 = hour_rainbow(hr_by_16HR,hr_present);
 hour_rainbow(detect_hour_16);

 let detect_hour_17 = hour_rainbow(hr_by_17HR,hr_present);
 hour_rainbow(detect_hour_17);

 let detect_hour_18 = hour_rainbow(hr_by_18HR,hr_present);
 hour_rainbow(detect_hour_18);

 let detect_hour_19 = hour_rainbow(hr_by_19HR,hr_present);
 hour_rainbow(detect_hour_19);

 let detect_hour_20 = hour_rainbow(hr_by_20HR,hr_present);
 hour_rainbow(detect_hour_20);

 let detect_hour_21 = hour_rainbow(hr_by_21HR,hr_present);
 hour_rainbow(detect_hour_21);

 let detect_hour_22 = hour_rainbow(hr_by_22HR,hr_present);
 hour_rainbow(detect_hour_22);**/

/**if (hr_by_09HR < hr_present) {
        $('#by_hour_09').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_09HR === hr_present) {
        $('#by_hour_09').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_09').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_10HR < hr_present) {
        $('#by_hour_10').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_10HR === hr_present) {
        $('#by_hour_10').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_10').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_11HR < hr_present) {
        $('#by_hour_12').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_11HR === hr_present) {
        $('#by_hour_11').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_11').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_12HR < hr_present) {
        $('#by_hour_12').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_12HR === hr_present) {
        $('#by_hour_12').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_12').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_13HR < hr_present) {
        $('#by_hour_13').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_13HR === hr_present) {
        $('#by_hour_13').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_13').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_14HR < hr_present) {
        $('#by_hour_14').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_14HR === hr_present) {
        $('#by_hour_14').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_14').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_14HR < hr_present) {
        $('#by_hour_14').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_14HR === hr_present) {
        $('#by_hour_14').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_14').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_15HR < hr_present) {
        $('#by_hour_15').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_15HR === hr_present) {
        $('#by_hour_15').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_15').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_16HR < hr_present) {
        $('#by_hour_13').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_16HR === hr_present) {
        $('#by_hour_16').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_16').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_17HR < hr_present) {
        $('#by_hour_17').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_17HR === hr_present) {
        $('#by_hour_17').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_17').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_18HR < hr_present) {
        $('#by_hour_18').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_18HR === hr_present) {
        $('#by_hour_18').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_18').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_19HR < hr_present) {
        $('#by_hour_19').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_19HR === hr_present) {
        $('#by_hour_19').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_19').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_20HR < hr_present) {
        $('#by_hour_20').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_20HR === hr_present) {
        $('#by_hour_20').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_20').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_21HR < hr_present) {
        $('#by_hour_21').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_21HR === hr_present) {
        $('#by_hour_21').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_21').closest('tr').css('background','#0f0fff');
    }

 if (hr_by_22HR < hr_present) {
        $('#by_hour_22').closest('tr').css('background','#ff0000');
    }
 else if (hr_by_22HR === hr_present) {
        $('#by_hour_22').closest('tr').css('background','#00cb00');
    }
 else {
        $('#by_hour_22').closest('tr').css('background','#0f0fff');
    }**/

// If its 9AM, function to verify list form
// OBJ ARRAY with hours
// Add atribute to every object with hour less than the actual hour
// Add a number to every div until ends
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
// https://newbedev.com/convert-12-hour-HR-HR-string-to-24-date-object-using-moment-js
// https://www.codegrepper.com/code-exHRples/javascript/moment+js+without+HR+HR
// https://stackoverflow.com/questions/31265115/javascript-adding-number-to-table-cell-id-using-for-loop-accumulator
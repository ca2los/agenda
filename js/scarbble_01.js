// JQ Official - Datepicker
$(function(){
    $("#datepicker").datepicker();
});

// JQ Official - Moment JS
let date_today = moment().format("HH");
$("#time-display").text(date_today);

/*$(function() {
    $( "tbody" ).sortable();
});*/

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

// SAVE: Predefined & Created

let save_btn_09  = document.querySelector('.save_item_09');
save_btn_09.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_09 = {
        Hour09: document.querySelector('#by_hour_09').innerHTML,  // I had to use .innerHTML instead of .value because the
        Desc09: document.querySelector('#by_info_09').innerHTML   // properties inside the TAG are inherited, not owned.
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_09));
});

let save_btn_10  = document.querySelector('.save_item_10');
save_btn_10.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_10 = {
        Hour10: document.querySelector('#by_hour_10').innerHTML,
        Desc10: document.querySelector('#by_info_10').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_10));
});

let save_btn_11  = document.querySelector('.save_item_11');
save_btn_11.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_11 = {
        Hour11: document.querySelector('#by_hour_11').innerHTML,
        Desc11: document.querySelector('#by_info_11').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_11));
});

let save_btn_12  = document.querySelector('.save_item_12');
save_btn_12.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_12 = {
        Hour12: document.querySelector('#by_hour_12').innerHTML,
        Desc12: document.querySelector('#by_info_12').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_12));
});

let save_btn_13  = document.querySelector('.save_item_13');
save_btn_13.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_13 = {
        Hour13: document.querySelector('#by_hour_13').innerHTML,
        Desc13: document.querySelector('#by_info_13').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_13));
});

let save_btn_14  = document.querySelector('.save_item_14');
save_btn_14.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_14 = {
        Hour14: document.querySelector('#by_hour_14').innerHTML,
        Desc14: document.querySelector('#by_info_14').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_14));
});

let save_btn_16  = document.querySelector('.save_item_16');
save_btn_16.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_16 = {
        Hour16: document.querySelector('#by_hour_16').innerHTML,
        Desc16: document.querySelector('#by_info_16').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_16));
});

let save_btn_17  = document.querySelector('.save_item_17');
save_btn_17.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_17 = {
        Hour17: document.querySelector('#by_hour_17').innerHTML,
        Desc17: document.querySelector('#by_info_17').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_17));
});

let save_btn_18  = document.querySelector('.save_item_18');
save_btn_18.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_18 = {
        Hour18: document.querySelector('#by_hour_18').innerHTML,
        Desc18: document.querySelector('#by_info_18').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_18));
});

let save_btn_22  = document.querySelector('.save_item_22');
save_btn_22.addEventListener('click',function (event){
    event.preventDefault();

    let data_info_22 = {
        Hour22: document.querySelector('#by_hour_22').innerHTML,
        Desc22: document.querySelector('#by_info_22').innerHTML
    };
    localStorage.setItem("SAVED", JSON.stringify(data_info_22));
});

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

if (hr_by_09HR < hr_present) {
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
}

// If its 9AM, function to verify list form
// OBJ ARRAY with hours
// Add attribute to every object with hour less than the actual hour
// Add a number to every div until ends
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
// https://newbedev.com/convert-12-hour-HR-HR-string-to-24-date-object-using-moment-js
// https://www.codegrepper.com/code-exHRples/javascript/moment+js+without+HR+HR
// https://stackoverflow.com/questions/31265115/javascript-adding-number-to-table-cell-id-using-for-loop-accumulator
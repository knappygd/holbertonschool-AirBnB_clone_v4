$(document).ready(function () {
    let amenityIDs = {};

    $('input[type="checkbox"]').change(function () {
        let $checkbox = $(this);
        let amenityID = $checkbox.data("id");

        if ($checkbox.is(":checked")) {
            amenityIDs[amenityID] = true;
        } else {
            delete amenityIDs[amenityID];
        }

        let selectedAmenities = Object.keys(amenityIDs).map(function (id) {
            return amenityIDs[id];
        });

        $('div.Amenities h4').text(selectedAmenities.join(', '));
    });
});
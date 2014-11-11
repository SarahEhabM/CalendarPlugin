var calendar = {
	createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
		corova.exec(
				successCallback,
				errorCallback,
				'Calendar',
				'addCalendarEntry',
				[{
					"title": title,
					"description": notes,
					"eventLocation": location,
					"startTimeMillis": startDate.getTime(),
					"endTimeMillis": endDate.getTime()
				}]
		);
	}
}
module.exports = calendar;
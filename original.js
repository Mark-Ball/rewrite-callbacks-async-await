// Below, is a function called addString, that will chain results together, then wait a random amount of time, before continuing.
// This is currently written using callbacks. Edit the commented sections below to make this pretty with async await

// Change something on the line below
function addString(previous, current, callback){
	// Add a line here
	setTimeout(
		() => {
		// Change something on the line below
		callback((previous + ' ' + current))
		},
		Math.floor(Math.random() * 100) + 1
	)
}

// Change this function to a pretty async await function
function addAll(){
	addString('', 'A', result => {
		addString(result, 'B', result => {
			addString(result, 'C', result => {
				addString(result, 'D', result => {
					addString(result, 'E', result => {
						console.log(result) // Prints out " A B C D E"
					})
				})
			})
		})
	})
}
addAll()
export const handleError = error => {
	const errorCode = error.code;
	const errorMessage = error.message;
	console.error(errorCode + errorMessage);
 };
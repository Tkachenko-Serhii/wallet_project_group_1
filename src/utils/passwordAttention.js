import { alert } from '@pnotify/core';

const message = `Password should contains minimum 6 and maximum 12 characters and at least one uppercase letter, one lowercase letter, one number and one special character of @, $, !, %, *, ?, &`;

export default function passwordAttention() {
	return alert({
		title: 'Attention!',
		text: message,
		animation: 'fade',
		delay: 4000
	});
}

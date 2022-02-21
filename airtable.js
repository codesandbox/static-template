const webhookUrl =
	"https://hooks.airtable.com/workflows/v1/genericWebhook/appdheJzUKKdDbJd9/wflJU1983AZNHjVXn/wtr9XGGdNx6Gfzphb";
const params = {
	name: "This is a test",
	email: "contact@g4knr.co.uk",
	budget: "< £1,000",
	timeline: "1 - 2 months",
	message: "The message to send"
};

async function sendAirtableWebhook(url, params) {
	let callToAirtable = await fetch(url, {
		method: "POST",
		body: JSON.stringify({
			params
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	// call the API
	let response = await callToAirtable.json();
	console.log(response);
}

// function to create a webflow CMS item
async function createWebflowItem(collectionId) {
	let callToWebflow = await fetch(
		`https://api.webflow.com/collections/${collectionId}/items?live=true`,
		{
			method: "POST",
			body: JSON.stringify({
				fields: {
					name: record.getCellValue("Name"),
					_archived: false,
					_draft: false
				}
			}),
			headers: {
				"Content-Type": contentType,
				Authorization: authorization,
				"accept-version": version
			}
		}
	);

	// call the API
	let response = await callToWebflow.json();
	console.log(response);

	// if there is an issue, log the issue and end the automation
	if (response.code) {
		console.log(response.code);
		console.log(response.name);
		return false;
	}

	// update the record in airtable with the webflowId, slug and status
	await table.updateRecordAsync(recordId, {
		"Webflow ID": response["_id"],
		Slug: response["slug"],
		Status: { name: "Active" }
	});
}

// run the function
createWebflowItem(collectionId);

function sendMessage() {
	const request = new XMLHttpRequest();
	request.open(
		"POST",
		"https://hooks.airtable.com/workflows/v1/genericWebhook/appdheJzUKKdDbJd9/wflJU1983AZNHjVXn/wtr9XGGdNx6Gfzphb"
	);
	request.setRequestHeader("Content-type", "application/json");

	const params = {
		name: "This is a test",
		email: "contact@g4knr.co.uk",
		budget: "< £1,000",
		timeline: "1 - 2 months",
		message: "The message to send"
	};

	request.send(JSON.stringify(params));
}

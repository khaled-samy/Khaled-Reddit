const postData = (data, url) => fetch(url, { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(data) });

export default postData;

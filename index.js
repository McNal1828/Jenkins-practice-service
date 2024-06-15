import express from 'express';
import os from 'os';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write(`<h1>샘플서버입니다</h1>`);
	/**
	 * @type {os.NetworkInterfaceInfo}
	 */
	const networkInterfaces = os.networkInterfaces();
	Object.values(networkInterfaces).forEach((networkInterface) => {
		networkInterface.forEach((obj) => {
			if (obj.family != 'IPv6') {
				res.write(`<p>${obj.address}</p>`);
			}
		});
	});
	res.end();
});

app.listen(port, () => {
	console.log(`serving at port ${port}`);
});

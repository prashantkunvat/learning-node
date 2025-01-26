const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
	try {
		const first = await readFile("./content/first.txt", "utf8");
		const second = await readFile("./content/second.txt", "utf8");
		console.log(first, second);

		await writeFile("./content/testAsync.txt", "This is Awasom", { flag: "a" });
	} catch (error) {
		console.log(error);
	}
};

start();

// first method
// const textFile = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, "utf8", (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// textFile("./content/first.txt")
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

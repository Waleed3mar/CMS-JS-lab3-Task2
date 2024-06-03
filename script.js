//? Get the data from the fake API

let data = new XMLHttpRequest();
let table = document.getElementById("users-table");
data.open("GET", "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=50")
data.send("")
data.onreadystatechange = function () {
	if (data.readyState == 4 && data.status == 200) {
		let posts = JSON.parse(data.response);
		let t_H_row = document.createElement("tr")
		// console.log(posts);
		// console.log("--------------------------");
		// console.log(Object.keys(posts[0]))


		Object.keys(posts[0]).map((post) => {
			let t_head = document.createElement("th");
			t_head.innerText = post;
			t_H_row.appendChild(t_head);
		})
		table.appendChild(t_H_row);
		Object.values(posts).map((p) => {
			let t_row = document.createElement("tr")
			Object.values(p).map((i_p) => {
				var t_rcrd = document.createElement("td");
				t_rcrd.innerText = i_p;
				t_row.appendChild(t_rcrd);

			})
			// console.log(t_row)
			table.appendChild(t_row);
		})

		// console.log(table)
	}
}

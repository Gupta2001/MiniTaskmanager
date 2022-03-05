$.ajax({
  url: "https://devza.com/tests/tasks/list",
  headers: { AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
}).done((p) => {
  tasks = p["tasks"];
  employ_table = $("#emp_body");
  tasks = tasks.splice(0, 10);
  "id": "4557",
  "message": "Hi Shobha any comment.",
  "assigned_to": "3",
  "assigned_name": "Prabhat",
  "created_on": "2022-01-06 11:20:05",
  "due_date": "2022-01-06 10:20:00",
  "priority": "3"
  for (task of tasks) {
    employ_table.after(`          <tr>
    <td>${task["id"]}</td>
    <td>${task["message"]}</td>
    <td>${task["assigned_to"]}</td>
    <td>${task["assigned_name"]}</td>
    <td>${task["created_on"]}</td>
    <td>${task["due_date"]}</td>
    <td>${task["priority"]}</td>
  </tr>`);
  }
});

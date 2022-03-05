$.ajax({
  url: "https://devza.com/tests/tasks/list",
  headers: { AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
}).done((p) => {
  tasks = p["tasks"];
  employ_table = $("#emp_body");
  tasks = tasks.splice(0, 10);
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

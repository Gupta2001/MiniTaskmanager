$.ajax({
  url: "https://devza.com/tests/tasks/list",
  headers: { AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a" },
}).done((p) => {
  tasks = p["tasks"];
  employ_table = $("#employee");
  tasks.splice(0, 10);
  employ_table.after(`          <tr>
  <td>4543</td>
  <td>goood</td>
  <td>3</td>
  <td>Prabhat</td>
  <td>2022-01-06 08:43:40</td>
  <td>2022-01-06 08:23:23</td>
  <td>3</td>
</tr>`);
});

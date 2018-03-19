document.addEventListener('DOMContentLoaded', function () {
    var hideShowFormBtn = document.getElementById('main_btn'),
        form = document.getElementById('form'),

        addTaskBtn = document.querySelector('.btn_primary'),
        additionDate = document.querySelector('#date'),
        authorName = document.querySelector('#name'),
        priority = document.querySelector('#priority'),
        comment = document.querySelector('#comment'),
        table = document.querySelector('.table-bordered tbody');

    hideShowFormBtn.addEventListener('click', function (e) {
        e.preventDefault();
        form.hidden = !form.hidden;
    });

    addTaskBtn.addEventListener('click', function (e) {
        e.preventDefault();

        var tr = document.createElement('tr'),
            tdAdditionDate = document.createElement('td'),
            tdAuthor = document.createElement('td'),
            tdPriority = document.createElement('td'),
            tdTask = document.createElement('td');

            tdAdditionDate.innerText = additionDate.value;
            tdAuthor.innerText = authorName.value;
            tdPriority.innerText = priority.value;
            tdTask.innerText = comment.value;

            tr.appendChild(tdAdditionDate);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdPriority);
            tr.appendChild(tdTask);

            table.appendChild(tr);
    });


});


$(document).ready(function() {
    
    function getDate() {

        var today = new Date();
        var month = today.getMonth();
        var day = today.getDate();
        var year = today.getFullYear();

        var dayName = today.getDay();
        var nameOfDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $(".day-name").append(nameOfDay[dayName]);

        $(".date").append(month + "/" + day + "/" + year)
    }


    function addTask() {

        var task = $("input[type=text]").val();
        $("input[type=text]").val('');

        $(".all-tasks").append("<li class='task'><input id='checkBox' type='checkbox'><span>"+task+"</span></li>")
        
        console.log(task)
    }

    function checkTask() {
        console.log("Checkbox clicked")
        // $("span").addClass("finished");
        $(this).children().addClass("finished");
    }

    $(document).on("click", "button", addTask);
    $(document).on("click", "#checkBox", checkTask);
    $(document).keypress(function(e) {
        if(e.which == 13) {
            addTask();
        }
    })

    getDate();

});
function task(task){
    this.task = task;
    this.completed = false;
}

function task_list(){
    this.tasks = new Array();
    this.add_button = $('#add_button');
    this.task_input = $('#todo_item');
}
//
//    $("#add_button").click(function() {
//      alert("Clicked");
//    });

task_list.prototype.init = function(){
    var self = this;
    this.add_button.live("click", function() {
        self.add(new task(self.task_input.val()));
    });
};

task_list.prototype.add = function(task) {
    this.tasks.push(task);
    this.task_input.val("");
}

task_list.prototype.find = function(task) {
    if (this.tasks[this.tasks.indexOf(task)] == undefined)
        return null;
    else
        return this.tasks[this.tasks.indexOf(task)];
}

task_list.prototype.toggle = function(task) {
    var this_task = this.find(task);

    if (this_task.completed == true)
        this_task.completed = false;
    else
        this_task.completed = true;
}
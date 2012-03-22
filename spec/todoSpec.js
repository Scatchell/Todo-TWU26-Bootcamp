describe("todo", function(){

    beforeEach(function(){
        item = new task("task");
        tasklist = new task_list();
    });

    it("should create a todo item successfully", function(){
        expect(item.task).toEqual("task");
    });

    it("should be found in list of tasks", function(){
        tasklist.add(item);
        expect(tasklist.find(item).task).toEqual("task");
    });

    it("should return null if task is not found in list", function(){
        item2 = new task("blah", "blah");
        expect(tasklist.find(item2)).toEqual(null);
    });

    it("should be able to mark task as completed", function() {
        tasklist.add(item);
        tasklist.toggle(item);
        expect(tasklist.find(item).completed).toEqual(true);
    });

    it("should be able to mark task as uncompleted", function() {
        tasklist.add(item);
        tasklist.toggle(item);
        tasklist.toggle(item);
        expect(tasklist.find(item).completed).toEqual(false);
    });

});

describe("todo", function(){

    beforeEach(function() {
        $('<div id="fixture"><div id="status"></div><input id="todo_item" type="text" name="todo"/><button id="add_button" type="button">Add</button></div>').appendTo('body');
        tasklist2 = new task_list();
        tasklist2.init();
    });

    afterEach(function() {
        $('#fixture').remove();
    });

    it("should submit task when thing is clicked", function() {
        $('#todo_item').val("test task");
        $('#add_button').click();

        the_task = new task("test task");

        tasklist2.add(the_task);

        expect(tasklist2.find(the_task)).toEqual(the_task);
    });

    it("should display the added task", function(){
        $('#todo_item').val("test task");
        $('#add_button').click();

        expect($('#display_tasks').html).toContain("test task");
    });
});
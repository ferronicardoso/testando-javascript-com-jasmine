(function () {
    'use strict';

    describe('App', function() {
        var $rootScope, $controller; 
        var todoListController;
        
        beforeEach(module('todoApp'));

        beforeEach(inject(function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;

            todoListController = $controller('TodoListController', { 
                $scope: $rootScope.$new() 
            });
        }));
            
        it('todoListController esta definido', function() {
            expect(todoListController).toBeDefined();
        });

        
        it('todoListController.todos esta definido', function() {
            expect(todoListController.todos).toBeDefined();
        });

        it('incluir item no lista', function () {
            todoListController.todoText = 'Item 1';
            todoListController.addTodo();
        
            expect(3).toEqual(todoListController.todos.length);
        });
        
        it('itens restantes da lista', function() {
            var result = todoListController.remaining();
            expect(1).toEqual(result);
        });

        it('arquiva itens da lista', function() {
            todoListController.archive();
            expect(1).toEqual(todoListController.todos.length);
        });
    });
        
}());
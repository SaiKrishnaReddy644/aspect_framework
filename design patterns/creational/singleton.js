var SingletonObject;
(function () {
    var instance;
    SingletonObject = function SingletonObject() {
        if (instance) {
            return instance;
        }
        instance = {};
        return instance;
    };
}());


module.exports=SingletonObject
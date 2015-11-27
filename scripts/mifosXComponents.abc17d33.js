define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.5cd8eab4'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService'
        ],
        controllers: [
            'controllers.f01444cb'
        ],
        filters: [
            'filters.fa2ac2a1'
        ],
        directives: [
            'directives.ac6d27f4'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.8072c341'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});

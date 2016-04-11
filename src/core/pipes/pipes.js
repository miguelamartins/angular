'use strict';var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var collection_1 = require('angular2/src/facade/collection');
var cd = require('angular2/src/core/change_detection/pipes');
var ProtoPipes = (function () {
    function ProtoPipes(
        /**
        * Map of {@link PipeMetadata} names to {@link PipeMetadata} implementations.
        */
        config) {
        this.config = config;
        this.config = config;
    }
    ProtoPipes.fromProviders = function (providers) {
        var config = {};
        providers.forEach(function (b) { return config[b.name] = b; });
        return new ProtoPipes(config);
    };
    ProtoPipes.prototype.get = function (name) {
        var provider = this.config[name];
        if (lang_1.isBlank(provider))
            throw new exceptions_1.BaseException("Cannot find pipe '" + name + "'.");
        return provider;
    };
    return ProtoPipes;
})();
exports.ProtoPipes = ProtoPipes;
var Pipes = (function () {
    function Pipes(proto, injector) {
        this.proto = proto;
        this.injector = injector;
        /** @internal */
        this._config = {};
    }
    Pipes.prototype.get = function (name) {
        var cached = collection_1.StringMapWrapper.get(this._config, name);
        if (lang_1.isPresent(cached))
            return cached;
        var p = this.proto.get(name);
        var transform = this.injector.instantiateResolved(p);
        var res = new cd.SelectedPipe(transform, p.pure);
        if (p.pure) {
            collection_1.StringMapWrapper.set(this._config, name, res);
        }
        return res;
    };
    return Pipes;
})();
exports.Pipes = Pipes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLU15MEtZVTgxLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9waXBlcy9waXBlcy50cyJdLCJuYW1lcyI6WyJQcm90b1BpcGVzIiwiUHJvdG9QaXBlcy5jb25zdHJ1Y3RvciIsIlByb3RvUGlwZXMuZnJvbVByb3ZpZGVycyIsIlByb3RvUGlwZXMuZ2V0IiwiUGlwZXMiLCJQaXBlcy5jb25zdHJ1Y3RvciIsIlBpcGVzLmdldCJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQThDLDBCQUEwQixDQUFDLENBQUE7QUFDekUsMkJBQThDLGdDQUFnQyxDQUFDLENBQUE7QUFDL0UsMkJBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFVaEUsSUFBWSxFQUFFLFdBQU0sMENBQTBDLENBQUMsQ0FBQTtBQUUvRDtJQU9FQTtRQUNJQTs7VUFFRUE7UUFDS0EsTUFBcUNBO1FBQXJDQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUErQkE7UUFDOUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQVpNRCx3QkFBYUEsR0FBcEJBLFVBQXFCQSxTQUF5QkE7UUFDNUNFLElBQUlBLE1BQU1BLEdBQWtDQSxFQUFFQSxDQUFDQTtRQUMvQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsQ0FBQ0EsSUFBSUEsT0FBQUEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBbEJBLENBQWtCQSxDQUFDQSxDQUFDQTtRQUMzQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsVUFBVUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7SUFDaENBLENBQUNBO0lBVURGLHdCQUFHQSxHQUFIQSxVQUFJQSxJQUFZQTtRQUNkRyxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNqQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsY0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFBQ0EsTUFBTUEsSUFBSUEsMEJBQWFBLENBQUNBLHVCQUFxQkEsSUFBSUEsT0FBSUEsQ0FBQ0EsQ0FBQ0E7UUFDOUVBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQUNISCxpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFwQkQsSUFvQkM7QUFwQlksa0JBQVUsYUFvQnRCLENBQUE7QUFJRDtJQUlFSSxlQUFtQkEsS0FBaUJBLEVBQVNBLFFBQWtCQTtRQUE1Q0MsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBWUE7UUFBU0EsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBVUE7UUFIL0RBLGdCQUFnQkE7UUFDaEJBLFlBQU9BLEdBQXFDQSxFQUFFQSxDQUFDQTtJQUVtQkEsQ0FBQ0E7SUFFbkVELG1CQUFHQSxHQUFIQSxVQUFJQSxJQUFZQTtRQUNkRSxJQUFJQSxNQUFNQSxHQUFHQSw2QkFBZ0JBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3REQSxFQUFFQSxDQUFDQSxDQUFDQSxnQkFBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzdCQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JEQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVqREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWEEsNkJBQWdCQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7UUFFREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7SUFDYkEsQ0FBQ0E7SUFDSEYsWUFBQ0E7QUFBREEsQ0FBQ0EsQUFuQkQsSUFtQkM7QUFuQlksYUFBSyxRQW1CakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNCbGFuaywgaXNQcmVzZW50LCBDT05TVCwgVHlwZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbiwgV3JhcHBlZEV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7U3RyaW5nTWFwV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIE9wdGlvbmFsTWV0YWRhdGEsXG4gIFNraXBTZWxmTWV0YWRhdGEsXG4gIFByb3ZpZGVyLFxuICBJbmplY3RvcixcbiAgYmluZFxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1BpcGVQcm92aWRlcn0gZnJvbSAnLi9waXBlX3Byb3ZpZGVyJztcbmltcG9ydCAqIGFzIGNkIGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vcGlwZXMnO1xuXG5leHBvcnQgY2xhc3MgUHJvdG9QaXBlcyB7XG4gIHN0YXRpYyBmcm9tUHJvdmlkZXJzKHByb3ZpZGVyczogUGlwZVByb3ZpZGVyW10pOiBQcm90b1BpcGVzIHtcbiAgICB2YXIgY29uZmlnOiB7W2tleTogc3RyaW5nXTogUGlwZVByb3ZpZGVyfSA9IHt9O1xuICAgIHByb3ZpZGVycy5mb3JFYWNoKGIgPT4gY29uZmlnW2IubmFtZV0gPSBiKTtcbiAgICByZXR1cm4gbmV3IFByb3RvUGlwZXMoY29uZmlnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqXG4gICAgICAqIE1hcCBvZiB7QGxpbmsgUGlwZU1ldGFkYXRhfSBuYW1lcyB0byB7QGxpbmsgUGlwZU1ldGFkYXRhfSBpbXBsZW1lbnRhdGlvbnMuXG4gICAgICAqL1xuICAgICAgcHVibGljIGNvbmZpZzoge1trZXk6IHN0cmluZ106IFBpcGVQcm92aWRlcn0pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpOiBQaXBlUHJvdmlkZXIge1xuICAgIHZhciBwcm92aWRlciA9IHRoaXMuY29uZmlnW25hbWVdO1xuICAgIGlmIChpc0JsYW5rKHByb3ZpZGVyKSkgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYENhbm5vdCBmaW5kIHBpcGUgJyR7bmFtZX0nLmApO1xuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGNsYXNzIFBpcGVzIGltcGxlbWVudHMgY2QuUGlwZXMge1xuICAvKiogQGludGVybmFsICovXG4gIF9jb25maWc6IHtba2V5OiBzdHJpbmddOiBjZC5TZWxlY3RlZFBpcGV9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHVibGljIHByb3RvOiBQcm90b1BpcGVzLCBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIGdldChuYW1lOiBzdHJpbmcpOiBjZC5TZWxlY3RlZFBpcGUge1xuICAgIHZhciBjYWNoZWQgPSBTdHJpbmdNYXBXcmFwcGVyLmdldCh0aGlzLl9jb25maWcsIG5hbWUpO1xuICAgIGlmIChpc1ByZXNlbnQoY2FjaGVkKSkgcmV0dXJuIGNhY2hlZDtcbiAgICB2YXIgcCA9IHRoaXMucHJvdG8uZ2V0KG5hbWUpO1xuICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLmluamVjdG9yLmluc3RhbnRpYXRlUmVzb2x2ZWQocCk7XG4gICAgdmFyIHJlcyA9IG5ldyBjZC5TZWxlY3RlZFBpcGUodHJhbnNmb3JtLCBwLnB1cmUpO1xuXG4gICAgaWYgKHAucHVyZSkge1xuICAgICAgU3RyaW5nTWFwV3JhcHBlci5zZXQodGhpcy5fY29uZmlnLCBuYW1lLCByZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==
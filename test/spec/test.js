/*global describe, it */
'use strict';
(function () {
    // # Events
    describe('the app event mediator', function() {
        it('should have an app event mediator', function () {
            expect(FFApp.Events).to.exist;
        });

        it('should respond to triggered events', function() {
            FFApp.Events.on('foo', function(data) {
                expect(data.bar).to.be.ok;
            });

            FFApp.Events.trigger('foo', {
                bar: true
            });

            FFApp.Events.off('foo');
        });
    }); 

    // # Router
    describe('the app router', function() {
        before(function() {
            this.router = new FFApp.Routers.ApplicationRouter();
            Backbone.history.start();
        });

        after(function() {
            this.router.navigate('/');
        });

        it('should have a constructor for the app', function() {
            expect(FFApp.Routers.ApplicationRouter).to.exist;
        });

        it('should route requests', function() {
            var called;
            
            this.router.route('foo', 'foo');

            this.router.on("route:foo", function(page) {
                called = true;
            });

            this.router.navigate('/foo', {
                trigger: true
            });

            expect(called).to.exist;
        });
    });

    // # Views
    // ### HomeView Tests
    describe('the main app view', function () {
        it('should have a namespace', function () {
            expect(FFApp).to.exist;
        });

        it('should have an app view constructor', function() {
            expect(FFApp.Views.HomeView).to.exist;
        });

        it('should render a template', function() {
            var appView = new FFApp.Views.HomeView();
            
            expect(appView.render).to.be.a('function');

            appView.render();
            expect(appView.el.innerHTML).to.not.be.empty;
        });
    });

    // ### Models
    describe('the team model', function() {
        it('should have a Team constructor', function() {
            expect(FFApp.Models.TeamModel).to.exist;
        });
    });

    // ### Collections
    describe('the teams collection', function() {
        it('should have a teams collection constructor', function() {
            expect(FFApp.Collections.TeamsCollection);
        });

        it('should return an array of teams', function(done) {
            var collection = new FFApp.Collections.TeamsCollection();

            collection.fetch({
                success: function(collection) {
                    expect(collection).to.not.be.empty;
                    done();
                }
            });
            
        });
    });

    // ### Rendering the teams collection
    describe('the teams view', function() {
        it('should have a constructor', function() {
            expect(FFApp.Views.TeamsView).to.exist;
        });

        it('should fetch the teams collection when rendering the view', function(done) {
            var FakeCollection = Backbone.Collection.extend({
                    fetch: function() {
                        expect(true).to.be.ok;
                        done();
                    }
                }),
                teamsView = new FFApp.Views.TeamsView({
                    collection: new FakeCollection([{
                        name: 'foo'
                    }])
                });

            teamsView.itemTemplate = function () {
                return '<tr class="teamItem"></tr>';
            };
            
            teamsView.render();
        });

        it('should render team items', function() {
            var FakeCollection = Backbone.Collection.extend({
                    fetch: function() {}
                }),
                teamsView = new FFApp.Views.TeamsView({
                    collection: new FakeCollection()
                });

            teamsView.itemTemplate = function () {
                return '<tr class="teamItem"></tr>';
            };
            teamsView.render();

            teamsView.collection.add({})
            teamsView.collection.add({});

            expect(teamsView.el.innerHTML).to.not.be.empty;
            expect($(teamsView.el).find('.teamItem').length).to.equal(2);

            teamsView.render();
            expect($(teamsView.el).find('.teamItem').length).to.equal(2);
        });
    });

    describe('the team detail view', function() {
        it('should have a detail view constructor', function() {
            expect(FFApp.Views.TeamDetailView).to.exist;
        });

        it('should try to fetch model data', function(done) {
            var FakeModel = Backbone.Model.extend({
                    fetch: function(options) {
                        this.set('name', 'Holy Hand Grenades');
                        options.success(this);
                    }
                }),
                teamView = new FFApp.Views.TeamDetailView({
                model: new FakeModel({
                    team_key: '314.l.44054.t.4'
                })
            });

            teamView.model.on('change', function(model) {
                expect(model.get('name')).to.equal('Holy Hand Grenades');
                done();
            });

            teamView.render();
        });

        it('should render the retrieved data', function() {
            var FakeModel = Backbone.Model.extend({
                    fetch: function(options) {
                        options.success(this);
                    }
                }),
                teamView = new FFApp.Views.TeamDetailView({
                    model: new FakeModel()
                });

            // decouple test from actual template data
            teamView.template = function() {
                return 'fake template data';
            };

            teamView.render();

            expect(teamView.el.innerHTML).to.equal('fake template data');            
        });
    });
})();

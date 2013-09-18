/*global describe, it */
'use strict';
(function () {
    // # Events
    // http://backbonejs.org/#Events
    // * Every object in  backbone has events
    // * Backbone.Events has `on`, `off`, `trigger`, and a few others... 
    describe('the app event mediator', function() {
        // Extend events onto FFApp
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

            // Always clean up your tests
            FFApp.Events.off('foo');
        });
    }); 

    // # Router
    // Used to handle browser hash change events.
    // http://backbonejs.org/#Router
    describe('the app router', function() {
        before(function() {
            this.router = new FFApp.Routers.ApplicationRouter();
            
            // Start tracking changes to history
            Backbone.history.start();
        });

        after(function() {
            // Don't leave the tests at a weird url
            this.router.navigate('/');
        });

        it('should have a constructor for the app', function() {
            expect(FFApp.Routers.ApplicationRouter).to.exist;
        });

        it('should route requests', function() {
            var called;
            
            // Manually add a test route
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
    // http://backbonejs.org/#View
    describe('the main app view', function () {
        it('should have a namespace', function () {
            expect(FFApp).to.exist;
        });

        it('should have an app view constructor', function() {
            expect(FFApp.Views.HomeView).to.exist;
        });

        it('should render a template', function() {
            var appView = new FFApp.Views.HomeView();
            
            // A convention to have a render method
            expect(appView.render).to.be.a('function');

            appView.render();

            // If no el is present on a view, a tagName will create a tag
            expect(appView.el.innerHTML).to.not.be.empty;

            // A `$el` is just a jQuery wrapped `el`
            expect(appView.$el instanceof jQuery).to.be.ok;
        });
    });

    // ### Models
    // http://backbonejs.org/#Model
    // * Represents data for the app. 
    // * Has RESTful functions for fetching, saving, and deleting.
    //      * Uses the `urlRoot` option to set the base url.
    // * Also has available validation
    // * `Backbone.sync` under the covers can be overriden.
    describe('the team model', function() {
        it('should have a Team constructor', function() {
            expect(FFApp.Models.TeamModel).to.exist;
        });

        // Defaults
        it('should set up a default team name', function() {
            var model = new FFApp.Models.TeamModel();

            expect(model.get('name')).to.be.ok;
        });

        // Validation
        it('should be invalid without a name', function() {
            var model = new FFApp.Models.TeamModel();

            model.set('name', null);
            expect(model.isValid()).to.not.be.ok;
        });

        it('should generate a RESTful url', function() {
            var model = new FFApp.Models.TeamModel();
            expect(model.url()).to.equal('api/teams');
            
            // Change what property represents the id
            model.set('team_key', 1);
            expect(model.url()).to.equal('api/teams/1');
        });

        it('should parse the player data and convert it back to json', function(done) {
            var model = new FFApp.Models.TeamModel({
                team_key: '1'
            });

            model.fetch({
                success: function(model) {
                    expect(model.get('players')).to.be.an.instanceOf(FFApp.Collections.PlayersCollection);
                    expect(model.get('players').at(0)).to.be.an.instanceOf(FFApp.Models.PlayerModel);

                    expect(model.toJSON().players).to.be.an('array');
                    done();
                }
            })
        });
    });

    // ### Collections
    // A collection is a group of models.
    // http://backbonejs.org/#Collection
    // * A "typed" array by specifiying a model. 
    // * Has array like methods (`push`, `pop`, `shift`, etc).
    // * Has many underscore methods available
    // * Can `add` or `remove` items, or `reset` the whole collection.
    // * Also has a url for retrieving collections
    describe('the teams collection', function() {
        it('should have a teams collection constructor', function() {
            expect(FFApp.Collections.TeamsCollection);
        });

        it('should return an array of teams', function(done) {
            var collection = new FFApp.Collections.TeamsCollection();

            // Mockjax is returning data
            collection.fetch({
                success: function(collection) {
                    expect(collection).to.not.be.empty;

                    // Index the collection with `at`
                    expect(collection.at(0)).to.be.an.instanceOf(FFApp.Models.TeamModel);
                    done();
                }
            });
        });

        it('should be sortable', function() {
            var collection = new FFApp.Collections.TeamsCollection([{
                name: 'Tom Brady'
            }, {
                name: 'Drew Breeze'
            }, {
                name: 'Aaron Rogers'
            }]);

            // Don't have to call `sort`, it's done any time an item is added and there's a `comparator` defined.
            expect(collection.at(0).get('name')).to.equal('Aaron Rogers')
        });
    });

    // Test the teams view
    describe('the teams view', function() {
        it('should have a constructor', function() {
            expect(FFApp.Views.TeamsView).to.exist;
        });

        it('should render team items when new elements are added', function() {
            var FakeCollection = Backbone.Collection.extend({
                    // Fake the `fetch` method, no reason to test `Backbone.sync`
                    fetch: function() {
                        // The `add` event in the `TeamsView`, is triggering rendering.
                        teamsView.collection.add({})
                        teamsView.collection.add({});
                    }
                }),
                teamsView = new FFApp.Views.TeamsView({
                    collection: new FakeCollection()
                });

            // Fake the template again.
            teamsView.itemTemplate = function () {
                return '<tr class="teamItem"></tr>';
            };

            // Kick off the request.
            teamsView.render();

            expect(teamsView.el.innerHTML).to.not.be.empty;
            expect($(teamsView.el).find('.teamItem').length).to.equal(2);

            // Render again to make sure that the items are not re-added
            teamsView.render();
            expect($(teamsView.el).find('.teamItem').length).to.equal(2);
        });
    });
    
    // Test the team detail view
    describe('the team detail view', function() {
        it('should have a detail view constructor', function() {
            expect(FFApp.Views.TeamDetailView).to.exist;
        });

        it('should try to fetch model data', function() {
            var FakeModel = Backbone.Model.extend({
                    // Fake fetch again.
                    fetch: function(options) {
                        this.set('name', 'Holy Hand Grenades');
                        
                        // Trigger the success callback that the view passed in.
                        options.success(this);
                    }
                }),
                teamView = new FFApp.Views.TeamDetailView({
                    model: new FakeModel({
                        team_key: '314.l.44054.t.4'
                    })
                });

            teamView.template = function () {
                return 'fake template data';
            };

            // Change gets triggered when a model's data retrieved from the server is different.
            teamView.model.on('change', function(model) {
                expect(model.get('name')).to.equal('Holy Hand Grenades');
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

        it('should set the url of the model if one is passed in', function() {
            var FakeModel = Backbone.Model.extend({
                    urlRoot: 'foo/',
                    idAttribute: 'team_key',
                    fetch: function(options) {
                        expect(this.url()).to.equal('foo/1');
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

            teamView.render({
                params: ['1']
            });
        });

        it('should filter players', function() {
            var team = new FFApp.Models.TeamModel(),
                teamView = new FFApp.Views.TeamDetailView({
                    model: team
                });
            
            var reset = function() {
                team.set('players', new FFApp.Collections.PlayersCollection([{
                    name: {
                        'full': 'Tom Brady'
                    },
                    'display_position': 'QB'
                }, {
                    name: {
                        'full': 'Peyton Manning',
                    },
                    'display_position': 'QB'
                }, {
                    name: {
                        'full': 'Adrian Peterson'
                    },
                    'display_position': 'RB'
                }]));
            };
            
            reset(); 
            teamView.filter('tom');

            expect(teamView.model.get('players').length).to.equal(1);

            reset();
            teamView.filter('qb');
            expect(teamView.model.get('players').length).to.equal(2)
        });
    });
})();

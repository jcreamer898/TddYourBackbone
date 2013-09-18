/*global describe, it */
'use strict';
(function () {

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
            
            teamsView.render();
        });

        it('should render team items', function() {
            var FakeCollection = Backbone.Collection.extend({
                    fetch: function() {}
                }),
                teamsView = new FFApp.Views.TeamsView({
                    collection: new FakeCollection()
                });

            teamsView.render();

            teamsView.collection.add({
                name: 'foo',
                number_of_moves: 0,
                number_of_trades: 0,
                team_logos: [{
                    team_logo: {
                        url: 'foo.jpg'
                    }
                }]
            })
            teamsView.collection.add({
                name: 'bar',
                number_of_moves: 0,
                number_of_trades: 0,
                team_logos: [{
                    team_logo: {
                        url: 'bar.jpg'
                    }
                }]
            });

            expect(teamsView.el.innerHTML).to.not.be.empty;
            expect($(teamsView.el).find('.teamItem').length).to.equal(2);
        });
    });

    // # Events
    describe('the app event mediator', function() {
        it('should have an app event mediator', function () {
            expect(FFApp.Events).to.exist;
        });
    }); 

    // # Router
    // describe('the app router', function() {
    //     before(function() {
    //         this.router = new FFApp.Routers.ApplicationRouter();
    //         Backbone.history.start();
    //     });

    //     after(function() {
    //         this.router.navigate('/');
    //     });

    //     it('should have a constructor for the app', function() {
    //         expect(FFApp.Routers.ApplicationRouter).to.exist;
    //     });

    //     it('should route requests', function() {
    //         var called;
            
    //         this.router.route('foo', 'foo');

    //         this.router.on("route:foo", function(page) {
    //             called = true;
    //         });

    //         this.router.navigate('/foo', {
    //             trigger: true
    //         });

    //         expect(called).to.exist;
    //     });
    // });
})();

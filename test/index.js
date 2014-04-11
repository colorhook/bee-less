/**
less test
-------------

**/
var bee = require('bee');
var plugin = require('../lib/index');
plugin(bee);

describe('bee-less is an bee plugin', function(){
  

  it("mod is a function", function(){
    plugin.should.be.a('function');
  });

  it("bee has less task", function(){
    bee.task.getTask('less').should.be.a('function');
  });

  it("less can convert .less to .css", function(done){
    var Target = bee.Target;
    var target = new Target('default');
    target.addTask('less', {
      src: 'test/example.less',
      dest: 'test/example.css'
    });
    target.execute(function(e, data){
      console.log('target completed.');
      done(e);
    });
  });

});



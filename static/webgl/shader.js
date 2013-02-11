//<script>

function Shader(gl)
{
  var that = this;
  var progam_;
  var level_;
  var gl_ = gl;
  var position_;
  var normal_;
  var colour_;
  var params_ = {};
  var locations_ = {};

params_["colour"] = createVec4Parameter(1., 0.5, 0.2, 0.3);
params_["radius"] = createFloatParameter(1.);

  attachShader = function(program, source, type)
  {
    var shader = gl_.createShader(type);
    gl_.shaderSource(shader, source);
    gl_.compileShader(shader);

    if (!gl_.getShaderParameter(shader, gl_.COMPILE_STATUS))
      throw new Error(gl_.getShaderInfoLog(shader));

    gl_.attachShader(program, shader);
  }

  findLocation = function(name, isAttribute) {
    var item = locations_[name];
    if (item)
      return item;

    var loc = -1;
    if (isAttribute) {
      loc = gl_.getAttribLocation(program_, name);
      if (loc < 0) console.log(name);
    } else {
      loc = gl_.getUniformLocation(program_, name);
      if (loc < 0) console.log(name);
    }

    locations_[name] = loc;
  }

  this.bind = function() {
    if (level_ >= 2 && program_) {
      gl_.useProgram(program_);
      return true;
    }

    return false;
  }

  this.getParameters = function() {
    return params_;
  }

  this.init = function(vertex, fragment) {
    program_ = gl_.createProgram();
    level_ = 0;
    $.get(vertex, readVertex);
    $.get(fragment, readFragment);
  }

  readVertex = function(file) {
    attachShader(program_, file, gl.VERTEX_SHADER);
    ++level_;
    link();
  }

  readFragment = function(file) {
    attachShader(program_, file, gl.FRAGMENT_SHADER);
    ++level_;
    link();
  }
/*
  readParams = function(file) {
    ++level_;
    link();
  }
  */
  link = function() {
    if (level_ < 2)
      return;

    gl_.linkProgram(program_);

    if (!gl_.getProgramParameter(program_, gl_.LINK_STATUS)) {
      throw new Error(gl_.getProgtamInfoLog(program_));
    }

    gl_.useProgram(program_);
    position_ = gl_.getAttribLocation(program_, "attrPosition");
    normal_   = gl_.getAttribLocation(program_, "attrNormal");
    colour_   = gl_.getAttribLocation(program_, "attrColour");

    if (position_ >= 0)
    gl_.enableVertexAttribArray(position_);
    if (normal_ >= 0)
    gl_.enableVertexAttribArray(normal_);
    if (colour_ >= 0)
    gl_.enableVertexAttribArray(colour_);
  }

////////////////////////////////////////////////////////////////

  this.setUniform = function(name, value) {
    gl_.uniform1f(findLocation(name), value);
  }

////////////////////////////////////////////////////////////////

  this.setUniformVector = function(name, value) {
    switch(value.length) {
      case 3:
        gl_.uniform3fv(findLocation(name), value);
        break;
      case 4:
        gl_.uniform4fv(findLocation(name), value);
        break;
      default:
        break;
    }
  }






////////////////////////////////////////////////////////////////

  this.setM3Uniform = function(gl, name, value)
  {
    var u = gl.getUniformLocation(program_, name);
    gl.uniformMatrix3fv(u, false, value);
  }

////////////////////////////////////////////////////////////////

  this.setM4Uniform = function(gl, name, value)
  {
    var u = gl.getUniformLocation(program_, name);
    gl.uniformMatrix4fv(u, false, value);
  }

////////////////////////////////////////////////////////////////

  this.bindPositions = function(length, stride, offset)
  {
    if (position_ >= 0)
    gl.vertexAttribPointer(position_, length, gl.FLOAT, false, stride, offset);
  }
  this.bindNormals = function(length, stride, offset)
  {
    if (normal_ >= 0)
    gl.vertexAttribPointer(normal_, length, gl.FLOAT, false, stride, offset);
  }
  this.bindColours = function(length, stride, offset)
  {
    if (colour_ >= 0)
    gl.vertexAttribPointer(colour_, length, gl.FLOAT, false, stride, offset);
  }
}

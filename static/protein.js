//<script>

////////////////////////////////////////////////////////////////

function AminoAcid()
{
  this.addAtom = function(x, y, z, root, sphere, colour) {
    if (x > 1e10) {
      console.log(x);
      return;
    }
    var trf = root.addChild();
    trf.translate([x, y, z]);
    trf.addShape(sphere);
    trf.setParameter("colour", createVectorParameter(colour));
  }

  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
      return this.O;
    default:
      return this.C;
    }
  }

  this.getSize = function() {
    return 0;
  }

  this.prepareTransform = function(root) {
    var trf = root.addChild();
    //trf.setLabel(...);
    return trf;
  }
}

AminoAcid.prototype.C  = [1., 1., 1., 1.];
AminoAcid.prototype.O  = [1., 0., 0., 1.];
AminoAcid.prototype.N  = [0., 0., 1., 1.];
AminoAcid.prototype.S  = [1., 1., 0., 1.];
AminoAcid.prototype.Se = [1., 0.5, 0., 1.];

////////////////////////////////////////////////////////////////

function Alanine() {}
Alanine.prototype = new AminoAcid;
Alanine.prototype.getSize = function() { return 5; }
Alanine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4]]; }

function Arginine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
    case 7:
    case 9:
    case 10:
      return this.N;
    case 3:
      return this.O;
    default:
      return this.C;
    }
  }
}
Arginine.prototype = new AminoAcid;
Arginine.prototype.getSize = function() { return 11; }
Arginine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [6,7], [7,8], [8,9], [8,10]]; }

function Asparagine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
    case 7:
      return this.N;
    case 3:
    case 6:
      return this.O;
    default:
      return this.C;
    }
  }
}
Asparagine.prototype = new AminoAcid;
Asparagine.prototype.getSize = function() { return 8; }
Asparagine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7]]; }

function AsparticAcid() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
    case 6:
    case 7:
      return this.O;
    default:
      return this.C;
    }
  }
}
AsparticAcid.prototype = new AminoAcid;
AsparticAcid.prototype.getSize = function() { return 8; }
AsparticAcid.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7]]; }

function Cysteine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
      return this.O;
    case 5:
      return this.S
    default:
      return this.C;
    }
  }
}
Cysteine.prototype = new AminoAcid;
Cysteine.prototype.getSize = function() { return 6; }
Cysteine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5]]; }

function GlutamicAcid() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
    case 7:
    case 8:
      return this.O;
    default:
      return this.C;
    }
  }
}
GlutamicAcid.prototype = new AminoAcid;
GlutamicAcid.prototype.getSize = function() { return 9; }
GlutamicAcid.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [6,7], [6,8]]; }

function Glutamine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
    case 8:
      return this.N;
    case 3:
    case 7:
      return this.O;
    default:
      return this.C;
    }
  }
}
Glutamine.prototype = new AminoAcid;
Glutamine.prototype.getSize = function() { return 9; }
Glutamine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [6,7], [6,8]]; }

function Glycine() {}
Glycine.prototype = new AminoAcid;
Glycine.prototype.getSize = function() { return 4; }
Glycine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3]]; }

function Histidine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
    case 6:
    case 9:
      return this.N;
    case 3:
      return this.O;
    default:
      return this.C;
    }
  }
}
Histidine.prototype = new AminoAcid;
Histidine.prototype.getSize = function() { return 10; }
Histidine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7], [6,8], [7,9], [8,9]]; }

function Isoleucine() {}
Isoleucine.prototype = new AminoAcid;
Isoleucine.prototype.getSize = function() { return 8; }
Isoleucine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [4,6], [5,7]]; }

function Leucine() {}
Leucine.prototype = new AminoAcid;
Leucine.prototype.getSize = function() { return 8; }
Leucine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7]]; }

function Lysine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
    case 8:
      return this.N;
    case 3:
      return this.O;
    default:
      return this.C;
    }
  }
}
Lysine.prototype = new AminoAcid;
Lysine.prototype.getSize = function() { return 9; }
Lysine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [6,7], [7,8]]; }

function Methionine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
      return this.O;
    case 6:
      return this.S;
    default:
      return this.C;
    }
  }
}
Methionine.prototype = new AminoAcid;
Methionine.prototype.getSize = function() { return 8; }
Methionine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [6,7]]; }

function Phenylalanine() {}
Phenylalanine.prototype = new AminoAcid;
Phenylalanine.prototype.getSize = function() { return 11; }
Phenylalanine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7], [6,8], [7,9], [8,10], [9,10]]; }

function Proline() {}
Proline.prototype = new AminoAcid;
Proline.prototype.getSize = function() { return 7; }
Proline.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,0]]; }

function Pyrrolysine() {}
Pyrrolysine.prototype = new AminoAcid;
Pyrrolysine.prototype.getSize = function() { return 17; }
//Pyrrolysine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [9,11], ...]; }

function Selenocysteine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
      return this.O;
    case 4:
      return this.Se;
    default:
      return this.C;
    }
  }
}
Selenocysteine.prototype = new AminoAcid;
Selenocysteine.prototype.getSize = function() { return 6; }
Selenocysteine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4]]; }

function Serine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
    case 5:
      return this.O;
    default:
      return this.C;
    }
  }
}
Serine.prototype = new AminoAcid;
Serine.prototype.getSize = function() { return 6; }
Serine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5]]; }

function Threonine() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
      return this.N;
    case 3:
    case 5:
      return this.O;
    default:
      return this.C;
    }
  }
}
Threonine.prototype = new AminoAcid;
Threonine.prototype.getSize = function() { return 7; }
Threonine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [4,6]]; }

function Tryptophan() {
  this.getAtomInfo = function(index) {
    switch (index) {
    case 0:
    case 8:
      return this.N;
    case 3:
      return this.O;
    default:
      return this.C;
    }
  }
}
Tryptophan.prototype = new AminoAcid;
Tryptophan.prototype.getSize = function() { return 14; }
Tryptophan.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7], [6,8], [7,9], [8,9], [7,10], [9,11], [10,12], [11,13], [12,13]]; }

function Tyrosine() {}
Tyrosine.prototype = new AminoAcid;
Tyrosine.prototype.getSize = function() { return 12; }
Tyrosine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [5,6], [5,7], [6,8], [7,9], [8,10], [9,10], [10,11]]; }

function Valine() {}
Valine.prototype = new AminoAcid;
Valine.prototype.getSize = function() { return 7; }
Valine.prototype.getBonds = function() { return [[0,1], [1,2], [2,3], [1,4], [4,5], [4,6]]; }

////////////////////////////////////////////////////////////////

function Chain()
{
  var that = this;

  var aminos_ = [];

  var mapAminos_ = {
    'A': new Alanine(),
    'B': new AsparticAcid(),
    'C': new Cysteine(),
    'D': new AsparticAcid(),
    'E': new GlutamicAcid(),
    'F': new Phenylalanine(),
    'G': new Glycine(),
    'H': new Histidine(),
    'I': new Isoleucine(),
    'J': new Isoleucine(),
    'K': new Lysine(),
    'L': new Leucine(),
    'M': new Methionine(),
    'N': new Asparagine(),
    //'O': new Pyrrolysine(),
    'P': new Proline(),
    'Q': new Glutamine(),
    'R': new Arginine(),
    'S': new Serine(),
    'T': new Threonine(),
    'U': new Selenocysteine(),
    'V': new Valine(),
    'W': new Tryptophan(),
    //'X': new AminoAcid(),
    'Y': new Tyrosine(),
    'Z': new GlutamicAcid()
  };

  this.addAminoAcid1 = function(code) {
    var amino = mapAminos_[code];
    if (!amino)
      amino = new AminoAcid();

    aminos_.push(amino);
    return amino;
  }

  this.print = function() {
  }
}

////////////////////////////////////////////////////////////////

function Protein()
{
  var root_;

  this.getBarycenter = function() {
    return root_.getBoundingBox().getCenter();
  }

  this.parse = function(data, root, sphere) {
    root_ = root.addChild();

    // Make a buffer on the data
    var buffer = new jDataView(data);
    var offset = 0;

    // Version: unsigned short
    var version = buffer.getUint16(offset, true);
    offset += 2;

    console.log("Version " + version);

    // # Sequences: ui8
    var totSequences = buffer.getUint8(offset);
    offset += 1;
    console.log(totSequences + " sequences");

    for (var seq = 0; seq < totSequences; ++seq) {
      // Char: ID
      var sid = buffer.getChar(offset);
      offset += 1;
      console.log("Sequence " + sid);

      // Type of sequence: Protein=0, DNA=1, RNA=2
      var stype = buffer.getUint8(offset);
      offset += 1;
      console.log("Type " + stype);

      offset = this.__parseProtein(sid, buffer, offset, root_, sphere);
      break;
    }
  }

  this.__parseProtein = function(sid, buffer, offset, root, sphere) {
    chain = new Chain();
    chains_[sid] = chain;

    // Total residues
    var totRes = buffer.getUint16(offset, true);
    offset += 2;
      
    var sequence = buffer.getString(totRes, offset);
    offset += totRes;
    console.log(sequence);

    // Total atoms
    var totAtoms = buffer.getInt32(offset, true);
    offset += 4;
    console.log(totAtoms + " atoms");

    var sum = 0;
    for (var res = 0; res < totRes; ++res) {
      var amino = chain.addAminoAcid1(sequence[res]);
      var trf = amino.prepareTransform(root);
//      console.log(amino.getSize());
      for (var atom = 0; atom < amino.getSize(); ++atom) {
        var x = buffer.getFloat32(offset, true);
        offset += 4;
        var y = buffer.getFloat32(offset, true);
        offset += 4;
        var z = buffer.getFloat32(offset, true);
        offset += 4;
        amino.addAtom(x, y, z, trf, sphere, amino.getAtomInfo(atom));
        ++sum;
      }
    }
    console.log(sum);
    return offset;
  }

  this.print = function() {
    //console.log(id_);
    for (c in chains_) {
      chains_[c].print();
    }
  }

  this.setID = function(id) {
    id_ = id;
  }

  var that = this;
  var bbox_ = new BBox();
  var chains_ = {};
  var id_;


////////////////////////////////////////////////////////////////

}

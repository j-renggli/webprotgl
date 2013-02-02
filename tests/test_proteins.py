
import StringIO

from database.pdb_parser import PDBParser
from database.protein import Protein
from database.source import Source

class ProteinTests:
  def __init__(self):
    self.__rcsb = Source(1, "rcsb", "text/pdb", "http://www.rcsb.org/pdb/download/downloadFile.do?fileFormat=pdb&compression=NO&structureId={0}", "RCSB Protein Data Bank")
    self.__protein = Protein()

  def test_parsers(self):
    pdb = PDBParser()
    pdb.parse(StringIO.StringIO("""HEADER    STRUCTURAL PROTEIN                      09-MAR-10   3M3N
TITLE     STRUCTURE OF A LONGITUDINAL ACTIN DIMER ASSEMBLED BY TANDEM W DOMAINS
COMPND    MOL_ID: 1;
COMPND   2 MOLECULE: ACTIN, ALPHA SKELETAL MUSCLE;
COMPND   3 CHAIN: A, B;
COMPND   4 SYNONYM: ALPHA-ACTIN-1;
COMPND   5 MOL_ID: 2;
COMPND   6 MOLECULE: NEURAL WISKOTT-ALDRICH SYNDROME PROTEIN;
COMPND   7 CHAIN: W;
COMPND   8 FRAGMENT: ENGINEERED TANDEM W DOMAIN CONSTRUCT 3W;
COMPND   9 SYNONYM: N-WASP;
COMPND  10 ENGINEERED: YES
SOURCE    MOL_ID: 1;
SOURCE   2 ORGANISM_SCIENTIFIC: ORYCTOLAGUS CUNICULUS;
SOURCE   3 ORGANISM_COMMON: EUROPEAN RABBIT,JAPANESE WHITE RABBIT,DOMESTIC
SOURCE   4 RABBIT,RABBITS;
SOURCE   5 ORGANISM_TAXID: 9986;
SOURCE   6 MOL_ID: 2;
SOURCE   7 ORGANISM_SCIENTIFIC: MUS MUSCULUS;
SOURCE   8 ORGANISM_COMMON: MOUSE;
SOURCE   9 ORGANISM_TAXID: 10090;
SOURCE  10 GENE: WASL;
SOURCE  11 EXPRESSION_SYSTEM: ESCHERICHIA COLI;
SOURCE  12 EXPRESSION_SYSTEM_TAXID: 562;
SOURCE  13 EXPRESSION_SYSTEM_STRAIN: BL21(DE3);
SOURCE  14 EXPRESSION_SYSTEM_VECTOR_TYPE: PLASMID;
SOURCE  15 EXPRESSION_SYSTEM_VECTOR: PTYB11
KEYWDS    ACTIN DIMER, ATP-BINDING, ACTIN CYTOSKELETON, METHYLATION, MUSCLE
KEYWDS   2 PROTEIN, ACTIN-BINDING, MOTOR PROTEIN, STRUCTURAL PROTEIN
EXPDTA    X-RAY DIFFRACTION
AUTHOR    G.REBOWSKI,S.NAMGOONG,R.DOMINGUEZ
REVDAT   3   20-OCT-10 3M3N    1       JRNL
REVDAT   2   15-SEP-10 3M3N    1       JRNL
REVDAT   1   28-JUL-10 3M3N    0
JRNL        AUTH   G.REBOWSKI,S.NAMGOONG,M.BOCZKOWSKA,P.C.LEAVIS,J.NAVAZA,
JRNL        AUTH 2 R.DOMINGUEZ
JRNL        TITL   STRUCTURE OF A LONGITUDINAL ACTIN DIMER ASSEMBLED BY TANDEM
JRNL        TITL 2 W DOMAINS: IMPLICATIONS FOR ACTIN FILAMENT NUCLEATION.
JRNL        REF    J.MOL.BIOL.                   V. 403    11 2010
JRNL        REFN                   ISSN 0022-2836
JRNL        PMID   20804767
JRNL        DOI    10.1016/J.JMB.2010.08.040
SEQRES   1 A  375  ASP GLU ASP GLU THR THR ALA LEU VAL CYS ASP ASN GLY
SEQRES   2 A  375  SER GLY LEU VAL LYS ALA GLY PHE ALA GLY ASP ASP ALA
SEQRES   3 A  375  PRO ARG ALA VAL PHE PRO SER ILE VAL GLY ARG PRO ARG
SEQRES   4 A  375  HIS GLN GLY VAL MET VAL GLY MET GLY GLN LYS ASP SER
SEQRES   5 A  375  TYR VAL GLY ASP GLU ALA GLN SER LYS ARG GLY ILE LEU
SEQRES   6 A  375  THR LEU LYS TYR PRO ILE GLU HIC GLY ILE ILE THR ASN
SEQRES   7 A  375  TRP ASP ASP MET GLU LYS ILE TRP HIS HIS THR PHE TYR
SEQRES   8 A  375  ASN GLU LEU ARG VAL ALA PRO GLU GLU HIS PRO THR LEU
SEQRES   9 A  375  LEU THR GLU ALA PRO LEU ASN PRO LYS ALA ASN ARG GLU
SEQRES  10 A  375  LYS MET THR GLN ILE MET PHE GLU THR PHE ASN VAL PRO
SEQRES  11 A  375  ALA MET TYR VAL ALA ILE GLN ALA VAL LEU SER LEU TYR
SEQRES  12 A  375  ALA SER GLY ARG THR THR GLY ILE VAL LEU ASP SER GLY
SEQRES  13 A  375  ASP GLY VAL THR HIS ASN VAL PRO ILE TYR GLU GLY TYR
SEQRES  14 A  375  ALA LEU PRO HIS ALA ILE MET ARG LEU ASP LEU ALA GLY
SEQRES  15 A  375  ARG ASP LEU THR ASP TYR LEU MET LYS ILE LEU THR GLU
SEQRES  16 A  375  ARG GLY TYR SER PHE VAL THR THR ALA GLU ARG GLU ILE
SEQRES  17 A  375  VAL ARG ASP ILE LYS GLU LYS LEU CYS TYR VAL ALA LEU
SEQRES  18 A  375  ASP PHE GLU ASN GLU MET ALA THR ALA ALA SER SER SER
SEQRES  19 A  375  SER LEU GLU LYS SER TYR GLU LEU PRO ASP GLY GLN VAL
SEQRES  20 A  375  ILE THR ILE GLY ASN GLU ARG PHE ARG CYS PRO GLU THR
SEQRES  21 A  375  LEU PHE GLN PRO SER PHE ILE GLY MET GLU SER ALA GLY
SEQRES  22 A  375  ILE HIS GLU THR THR TYR ASN SER ILE MET LYS CYS ASP
SEQRES  23 A  375  ILE ASP ILE ARG LYS ASP LEU TYR ALA ASN ASN VAL MET
SEQRES  24 A  375  SER GLY GLY THR THR MET TYR PRO GLY ILE ALA ASP ARG
SEQRES  25 A  375  MET GLN LYS GLU ILE THR ALA LEU ALA PRO SER THR MET
SEQRES  26 A  375  LYS ILE LYS ILE ILE ALA PRO PRO GLU ARG LYS TYR SER
SEQRES  27 A  375  VAL TRP ILE GLY GLY SER ILE LEU ALA SER LEU SER THR
SEQRES  28 A  375  PHE GLN GLN MET TRP ILE THR LYS GLN GLU TYR ASP GLU
SEQRES  29 A  375  ALA GLY PRO SER ILE VAL HIS ARG LYS CYS PHE
SEQRES   1 B  375  ASP GLU ASP GLU THR THR ALA LEU VAL CYS ASP ASN GLY
SEQRES   2 B  375  SER GLY LEU VAL LYS ALA GLY PHE ALA GLY ASP ASP ALA
SEQRES   3 B  375  PRO ARG ALA VAL PHE PRO SER ILE VAL GLY ARG PRO ARG
SEQRES   4 B  375  HIS GLN GLY VAL MET VAL GLY MET GLY GLN LYS ASP SER
SEQRES   5 B  375  TYR VAL GLY ASP GLU ALA GLN SER LYS ARG GLY ILE LEU
SEQRES   6 B  375  THR LEU LYS TYR PRO ILE GLU HIC GLY ILE ILE THR ASN
SEQRES   7 B  375  TRP ASP ASP MET GLU LYS ILE TRP HIS HIS THR PHE TYR
SEQRES   8 B  375  ASN GLU LEU ARG VAL ALA PRO GLU GLU HIS PRO THR LEU
SEQRES   9 B  375  LEU THR GLU ALA PRO LEU ASN PRO LYS ALA ASN ARG GLU
SEQRES  10 B  375  LYS MET THR GLN ILE MET PHE GLU THR PHE ASN VAL PRO
SEQRES  11 B  375  ALA MET TYR VAL ALA ILE GLN ALA VAL LEU SER LEU TYR
SEQRES  12 B  375  ALA SER GLY ARG THR THR GLY ILE VAL LEU ASP SER GLY
SEQRES  13 B  375  ASP GLY VAL THR HIS ASN VAL PRO ILE TYR GLU GLY TYR
SEQRES  14 B  375  ALA LEU PRO HIS ALA ILE MET ARG LEU ASP LEU ALA GLY
SEQRES  15 B  375  ARG ASP LEU THR ASP TYR LEU MET LYS ILE LEU THR GLU
SEQRES  16 B  375  ARG GLY TYR SER PHE VAL THR THR ALA GLU ARG GLU ILE
SEQRES  17 B  375  VAL ARG ASP ILE LYS GLU LYS LEU CYS TYR VAL ALA LEU
SEQRES  18 B  375  ASP PHE GLU ASN GLU MET ALA THR ALA ALA SER SER SER
SEQRES  19 B  375  SER LEU GLU LYS SER TYR GLU LEU PRO ASP GLY GLN VAL
SEQRES  20 B  375  ILE THR ILE GLY ASN GLU ARG PHE ARG CYS PRO GLU THR
SEQRES  21 B  375  LEU PHE GLN PRO SER PHE ILE GLY MET GLU SER ALA GLY
SEQRES  22 B  375  ILE HIS GLU THR THR TYR ASN SER ILE MET LYS CYS ASP
SEQRES  23 B  375  ILE ASP ILE ARG LYS ASP LEU TYR ALA ASN ASN VAL MET
SEQRES  24 B  375  SER GLY GLY THR THR MET TYR PRO GLY ILE ALA ASP ARG
SEQRES  25 B  375  MET GLN LYS GLU ILE THR ALA LEU ALA PRO SER THR MET
SEQRES  26 B  375  LYS ILE LYS ILE ILE ALA PRO PRO GLU ARG LYS TYR SER
SEQRES  27 B  375  VAL TRP ILE GLY GLY SER ILE LEU ALA SER LEU SER THR
SEQRES  28 B  375  PHE GLN GLN MET TRP ILE THR LYS GLN GLU TYR ASP GLU
SEQRES  29 B  375  ALA GLY PRO SER ILE VAL HIS ARG LYS CYS PHE
SEQRES   1 W  101  ALA CYS SER GLY ASN LYS ALA ALA LEU LEU ASP GLN ILE
SEQRES   2 W  101  ARG GLU GLY ALA GLN LEU LYS LYS VAL GLU GLN ASN SER
SEQRES   3 W  101  ARG PRO VAL SER ALA SER GLY ARG ASP ALA LEU LEU ASP
SEQRES   4 W  101  GLN ILE ARG GLN GLY ILE GLN LEU LYS LYS VAL GLU GLN
SEQRES   5 W  101  ASN SER ARG PRO VAL SER ALA SER GLY ARG ASP ALA LEU
SEQRES   6 W  101  LEU ASP GLN ILE ARG GLN GLY ILE GLN LEU LYS LYS THR
SEQRES   7 W  101  GLU THR GLN GLU LYS ASN PRO LEU PRO SER LYS GLU THR
SEQRES   8 W  101  ILE GLU GLN GLU LYS GLN ALA GLY GLU SER

"""))

  def test_prepare(self):
    self.__protein.set_source(self.__rcsb)
    self.__protein.fetch("3M3N")

test = ProteinTests()
test.test_parsers()
#test.test_prepare()

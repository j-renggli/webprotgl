
from pdb_parser import PDBParser

class Source:
  def __init__(self, id = -1, name = "", mimetype="", url="", description=""):
    self.__id = id
    self.__name = name
    if mimetype == PDBParser.MIMETYPE:
      self.__parser = PDBParser()
    else:
      self.__parser = None

    self.__url = url
    self.__desc = description

  def get_id(self):
    return self.__id

  def get_name(self):
    return self.__name

  def get_parser(self):
    return self.__parser

  def get_url(self, protein_name):
    if self.__url == "":
      raise Exception("Source URL not set")

    return self.__url.format(protein_name)

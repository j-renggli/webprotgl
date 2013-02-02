
from pdb_parser import PDBParser
from source import Source
from urllib import *

class Protein:
  def __init__(self, id = -1, name = "", title = "", source = None, date = -1):
    self.__id = id
    self.__name = name
    self.__title = title
    self.__source = source
    self.__date = date

  def fetch(self, name):
    if self.__source == None:
      raise Exception("No source set")

    parser = self.__source.get_parser()
    if parser == None:
      raise Exception("No parser set")

    url = self.__source.get_url(name)
    (self.__title, self.__date, structure, models) = parser.parse(urlopen(url))
    self.__name = name

  def get_name(self):
    return self.__name

  def set_source(self, source):
    self.__source = source

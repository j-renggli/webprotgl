
import re
from datetime import datetime

class PDBParser:
  MIMETYPE = "text/pdb"

  def __init__(self):
    self.__re_header = re.compile("\\s{4}((?:\\w|\\s){40})(\\d\\d)-(\\w{3})-(\\d\\d)\\s{3}(\\w{4})\\s*")
    self.__re_sequence = re.compile("\\s(?:\\d|\\s){3}\\s(\\w)\\s((?:\\d|\\s){4})\\s\\s((?:\\w{3}\\s?){1,13})")

  def parse(self, data):
    title = ""
    date = None
    sequences = dict()
    for line in data.readlines():
      command = line[0:6].upper()
      if command == "HEADER":
        (title, date) = self.__parse_header(line[6:])
      elif command == "SEQRES":
        self.__parse_sequence(line[6:], sequences)
    data.close()
#    (self.__title, self.__date, structure, models) = parser.parse(urlopen(url))
    print(title)
    print(date)
    print(sequences)
    return (title, date)

  def __parse_header(self, line):
    match = self.__re_header.match(line)
    if match:
      day = int(match.group(2))
      month = match.group(3).upper()
      year = 2000 + int(match.group(4))
      if year > 2050:
        year -= 100
      for (n, m) in enumerate(["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], 1):
        if m == month:
          mon = n

      return (match.group(1), datetime(year, mon, day))

  def __parse_sequence(self, line, sequences):
    match = self.__re_sequence.match(line)
    if match:
      tag = match.group(1)
      if sequences.has_key(tag):
        array = sequences[tag]
      else:
        array = []
      for res in match.group(3).split(" "):
        if len(res) >= 3:
          array.append(res[0:3])
      sequences[tag] = array


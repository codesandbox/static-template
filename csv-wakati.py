# -*- coding: utf-8 -*-
import MeCab
wakati=MeCab.Tagger("-Owakati")
sentence_wakati = wakati.parse("私は猫が好きです").split()
print(sentence_wakati)

# -*- coding: utf-8 -*-
import MeCab
wakati = MeCab.Tagger("-Owakati")
text = "pythonが大好きです"
wakati.parse(text).split()#parse=解析する

tagger = MeCab.Tagger()
print(tagger.parse(text))
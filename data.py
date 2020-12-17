# -*- coding: utf-8 -*-
import json
f = open(r'C:\Users\yuu\Downloads\sample.json','r',encoding="utf-8_sig")
data = json.load(f)
print(data['text'])

import MeCab
wakati = MeCab.Tagger("-Owakati")
wakati.parse(data['text']).split()

tagger = MeCab.Tagger()
print(tagger.parse(data['text']))


# -*- coding: utf-8 -*-
import numpy as np
 
#わかち書き関数
def wakachi(text):
    from janome.tokenizer import Tokenizer
    t = Tokenizer()
    tokens = t.tokenize(text)
    docs=[]
    for token in tokens:
        docs.append(token.surface)
    return docs
 
#文書ベクトル化関数
def vecs_array(documents):
    from sklearn.feature_extraction.text import TfidfVectorizer
 
    docs = np.array(documents)
    vectorizer = TfidfVectorizer(analyzer=wakachi,binary=True,use_idf=False)
    vecs = vectorizer.fit_transform(docs)
    return vecs.toarray()
 
if __name__ == '__main__':
    from sklearn.metrics.pairwise import cosine_similarity
    docs = [
    "私は犬が好きです。",
    "私は犬が嫌いです。",
    "私は犬のことがとても好きです。"]
 
    #類似度行列作成
    cs_array = np.round(cosine_similarity(vecs_array(docs), vecs_array(docs)),3)
    print(cs_array)

import pandas as pd
import numpy as np
from pickle import dump, load
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.pipeline import Pipeline
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.preprocessing import OneHotEncoder, LabelEncoder

class Drop_Label(BaseEstimator, TransformerMixin):
    def __init__(self):
        self.label_encoder_consent_mode = LabelEncoder()
        self.label_encoder_consent_type = LabelEncoder()
        self.label_encoder_fetch_type = LabelEncoder()
        self.label_encoder_FI_type = LabelEncoder()
        
    def fit(self, X, y = None):
        self.label_encoder_consent_mode.fit(X['CONSENT_MODE'])
        self.label_encoder_consent_type.fit(X['CONSENT_TYPE'])
        self.label_encoder_fetch_type.fit(X['FETCH_TYPE'])
        self.label_encoder_FI_type.fit(X['FI_TYPE'])
        return self
        
    def transform(self, X, y = None):
        X = X.drop(['DATA_RANGE_FROM','DATA_RANGE_TO'], axis = 1)
        X['CONSENT_MODE'] = self.label_encoder_consent_mode.transform(X['CONSENT_MODE'])
        X['CONSENT_TYPE'] = self.label_encoder_consent_type.transform(X['CONSENT_TYPE'])
        X['FETCH_TYPE'] = self.label_encoder_fetch_type.transform(X['FETCH_TYPE'])
        X['FI_TYPE'] = self.label_encoder_FI_type.transform(X['FI_TYPE'])
        X['DIFFDAYS'] = X['DIFFDAYS'].map(lambda x: int(x.split(' ')[0]))
        return X
    

class one_hot(BaseEstimator, TransformerMixin):
    def __init__(self):
        self.onehot_encoder_consent_mode = OneHotEncoder(handle_unknown='ignore',sparse = False)
        self.onehot_encoder_consent_type = OneHotEncoder(handle_unknown='ignore',sparse = False)
        self.onehot_encoder_fetch_type = OneHotEncoder(handle_unknown='ignore',sparse = False)
        self.onehot_encoder_FI_type = OneHotEncoder(handle_unknown='ignore',sparse = False)
        
    def fit(self, X, y = None):
        self.onehot_encoder_consent_mode.fit(X[['CONSENT_MODE']])
        self.onehot_encoder_consent_type.fit(X[['CONSENT_TYPE']])
        self.onehot_encoder_fetch_type.fit(X[['FETCH_TYPE']])
        self.onehot_encoder_FI_type.fit(X[['FI_TYPE']])
        return self
        
    def transform(self, X, y = None):
        enc_df = pd.DataFrame(self.onehot_encoder_consent_mode.transform(X[['CONSENT_MODE']]))
        col_names = []
        for x in enc_df.columns:
            col_names.append('CONSENT_MODE' +'_'+str(x))
        enc_df.columns = col_names
            
        X = X.join(enc_df)
        X = X.drop('CONSENT_MODE', axis = 1)
        
        enc_df = pd.DataFrame(self.onehot_encoder_consent_type.transform(X[['CONSENT_TYPE']]))
        col_names = []
        for x in enc_df.columns:
            col_names.append('CONSENT_TYPE' +'_'+str(x))
        enc_df.columns = col_names
            
        X = X.join(enc_df)
        X = X.drop('CONSENT_TYPE', axis = 1)
        
        enc_df = pd.DataFrame(self.onehot_encoder_fetch_type.transform(X[['FETCH_TYPE']]))
        col_names = []
        for x in enc_df.columns:
            col_names.append('FETCH_TYPE' +'_'+str(x))
        enc_df.columns = col_names
            
        X = X.join(enc_df)
        X = X.drop('FETCH_TYPE', axis = 1)
        
        enc_df = pd.DataFrame(self.onehot_encoder_FI_type.transform(X[['FI_TYPE']]))
        col_names = []
        for x in enc_df.columns:
            col_names.append('FI_TYPE' +'_'+str(x))
        enc_df.columns = col_names
            
        X = X.join(enc_df)
        X = X.drop('FI_TYPE', axis = 1)
        
        return X
import numpy as np
import pandas as pd
import pickle
from tensorflow import keras
import tensorflow as tf
from  severe_preprocess import *
from pickle import load,dump
from datetime import datetime



from flask import Flask, request, jsonify, render_template

# Create flask app

app= Flask(__name__)

# Load the models

credit_model=pickle.load(open('model_credit.pkl','rb'))

sensitive_model=keras.models.load_model('pao.h5')

@app.route('/')
def Home():
    return render_template("index.html")

@app.route('/severity')
def SeverHome():
    return render_template("severity.html")


@app.route('/predict_score', methods=["POST"])
def predict_score():
    features=[float(x) for x in request.form.values()]

    print(features)
    features=np.array(features)
    print(features)
    features=np.expand_dims(features,axis=0)
    prediction=credit_model.predict(features)

    return render_template("index.html",prediction_text="The User is applicable {}".format(prediction))



@app.route("/severity_score", methods=['POST'])
def severity_score():
    features=[x for x in request.form.values()]
    features.append(str((datetime.fromisoformat(features[1]) - datetime.fromisoformat(features[0])).days))
    df=pd.DataFrame(columns=['DATA_RANGE_FROM', 'DATA_RANGE_TO', 'CONSENT_MODE', 'CONSENT_TYPE',
       'FETCH_TYPE', 'FREQUENCY_VALUE', 'FI_TYPE', 'DIFFDAYS'])
    df.loc[len(df)]=features
    pipeline=load(open('pipeline.pkl','rb'))
    print(type(features[-1]))
    features=pipeline.transform(df)
    # prediction=sensitive_model.predict(features)
    # features=np.expand_dims(features,axis=0)
    prediction=sensitive_model.predict(features)
    return render_template("severity.html", severity_text="The consent is of Severity level {0:.2f}".format(1 - prediction[0][0]))


if __name__=="__main__":
    app.run(debug=True)

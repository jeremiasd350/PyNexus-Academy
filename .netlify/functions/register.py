# from flask import Flask, request, jsonify
# import firebase_admin
# from firebase_admin import credentials, firestore

# app = Flask(__name__)

# # Inicializar Firebase
# cred = credentials.Certificate('pynexus-academy-d0ea4-firebase-adminsdk-zd8zx-8e465cbf68.json')
# firebase_admin.initialize_app(cred)
# db = firestore.client()

# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     if email and password:
#         # Guardar en Firestore
#         db.collection('usuarios').add({
#             'email': email,
#             'password': password  # Guarda la contraseña, aunque en un entorno real esto no es recomendado
#         })
#         return jsonify({"message": "Registro exitoso"}), 201
#     else:
#         return jsonify({"message": "Datos incompletos"}), 400

# if __name__ == '__main__':
#     app.run(debug=True)


import json
import os
import firebase_admin
from firebase_admin import credentials, firestore

# Inicializar Firebase
cred = credentials.Certificate('pynexus-academy-d0ea4-firebase-adminsdk-zd8zx-8e465cbf68.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

def handler(event, context):
    try:
        # Parsear el cuerpo de la solicitud
        body = json.loads(event['body'])
        email = body.get('email')
        password = body.get('password')

        # Validar que se recibieron email y password
        if email and password:
            # Guardar en Firestore
            db.collection('usuarios').add({
                'email': email,
                'password': password
            })
            return {
                'statusCode': 201,
                'body': json.dumps({'message': 'Registro exitoso'})
            }
        else:
            return {
                'statusCode': 400,
                'body': json.dumps({'message': 'Datos incompletos'})
            }
    except Exception as e:
        # Manejo de errores
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Error en el servidor', 'error': str(e)})
        }

import azure.functions as func
import datetime
import json
import logging

from components.getMobile import get_mobile
from components.get_mobile_id import get_mobile_id
from components.login_handler import handle_login
from components.signup_handler import handle_signup

app = func.FunctionApp()

@app.function_name(name="signup")
@app.route(route="signup", methods=[ "POST"])
def signup_function(req: func.HttpRequest) -> func.HttpResponse:
    return handle_signup(req)

@app.function_name(name="login")
@app.route(route="login", methods=[ "POST"])
def login_function(req: func.HttpRequest) -> func.HttpResponse:
    return handle_login(req)

@app.function_name(name="mobile")
@app.route(route="GetMobile", methods=[ "GET"])
def mobile_function(req: func.HttpRequest) -> func.HttpResponse:
    return get_mobile(req)

@app.function_name(name="mobile_id")
@app.route(route="GetMobile_id/{id}", methods=[ "GET"])
def mobile_id_function(req: func.HttpRequest) -> func.HttpResponse:
    return get_mobile_id(req)


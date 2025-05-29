import azure.functions as func
import datetime
import json
import logging

from components.login_handler import handle_login
from components.singup_handler import handle_signup

app = func.FunctionApp()

@app.function_name(name="signup")
@app.route(route="signup", methods=[ "POST"])
def signup_function(req: func.HttpRequest) -> func.HttpResponse:
    return handle_signup(req)

@app.function_name(name="login")
@app.route(route="login", methods=[ "POST"])
def login_function(req: func.HttpRequest) -> func.HttpResponse:
    return handle_login(req)


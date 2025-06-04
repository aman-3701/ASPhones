# FROM python:3.10-slim

# WORKDIR /app

# COPY requirements.txt .
# RUN pip install -r requirements.txt

# COPY . .

# EXPOSE 8000

# CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "function_app.py:app"]

FROM mcr.microsoft.com/azure-functions/python:4-python3.10 

ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true

COPY . /home/site/wwwroot

EXPOSE 7071


FROM mcr.microsoft.com/azure-functions/python:4-python3.10

ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true \
    FUNCTIONS_WORKER_RUNTIME=python \
    ASPNETCORE_URLS=http://+:7071

# Install Python dependencies
COPY requirements.txt /
RUN pip install --upgrade pip && pip install -r /requirements.txt

# Copy function code
COPY . /home/site/wwwroot

EXPOSE 7071

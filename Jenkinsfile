@Library('Shared') _
pipeline {
    agent any

     environment {
        SONAR_HOME = tool "Sonar"  
    }

    stages {
      

          stage("Workspace cleanup"){
            steps{
                script{
                    cleanWs()
                }
            }
        }

        stage('Git: Code Checkout') {
            steps {
                script {
                    code_checkout("https://github.com/aman-3701/ASPhones.git", "master")
                }
            }
        }

        

         stage("SonarQube: Code Analysis"){
            steps{
                script{
                  sonarqube_analysis("Sonar","ASPhones","Sonar")
                  
                }
          
            }
        }
         stage("SonarQube: Code Quality Gates"){
            steps{
                script{
                    sonarqube_code_quality()
                }
            }
        }

         stage("Trivy : FileSystem Scan"){
            steps{
                script{
                    trivy_scan()
                }
            }
        }
          stage("Docker: Build Images"){
            steps{
                script{
                        dir('backend'){
                            docker_build("asphones","latest","amandevops8080")
                        }
                    
                        dir('frontend/mob'){
                            docker_build("asphones","latest","amandevops8080")
                        }
                }
            }
        } 
         stage("Docker: Push to DockerHub"){
            steps{
                script{
                    docker_push("asphones","latest","amandevops8080") 
                    docker_push("asphones","latest","amandevops8080")
                }
            }
        }

    }
}

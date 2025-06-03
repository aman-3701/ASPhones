@Library('Shared') _
pipeline {
    agent any

     environment {
        SONAR_HOME = tool "Sonar"  
    }

    stages {
      

          stage("Workspace Cleanup"){
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
          stage("Trivy : FileSystem Scan"){
            steps{
                script{
                    trivy_scan()
                }
            }
        }

         stage("OWASP: Dependency Check"){
            steps{
                script{
                    owasp_dependency()
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
        //  stage("SonarQube: Code Quality Gates"){
        //     steps{
        //         script{
        //             sonarqube_code_quality()
        //         }
        //     }
        // }

         
          stage("Docker: Build Image"){
            steps{
                script{
                        dir('backend'){
                            docker_build("backend-asphones","latest","amandevops8080")
                        }
                    
                        dir('frontend'){
                            docker_build("frontend-asphones","latest","amandevops8080")
                        }
                }
            }
        } 
         stage("Docker: Push to DockerHub"){
            steps{
                script{
                    docker_push("backend-asphones","latest","amandevops8080") 
                    docker_push("frontend-asphones","latest","amandevops8080")
                }
            }
        }

    }
}

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

         stage("Trivy: FileSystem scan"){
            steps{
                script{
                    trivy_scan()
                }
            }
        }

      //   stage('Docker Login') {
      //       steps {
      //           withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'dockerhubuser', passwordVariable: 'dockerhubpass')]) {
      //               sh "docker login -u ${dockerhubuser} -p ${dockerhubpass}"
      //           }
      //       }
      //        sh "docker push ${dockerhubuser}/${Project}:${ImageTag}"
      //   }

    }
}

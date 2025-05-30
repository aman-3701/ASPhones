@Library('Shared') _
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build commands here
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

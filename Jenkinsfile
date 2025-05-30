pipeline {
    agent any
    stages {
        stage('Git: Code Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/aman-3701/ASPhones.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                // Add your build commands here
            }
        }
    }
}

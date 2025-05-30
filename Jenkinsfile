@Library("Shared") _
pipeline{
  agent any
   stages{
      stage('Build') {
         steps {
            echo 'Building..'
            // Add your build commands here
         }
      }
       stage('Git: Code Checkout') {
            steps {
                script{
                    code_checkout("https://github.com/aman-3701/ASPhones.git","master")
                }
            }
        }
        
   } 
}

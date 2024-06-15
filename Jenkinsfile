pipeline{
    agent any
    environment {
        DOCKER_IMAGE = "prireg.mcnal.net/jenkins-practice-service:${env.BUILD_ID}"
    }
    stages{
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('build'){
            steps{
                sh 'npm install'
                docker.build("${DOCKER_IMAGE}")
            }
        }
        stage('push'){
            docker.image("${DOCKER_IMAGE}").push()
        }
    }
}
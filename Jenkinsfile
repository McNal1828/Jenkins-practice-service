pipeline{
    agent any
    environment {
        DOCKER_IMAGE = "jenkins-practice-service:${env.BUILD_ID}"
        DOCKER_REGISTRY_URL = "https://prireg.mcnal.net"

    }
    stages{
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('build'){
            steps{
                script{
                    nodejs('20.14'){
                        sh 'npm install'
                    }
                    docker.build("${DOCKER_IMAGE}")
                }
            }
        }
        stage('push'){
            steps{
                script{
                    docker.withRegistry("${DOCKER_REGISTRY_URL}"){
                        docker.image("${DOCKER_IMAGE}").push()
                    }
                }
            }
        }
    }
}
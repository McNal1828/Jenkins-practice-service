pipeline{
    agent any
    environment {
        DOCKER_IMAGE = "jenkins-practice-service"
        DOCKER_REGISTRY_URL = "https://prireg.mcnal.net"
    }
    stages{
        stage('checkout') {
            steps {
                git branch: 'master',
                    credentialsId: 'jenkins-token',
                    url: 'https://github.com/McNal1828/Jenkins-practice-service.git'
            }
        }
        stage('build'){
            steps{
                script{
                    sh 'npm install'
                    appImage = docker.build("${DOCKER_IMAGE}")
                }
            }
        }
        stage('push'){
            steps{
                script{
                    docker.withRegistry("${DOCKER_REGISTRY_URL}"){
                        appImage.push("${env.BUILD_ID}")
                        appImage.push("latest")
                    }
                }
            }
        }
    }
}
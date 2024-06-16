pipeline{
    agent any
    environment {
        DOCKER_IMAGE = "jenkins_practice"
        DOCKER_REGISTRY_URL = "https://851725225660.dkr.ecr.ap-southeast-2.amazonaws.com"
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
                    sh 'rm -f ~/.dockercfg ~/.docker/config.json || true'
                    docker.withRegistry("${DOCKER_REGISTRY_URL}",'aws_credential'){
                        appImage.push("${env.BUILD_ID}")
                        appImage.push("latest")
                    }
                }
            }
        }
    }
}
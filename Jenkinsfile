pipeline {
  agent any
  stages {
      stage('Checkout Code') {
          steps {
              git(url: 'https://github.com/wet333/fullstack-react-node-sql-template', branch: 'master')
          }
      }

    stage('Execute Docker Compose') {
        steps {
            dir('postgre-docker') {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
    
  }
}
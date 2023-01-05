pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/wet333/fullstack-react-node-sql-template', branch: 'master')
      }
    }

    stage('Log') {
      steps {
        sh 'ls'
      }
    }

    stage('Compose Up') {
      steps {
        sh 'cd ./postgre-docker && docker-compose down && docker-compose up'
      }
    }

  }
}
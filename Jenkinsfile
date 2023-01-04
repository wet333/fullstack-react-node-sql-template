pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/wet333/fullstack-react-node-sql-template', branch: 'master')
      }
    }

    stage('Send Email') {
      steps {
        emailext(subject: 'Fullstack - Node + React', body: 'The pipeline was executed successfully', to: 'wet.4gustin@gmail.com')
      }
    }

  }
}
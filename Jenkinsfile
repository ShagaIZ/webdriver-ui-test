pipeline {
    agent any
        tools {nodejs "Node"}
    stages {
        stage('Install dependency') {
            steps {
                sh 'npm install'
            }
        } 
        stage('Run tests') {
            steps {
                sh 'npm run wdio'
            }
        } 
        stage('Allure report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }

    }
}
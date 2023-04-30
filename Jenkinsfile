pipeline {
    agent any
        tools {nodejs "Node"}
    stages {
        stage('Install dependency') {
            steps {
                bat 'npm install --verbose'
            }
        } 
        stage('Run tests') {
            steps {
                bat 'npm run wdio'
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
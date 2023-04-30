pipeline {
    agent any
        tools {nodejs "Node"}
    stages {
        stage('Install dependency') {
            steps {
                sh 'npm install'
            }
        } 
        stage('Install browsers') {
            steps {
                sh 'npx playwright install'
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
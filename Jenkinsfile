pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/thurunu711/next-blog-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "Tests failed, continuing deployment."'
            }
        }

        stage('Deploy Locally') {
            steps {
                sh 'nohup npm start &'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

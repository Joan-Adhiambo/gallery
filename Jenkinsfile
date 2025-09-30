pipeline {
    agent any
    tools {
        nodejs "node.js18"   // Matches the name you gave in Jenkins tools
    }

    environment {
        RENDER_URL   = 'https://gallery-wq7h.onrender.com'
        SLACK_CHANNEL = '#joan_ip1'
        email = 'adhiambojoan83@gmail.com'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Joan-Adhiambo/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Starting the app...'
                sh 'node server.js &'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment handled by Render auto-deploy from GitHub'
            }
        }
    }

    post {
        success {
            echo "Build #${env.BUILD_ID} successful"
        }
        failure {
            mail to: 'adhiambojoan83@gmail.com',
                 subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_ID}"
        }
    }
}

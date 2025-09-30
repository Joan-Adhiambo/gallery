pipeline {
    agent any
    tools {
        nodejs "nodejs18"
    }

    environment {
        RENDER_URL   = 'https://gallery-wq7h.onrender.com'
        SLACK_CHANNEL = '#joan_ip1'
        SLACK_TOKEN = credentials('slackwebhook')
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

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    mail to: 'adhiambojoan83@gmail.com',
                         subject: "Build Failed: ${env.BUILD_ID}",
                         body: "The build failed during TESTS.\nCheck Jenkins for details: ${env.BUILD_URL}"
                }
            }
        }
        }
        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step required,"'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment handled by Render auto-deploy from GitHub'
            }
        }
    
    
    post {
        success {
            slackSend(
                channel: "${env.SLACK_CHANNEL}",
                message: "Build #${env.BUILD_NUMBER} succeeded! Site live at: ${env.RENDER_URL}"
            )
        }
    }
}

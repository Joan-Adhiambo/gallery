pipeline {
    agent any
    tools {
        nodejs "nodejs18"
    }

    environment {
        RENDER_URL    = 'https://gallery-wq7h.onrender.com'
        SLACK_CHANNEL = '#joan_ip1'
        SLACK_TOKEN   = credentials('slackwebhook')
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
    }

    post {
        success {
            slackSend(
                channel: "${env.SLACK_CHANNEL}",
                message: "✅ Build #${env.BUILD_NUMBER} Deployed successfully!{env.RENDER_URL}"
            )
        }
        failure {
            slackSend(
                channel: "${env.SLACK_CHANNEL}",
                message: "Build #${env.BUILD_NUMBER} failed. Check logs: ${env.BUILD_URL}"
            )
        }
    }
}

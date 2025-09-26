pipeline {
    agent any
        tools {
      nodejs 'nodejs18'
    }
   triggers{
       githubPush()
   }

    environment {
        NODE_ENV = 'production'
        SLACK_WEBHOOK = credentials('slackwebhook')
        RENDER_URL = 'https://darkroom-app-2khw.onrender.com'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Test') {
            
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Render') {
            steps {steps {
                withCredentials([string(credentialsId: 'renderwebhook', variable: 'DEPLOY_HOOK')]) {
                    sh 'curl -X POST $DEPLOY_HOOK'
                }
            }

                
            }
        }
      
    stage('Run Tests') {
            
            steps {
                echo 'Running tests'
                sh 'npm test'
            }
    }
}
  
      post {
    success {
        slackSend(
            channel: '#joan_ip1',
            tokenCredentialId: 'slackwebhook',
            message: '✅ Build #${env.BUILD_NUMBER} passed. Site live at ${env.RENDER_URL}')
    }
    failure {
        slackSend(
            channel: '#joan_ip1',
           tokenCredentialId: 'slackwebhook',
            message: "❌ Build #${env.BUILD_NUMBER} failed. Logs: ${env.BUILD_URL}"
        )
    }
}

}
